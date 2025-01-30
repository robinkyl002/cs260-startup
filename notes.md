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

## JavaScript/React Notes

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
