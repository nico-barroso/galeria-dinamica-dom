import { servicesFooterData, products } from "./data.js";

//! -----------Funciones de procesado de lista de datos---------
//? Array - Int
//Cuenta la longitud de la lista de objetos y devuelve un entero que se pasa por
//un párrafo antes de la galería dinámica.
function productTotalPag(products) {
  const resultSection = document.querySelector(".results-sort");
  const p = document.createElement("p");

  p.innerHTML = `Showing a total of ${products.length} products`;
  resultSection.insertBefore(p, resultSection.firstChild);
}

productTotalPag(products);

//? Array - Lista dinámica
//Esta función recibe una lista de objetos para crear una lista de cartas predefinida
//que crea diferentes estilos de cartas y
function productGallery(products) {
  const gridGalleryContainer = document.querySelector("#gallery-grid");

  for (const product of products) {
    const article = document.createElement("article");
    article.setAttribute("class", "card");
    article.innerHTML = `
    <div class="top-card"><p>${product.label}</p><i class="fa fa-heart-o" aria-hidden="true"></i></div>
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
  //del array de objetos, puesto que ambas imágenes comparten el mismo índice en el array.

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
  const showFilterClass = "show-filter";
  let showFilter = document.querySelector(".show-filter");

  // Create the filter button if it doesn't exist
  if (!showFilter) {
    showFilter = document.createElement("div");
    showFilter.classList.add(showFilterClass);
    showFilter.innerHTML = `
      <div class="filter-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="10"
          viewBox="0 0 12 10"
          fill="none"
          class="filter-icon"
        >
          <path
            d="M9.31563 6.19851C10.3844 6.19851 11.25 7.04956 11.25 8.09956C11.25 9.14895 10.3844 10 9.31563 10C8.24752 10 7.38127 9.14895 7.38127 8.09956C7.38127 7.04956 8.24752 6.19851 9.31563 6.19851ZM4.54685 7.28885C5.01497 7.28885 5.39497 7.66218 5.39497 8.1221C5.39497 8.58139 5.01497 8.95534 4.54685 8.95534H0.84812C0.379998 8.95534 0 8.58139 0 8.1221C0 7.66218 0.379998 7.28885 0.84812 7.28885H4.54685ZM1.93436 0C3.00311 0 3.86873 0.851053 3.86873 1.90044C3.86873 2.95044 3.00311 3.80149 1.93436 3.80149C0.866245 3.80149 0 2.95044 0 1.90044C0 0.851053 0.866245 0 1.93436 0ZM10.4025 1.06781C10.87 1.06781 11.25 1.44114 11.25 1.90044C11.25 2.36035 10.87 2.73369 10.4025 2.73369H6.70377C6.23565 2.73369 5.85565 2.36035 5.85565 1.90044C5.85565 1.44114 6.23565 1.06781 6.70377 1.06781H10.4025Z"
            fill="#333333"
          ></path>
        </svg>
        <span class="h-filter">Show filters</span>
      </div>
    `;

    // Attach click event listener after creating the element
    showFilter.addEventListener("click", () => {
      filter.classList.toggle("hidden");
    });
  }

  // Handle filter visibility based on window width
  if (window.innerWidth < 1090) {
    filter.classList.add("hidden");
    if (!document.querySelector(".show-filter")) {
      const introColumn = document.querySelector("#intro");
      introColumn.insertBefore(showFilter, introColumn.firstChild);
    }
  } else {
    filter.classList.remove("hidden");
    if (document.querySelector(".show-filter")) {
      showFilter.remove();
    }
  }
}

// Ensure filterSize runs on window resize
window.addEventListener("resize", filterSize);

// Initial call to set initial state on page load
filterSize();

//!REVISAR
// searchBarDiv();
// Attach event listener to the search bar

function gridVisibility() {
  const gridContainer = document.querySelector("#gallery-grid");
  const threeColIcon = document.querySelector("#three-column");
  const twoColIcon = document.querySelector("#two-column");

  // Create and append the one-column icon once

  function eventsIcons() {
    twoColIcon.addEventListener("click", () => {
      gridContainer.classList.remove("three-columns");
      gridContainer.classList.add("two-columns");
      twoColIcon.classList.add("icons");
      threeColIcon.classList.remove("icons");
    });

    threeColIcon.addEventListener("click", () => {
      gridContainer.classList.remove("two-columns");
      gridContainer.classList.add("three-columns");
      threeColIcon.classList.add("icons");
      twoColIcon.classList.remove("icons");
    });
  }

  if (window.innerWidth < 901) {
    const grid = document.querySelector("#gallery-grid");
    grid.classList.toggle("two-columns");
  }
  window.addEventListener("resize", () => {
    if (window.innerWidth < 900) {
      gridContainer.classList.add("two-columns");
      threeColIcon.classList.add("hidden");
      twoColIcon.classList.add("icons");
    } else {
      twoColIcon.classList.remove("icons");
      threeColIcon.classList.remove("hidden");
      gridContainer.classList.remove("two-columns");
      gridContainer.classList.add("three-columns");
    }
  });

  if (gridContainer.classList.contains("three-columns")) {
    threeColIcon.classList.add("icons");
    twoColIcon.classList.remove("icons");
  } else if (gridContainer.classList.contains("two-columns")) {
    twoColIcon.classList.add("icons");
    threeColIcon.classList.remove("icons");
  }

  eventsIcons();
}

gridVisibility();

function asideAnimation() {
  const aside = document.querySelector(aside);
  console.log(showFilter);
}

// asideAnimation();

function serviceFooter(data) {
  const servContainer = document.querySelector("#services");
  servContainer.innerHTML = ""; // Clear existing content

  data.forEach((service) => {
    const article = document.createElement("article");
    article.classList.add("faq");

    const h3 = document.createElement("h3");
    h3.textContent = service.title;
    article.appendChild(h3);

    const ul = document.createElement("ul");
    ul.classList.add("subgrid");
    article.appendChild(ul);

    service.servicesArr.forEach((nameLink) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = nameLink.link;
      if (service.icons === false) {
        a.textContent = nameLink.sName;
      }
      if (service.icons === true) {
        a.innerHTML = `${nameLink.icon} ${nameLink.sName} `;
      }
      li.appendChild(a);
      ul.appendChild(li);
    });

    servContainer.appendChild(article);
  });
}

serviceFooter(servicesFooterData);

function footerExp() {
  const articles = document.querySelectorAll("#services article");

  articles.forEach((article) => {
    const h3Click = article.querySelector("h3");
    const subgrid = article.querySelector(".subgrid");

    h3Click.addEventListener("click", () => {
      subgrid.classList.toggle("expanded");
      console.log(h3Click);
    });
  });
}
footerExp();
