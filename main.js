fetch('https://jsonplaceholder.typicode.com/posts?_page=1')
  // .then((response) => response.text())
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    let page = document.querySelector('.masonry');
    data.forEach((article) => {
      console.log(article.title);

      const item = document.createElement('DIV');
      // const html = `<img src="${img.thumbnailUrl}" />`;

      const html = `
      
      <article class="item" style="padding: 3rem;">

        <h1>${article.title}</h1>
        <h4>Article ID: ${article.id}</h4>
        <p> ${article.body}</p>

      </article>
      `;
      item.innerHTML = html;
      page.appendChild(item);
    });
  });
