const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const express = require('express');
const uuid = require('uuid');
const multer = require('multer');
const fs = require('fs');
const app = express();

const authCookieName = "token";

// Service port on 4000
const port = process.argv.length > 2 ? process.argv[2] : 4000;

//variables
let users = [];
let recipes = [];

// JSON body parsing using built-in middleware
app.use(express.json());

// Use the cookie parser middleware for tracking authentication tokens
app.use(cookieParser());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// CreateAuth a new user
apiRouter.post('/auth/create', async (req, res) => {
    if (await findUser('email', req.body.email)) {
        res.status(409).send({ msg: 'Existing user' });
    } else {
        const user = await createUser(req.body.email, req.body.password);

        setAuthCookie(res, user.token);
        res.send({ email: user.email });
    }
});

// GetAuth login an existing user
apiRouter.post('/auth/login', async (req, res) => {
    const user = await findUser('email', req.body.email);
    if (user) {
        if (await bcrypt.compare(req.body.password, user.password)) {
            user.token = uuid.v4();
            setAuthCookie(res, user.token);
            res.send({ email: user.email });
            return;
        }
    }
    res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth logout a user
apiRouter.delete('/auth/logout', async (req, res) => {
    const user = await findUser('token', req.cookies[authCookieName]);
    if (user) {
        delete user.token;
    }
    res.clearCookie(authCookieName);
    res.status(204).end();
});

// Middleware to verify that the user is authorized to call an endpoint
const verifyAuth = async (req, res, next) => {
    const user = await findUser('token', req.cookies[authCookieName]);
    if (user) {
        next();
    } else {
        res.status(401).send({ msg: 'Unauthorized' });
    }
};

const upload = multer({
    storage: multer.diskStorage({
        destination: 'public/',
        filename: (req, file, cb) => {
            // create new filename so that you don't have duplicate images overwriting each other
            const filetype = file.originalname.split('.').pop();
            const id = Math.round(Math.random() * 1e9);
            const filename = `${id}.${filetype}`;
            cb(null, filename);
        },
    }),
    // file can only be 64000
    limits: { fileSize: 120000 },
});

// POST for file upload
apiRouter.post("/upload", upload.single('file'), (req, res) => {
    if (req.file) {
        // res.send({
        //     message: 'Uploaded succeeded',
        //     file: req.file.filename,
        // });
        const filePath = `/public/${req.file.filename}`; // Adjust based on your actual file storage path

        console.log(filePath);
        console.log(req.file.filename);
        res.send({
            message: 'Upload succeeded',
            file: req.file.filename,
            filePath: filePath,  // Add full path for easier frontend use
        });
    } else {
        res.status(400).send({ message: 'Upload failed' });
    }
})

// GET for all recipes
apiRouter.get("/recipes", verifyAuth, (_req, res) => {
    res.send(recipes);
})


// POST for new recipe
apiRouter.post("/recipe", verifyAuth, (req, res) => {
    recipes = updateRecipes(req.body);
    res.send(recipes);
})

// DELETE Recipe
apiRouter.delete("/current-recipe", (req, res) => {
    recipes = deleteRecipe(req.body);
    res.send(recipes);
})

async function deleteRecipe(recipe) {
    let image = recipe.imgURL;
    let i = recipes.find(recipe.recipeName);

    if (i !== undefined) {
        recipes.splice(i, 1);
    }

    fs.unlink(image);

    return recipes;
}


// Default error handler
app.use(function (err, req, res, next) {
    res.status(500).send({ type: err.name, message: err.message });
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
});

function updateRecipes(newRecipe) {
    recipes.push(newRecipe);

    return recipes;
}

async function createUser(email, password) {
    const passwordHash = await bcrypt.hash(password, 10);

    const user = {
        email: email,
        password: passwordHash,
        token: uuid.v4(),
    };
    users.push(user);

    return user;
}

async function findUser(field, value) {
    if (!value) return null;

    return users.find((u) => u[field] === value);
}


// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
    res.cookie(authCookieName, authToken, {
        secure: true,
        httpOnly: true,
        sameSite: 'strict',
    });
}

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});