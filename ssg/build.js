const fs = require('fs');
const fetch = require('isomorphic-fetch');

const FILEPATH = './dist/index.html';

function generateHTML(data) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>SSG</title>
    <style>
      body, html {
        padding: 0;
        margin: 0;
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: sans-serif;
        background: #3c40c6;
        color: #fff
      }
    </style>
  </head>
  <body>
    <h1>${data}<h1>
  </body>
  </html>
  `;
}

fetch('https://jsonplaceholder.typicode.com/posts?id=1').then((res) => res.json()).then((data) => {
  const postTitle = data[0].title;
  const renderedHTML = generateHTML(postTitle);

  fs.writeFile(FILEPATH, renderedHTML, function (err) {
    if (err) return console.log(err);
    console.log('✔️ Built HTML File');
  });
});
