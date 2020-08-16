const app = document.querySelector('.app');

app.innerHTML = `<h1>Loading ...</h1>`;

fetch('https://jsonplaceholder.typicode.com/posts?id=1').then(res => res.json()).then(data => {
  const postTitle = data[0].title;
  app.innerHTML = `<h1>${postTitle}</h1>`;
});