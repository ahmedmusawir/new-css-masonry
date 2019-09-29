fetch('https://jsonplaceholder.typicode.com/albums/1/photos?_page=1')
  // .then((response) => response.text())
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    let page = document.querySelector('.masonry');
    data.forEach((img) => {
      console.log(img.thumbnailUrl);

      const item = document.createElement('DIV');
      // const html = `<img src="${img.thumbnailUrl}" />`;

      const html = `
      
      <div class="item">
        1
        <img src="${img.thumbnailUrl}" />
      </div>
      `;
      item.innerHTML = html;
      page.appendChild(item);
    });
  });
