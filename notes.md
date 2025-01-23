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
-

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
