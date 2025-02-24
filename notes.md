# CS 260 Notes

[My startup](https://startup.lets-eat.click)

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)
- [Markdown Documentation](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

## AWS Notes

- Caddy separates traffic to subdomains

### 1/16/25 Class - Server

- DNS was established to make it easier to remember how to access a site without needing to remember IP
- localhost - 127.0.0.1
  - port follows localhost (i.e. localhost:8080)
- DNS records
  - A -> matches domain name with IP address
  - CNAME -> alias (redirects to other address)
- Startup on port 4000, simon on port 3000

## HTML Notes

- [HTML Structure CodePen](https://codepen.io/robinkyl002/pen/MYgqLqg)
- [HTML Input](https://codepen.io/robinkyl002/pen/OPLBqxd?editors=1010)
- [HTML Media](https://codepen.io/robinkyl002/pen/emOQYxv?editors=1000)

```
<!DOCTYPE html>
<html lang="en">

<head>
  <title>First HTML</title>
</head>

<body>
  Hello World
</body>

</html>

```

### DOM (Document object Model)

HTMl establishes the data tree that is rendeered based on the DOM

Live server extension allows you to see what is happening with code without pushing to an actual server.

```
<body>
  <p>Hello World</p>

  <img width="10" alt="beach" src="image.png">
</body>
```

| Element | Meaning |
| html | page contatiner |
| head | Header info |
| title | title of page |
| body | Entire content body of page |
| main | main portion of page |

| Character | Entity |
| & | &amp; |
| < | &lt; |
| > | &gt; |

### Notes from CodePen practice

- Structure of img tag
  - `<img href="link" alt="alternative text" width=300 height=300/>`
- Tables are set up by row first (`<tr>`), then cell in each row (`<td>`)

## CSS Notes

- [CSS practice](https://codepen.io/robinkyl002/pen/jENdbJo)
- [CSS Flex](https://codepen.io/robinkyl002/pen/jENJyYp)
- [CSS Bootstrap](https://codepen.io/robinkyl002/pen/JoPzqrB?editors=1000)

### Class Notes

- text is considered node in the DOM
- CSS format -> selector, property, value
- can do inline CSS, style tag, or separate style sheet

| Selector      | Meaning                                  | Example           |
| ------------- | ---------------------------------------- | ----------------- |
| element       | HTML element                             | p, h1             |
| id            | unique identifier                        | #cow, #savage     |
| class         | selector to group a portion of selectors | .rounders, .sides |
| Element class | elements with specific name and class    | p.highlight       |
| List          | any of given selectors                   | body, section     |
| Descendant    | any of specific selector under parent    | body p            |
| Child         | elements directly under parent           | section > p       |
| Pseudo        | a                                        | b                 |

- Use \* to apply styling to every element in the program

- Responsive design
  - utilize metadata

```
aside {
  float: right;
  padding: 3em;
  margin: 0.5em;
  float: inline-end;
}
```

- float only works to put something to one side or the other
- Display declaration
  - block takes up entire width of page
  - none does not show up
  - inline takes up a portion of the width - right next to other inline items (define height and width of content)
  - flex keeps objects evenly distributed
  - grid - laid out in grid format and has rules

```
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 300 px;
  grid-gap: 1em;
}
```

```
.container {
  display: flex;
}

// will not grow or shrink
.item {
  flex: 0 0 50 px
}
```

- grow, shrink, basis (default)
- grow or shrink is the portion out of the available space that should be used by the element
- block display type is default for div
- inline display type is default for span
- star selector (`*`) selects all elements in the DOM
- Media queries

```
@media (orientation: portrait) {
  div {
    transform: rotate(270deg);
  }
}
```

```
@media (orientation: portrait) {
  body {
    flex-direction: column;
  }
}

@media ((orientation: portrait) and (max-height: 500px) {
  aside {
    display: none;
  }
}
```

- CSS Frameworks
  - contains styles already built that you can import and use
  - import using `<link rel="stylesheet">` and `<script src="link">`

## JavaScript

### Class Notes

- Dynamically typed
- built in functions in the browser such as alert
- const variable, let is for regular variable
- `console.log()` to put out output in console
- use `+` to concatenate string

```
function join(a,b='happy') {
  return a + ' ' + b;
}

console.log(join('Hello', 'world'));
```

- set default value
- if you try to execute function with too many parameters, it just ignores extra ones
- array definition -> const means that variable is pointing to just the array, but you can still modify the array contents
- parameter for `forEach()` array function is a function saying what to do

```
const words = ['hello', 'world'];

function l(w) {
  console.log(w);
}
l(words[0])

words.forEach(l);

words.forEach((word) => console.log(word));
```

Temporal literal

```
function countdown() {
  let i = 0;
  while (i++ < 5) {
    console.log(`Counting...${i}`);
  }
}
```

functions

```
function sayHello() {
  console.log('hello');
}
```

- You can use script file, script tag, or inline event handlers to implement JS

#### Node.js

- Running JS outside the browser in the console
- npm (node package manager)
  - access to massive
- Node - JS runtime environment
- update Node version

```
const giveMeAJoke = require('give-me-a-joke);

setInterval(() => {
giveMeAJoke.getRandomDadJoke((joke) => {
  console.log(joke)
});
}, 1000);
```

- Use VS code to debug backend JS, use browser tools to debug frontend JS
- use `"runtimeArgs": [--watch]` to let changes you apply be detected even while running the code

## React Notes

- [React Components Codepen](https://codepen.io/robinkyl002/pen/ogvrpEb?editors=0110)
- [React Routes](https://codepen.io/robinkyl002/pen/GgKbxgL?editors=0110)
- [React: Reactivity](https://codepen.io/robinkyl002/pen/xbxbjaz?editors=0010)
- [JavaScript Arrays](https://codepen.io/robinkyl002/pen/gbObzaq?editors=0011)

### Class Notes

- web framework - JS that someone already wrote
- Simplify common patterns
- provide common components - reuse things, replace one piece with another
- improve performance - avoids issues that cause slowness
- increase device coverage - handle issues that prevent rendering on different devices or browsers

- Jordan Walke created React
- JSX is major part and combines JS with HTML
- Babel understands JSX and changes it to JS and HTML

```
//JSX
const jsx = <p>Hello World</p>
//Babel transpiled

//JS
const jsx = React.createElement("p", null, "Hello world")

//browser rendered (DOM)
<p>Hello World</p>
```

- Use Babel in Codepen

```
//HTML
<div id="root">loading...</div>


//JS
function Hello() {
  return <div>Hello React</div>;
};

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<Hello />)

// could use
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<div>Hello Dog</div>)
```

- components are identified with caps

```
const Hello = ({phrase}) => {
  return (
    <div>
      <p>Hello {phrase}</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<Hello phrase="friends"/>)

// root.render(<div><Hello phrase="friends" /><Hello phrase="enemies" /></div>)
```

State

```
const Hello = () => {
  const [color, setColor] = React.useState(initColor);
  function changeColor() {
    setColor(color === "red" ? "green" : "red");
  }
  return (
    <div>
    <p style ={{color: color, backgroundColor: initColor }}Hello React</p>
    <button onClick={changeColor}>change</button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<Hello initColor="blue" />)
```

#### children

```
function Header() {
  return (
    <nav className=>
  )
}

function Link()
```

#### Router

multi-page application

- duplicate HTML
- reloading everything over again with each click

single page application

- one HTML file
- components that are pulled in

BrowserRouter

- Use nav link to access and render code for selected path (link anchor tag)
- map the route to the components
- maintains state and tracks previous paths
- can create subcomponents
- navlink used in conjunction with router (if you create new Router, you need a new NavLink)

Toolchain to compile JSX

- Use Vite to run Babel and create hotloading server

#### JavaScript

- `console.log()` and `console.time()` are useful when running a lot of code without needing to step through everything or tracking async function

Arrays

```
const a = [1, 2, 3];

console.log(a.map((i) => i + i));

console.log(a.reduce((v1, v2) => v1 + v2));

console.log(a.sort((v1, v2) => v2 - v1));

a.push(4);
console.log(a.length);

```

Objects

- map of key value pairs (maps)

```
const obj = {
  a: 3,
  b: 'fish',
  c: [1, true, 'dog'],
  d: { e: false},
  f: function () {
    return 'hello';
  },
};

console.log(Object.entries(obj));
console.log(Object.keys(obj));
console.log(Object.values(obj));
```

JSON

- text serialized representation of JS object
- no undefined or functions in JSON
- `const json = JSON.stringify(obj)` converts to JSON
- `const jsobject = JSON.parse(json)` converts to JS

Local storage

- Store information locally in the individual user's browser

#### Interactivity

Properties to components - parent component passes to child component, if data changes, render again
State on components - initial state and then if state changes, render again

- useState creates array with first item as the default value, and the second as the function to update the value

#### Promises

- [Promises Codepen](https://codepen.io/robinkyl002/pen/bNGwbem?editors=0010)

- Browser rendering is single threading (can't run multiple things in parallel)
- I promise to call you back
- promise states
  - pending - currently running asynchronously
  - fulfilled - completed successfully
  - rejected - failed to complete

```
// name of function passed in can be anything, but in the back it will be a resolve function
function callback(resolve) {
 setTimeout(() => {
   resolve('done');
 }, 5000);
}

const p = new Promise(callback);

p.then((result) => console.log(`in then ${result}`));
```

```
function goShop(item) {
  return (resolve) => {
   setTimeout(() => {
   resolve(item);
  }, 5000);
  }
}

const p = new Promise(goShop('Milk'));

p.then((result) => console.log(result));
```

```
function coinToss() { new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.1) {
      resolve(Math.random() > 0.5 ? 'heads' : 'tails');
    } else {
      reject('fell off table');
    }
  }, 3000);
});
}

coinToss()
  .then((result) => console.log(`Toss result: ${result}`))
  .catch((err) => console.error(`Error: ${err}`))
 .finally(() => console.log('Toss completed'));
```

```
// placeOrder returns promise
// then returns promise
// catch handles exceptions or reject state
// finally is always called, regardless of fulfilled or rejected

placeOrder(order)
   .then((order) => makePizza(order))
   .then((order) => serveOrder(order))
   .catch((order) => orderFailure(order))
  .finally(() => logOrder(order));
```

#### Async/Await

- [Async/Await Codepen](https://codepen.io/robinkyl002/pen/GgRjKWx?editors=0010)

- Await blocks until resolves or rejects
- await only works with promises
- Use await when you want to make sure that code stops until result is received
- await is still doing then, just puts everything following in a new then block

```
try {
  const result = await coinToss;
  console.log(`Toss result ${result}`);
} catch (err) {
  console.error(`Error: ${err}`);
} finally {
  console.log(`Toss completed`);
}
```

```
// async indicates that promise is returned
async function cow() {
  return new Promise((resolve) => {
    resolve('moo');
  });
}

//await blocks until resolves or rejects
console.log(await cow());
// OUTPUT: moo
```

- Rule for using await
  - top level module function or called from async function
  - All parent functions must use async

```
async function cow() {
  return new Promise((resolve) => {
    resolve('moo');
  });
}

async function cattleDrive() {
  await cow();
  await cow();
  return "cows came home";
}

console.log(await cattleDrive());
// OUTPUT: cows came home
```

- **Remember that async will auto-generate promise if not explicitly returned**
