const products = [
  {
    name: "Too Smooth",
    size: "M",
    price: 35.95,
    rate: 4.4,
    thumbImg: "./assets/img/gafa-img/1925-eyeglass-normal.webp",
    hoverImg: "./assets/img/gafa-img/1925-eyeglass-angle.webp",
    alt: "",
    link: " https://www.zennioptical.com/p/mens-rectangle-eyeglass-frames/1951?skuId=195112",
  },
  {
    name: "Rectangle",
    size: "L",
    price: 25.95,
    rate: 4.2,
    thumbImg: "./assets/img/gafa-img/1926-eyeglass-normal.webp",
    hoverImg: "./assets/img/gafa-img/1926-eyeglass-angle.webp",
    link: "https://www.zennioptical.com/p/mens-stainless-steel-rectangle-eyeglass-frames/3271?skuId=327112",
  },
  {
    name: "The Playmaker",
    size: "L",
    price: 45.95,
    rate: "5",
    thumbImg: "./assets/img/gafa-img/1927-eyeglass-front.webp",
    hoverImg: "./assets/img/gafa-img/1927-eyeglass-angle.webp",
    alt: "",
    link: "",
  },
];

function productTotalPag(products) {
  const resultSection = document.querySelector(".results-sort");
  const p = document.createElement("p");
  p.innerHTML = `Showing a total of ${products.length} products`;

  resultSection.insertBefore(p, resultSection.firstChild);
}

productTotalPag(products);

function productGallery(products) {
  const gridGalleryContainer = document.querySelector("#gallery-grid");
  for (const product of products) {
    const article = document.createElement("article");
    article.setAttribute("class", "card");
    article.innerHTML = `
      <div class="img-container">
        <img src="${product.thumbImg}" alt="" />
      </div>
      <div class="flex-name">
        <h2 class="name">${product.name}</h2>
        <p class="size">${product.size}</p>
      </div>
      <div class="flex-card">
        <h3 class="price">${product.price}€</h3>
        <div class="rate">
          <p>${product.rate}</p>
          <img src="./assets/img/icons/star-rating.svg" alt="" class="star"/>
        </div>
      </div>`;
    gridGalleryContainer.append(article);
  }
}

productGallery(products);

function galleryHoverThumb(products) {
  const container = document.querySelector("#gallery-grid");
  const cards = Array.from(container.children);

  //Hacemos que al añadir eventos el índice del foreach coincida con el índice
  //del array de objetos, puesto que ambas imágenes comparten el mismo index.

  cards.forEach((card, index) => {
    card.addEventListener("mouseover", () => {
      //! Le hacemos el querySelector a la CARD, no al document (o pillará solo la primera tarjeta como me ha pasado...)
      const cardImg = card.querySelector(".img-container img");
      cardImg.src = products[index].hoverImg;
    });

    card.addEventListener("mouseout", () => {
      const cardImg = card.querySelector(".img-container img");
      cardImg.src = products[index].thumbImg;
    });

    card.addEventListener("click", () => {
      location.href = products[index].link;
    });
  });
}

galleryHoverThumb(products);

function filterSize() {
  const filter = document.querySelector("aside");
  if (window.innerWidth < 900) {
    filter.style.display = "none";
  } else {
    filter.style.display = "block";
  }
}

window.onresize = filterSize;
