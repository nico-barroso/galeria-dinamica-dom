/*
| a. A que zona de la arquitectura de la página pertecene y su sección
| b. Que input recibe la función, que procesa y que devuelve.
▼ c. Pequeño resumen de que realiza la función o bloque de código.

-------
| 1. Selectores y declaraciones de variables
| 2. DOM.
| 3. Loops.
▼ 4. Eventos y demás.
  ------
  5. Invocaciones de las funciones al final.

Este orden también se respeta en cuanto a las funciones, teniendo prioridad el DOM y terminando
con la creación de eventos (a no ser que fuera necesario por fuerza mayor y necesidad el código.)

*/

import { servicesFooterData, products } from "./data.js";

//!..Funciones de la galería de productos...
//? <main> #gallery-shop
// -> DATOS productos -> Int
//Recibe una lista de datos y los procesa en un entero para saber cuantos productos
//hay en total insertandolos en un string.
function productTotalPag(products) {
  const resultSection = document.querySelector(".results-sort");
  const p = document.createElement("p");

  p.innerHTML = `Showing a total of ${products.length} products`;
  resultSection.insertBefore(p, resultSection.firstChild);
}

//? <main> #gallery-shop
// -> DATOS productos -> DOM(article)
// Crea la tarjeta donde se encuentra la imagen, nombre y otros datos de cada una de
//las gafas, haciendo append a su sección correspondiente.
function productGallery(products) {
  const gridGalleryContainer = document.querySelector("#gallery-grid");

  products.forEach((product) => {
    const article = document.createElement("article");
    article.setAttribute("class", "card");
    article.innerHTML = `
      <div class="top-card">
        <p>${product.label}</p>
        <i class="fa fa-heart-o" aria-hidden="true"></i>
      </div>
      <div class="img-container">
        <img src="${product.thumbImg}" alt="${product.name} image" />
      </div>
      <div class="flex-name">
        <h2 class="name">${product.name}</h2>
        <p class="size">${product.size}</p>
      </div>
      <div class="flex-card">
        <h3 class="price">${product.price}€</h3>
        <div class="rate">
          <p>${product.rate}</p>
          <img src="./assets/img/icons/star-rating.svg" alt="Star rating" class="star"/>
        </div>
      </div>`;
    gridGalleryContainer.append(article);
  });
}

//? <main> #gallery-shop
// -> DATOS productos -> EventListener
//Mediante el hover de las cards cambia el thumb de la imagen que tiene en el objeto de
//los datos.
function galleryHoverThumb(products) {
  const container = document.querySelector("#gallery-grid");
  const cards = Array.from(container.children);

  cards.forEach((card, index) => {
    card.addEventListener("mouseover", () => {
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

//! ...Funciones del aside y de los filtros...
//? <main> <aside>
//<aside> -> DOM(.filter-button)
//La siguiente función recibe un aside a través de DOM que
function filterSize() {
  const filter = document.querySelector("aside");
  const showFilterClass = "show-filter";
  let showFilter = document.querySelector(`.${showFilterClass}`);

  if (!showFilter) {
    showFilter = document.createElement("div");
    showFilter.classList.add(showFilterClass);
    showFilter.innerHTML = `
      <div class="filter-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none" class="filter-icon">
          <path d="M9.31563 6.19851C10.3844 6.19851 11.25 7.04956 11.25 8.09956C11.25 9.14895 10.3844 10 9.31563 10C8.24752 10 7.38127 9.14895 7.38127 8.09956C7.38127 7.04956 8.24752 6.19851 9.31563 6.19851ZM4.54685 7.28885C5.01497 7.28885 5.39497 7.66218 5.39497 8.1221C5.39497 8.58139 5.01497 8.95534 4.54685 8.95534H0.84812C0.379998 8.95534 0 8.58139 0 8.1221C0 7.66218 0.379998 7.28885 0.84812 7.28885H4.54685ZM1.93436 0C3.00311 0 3.86873 0.851053 3.86873 1.90044C3.86873 2.95044 3.00311 3.80149 1.93436 3.80149C0.866245 3.80149 0 2.95044 0 1.90044C0 0.851053 0.866245 0 1.93436 0ZM10.4025 1.06781C10.87 1.06781 11.25 1.44114 11.25 1.90044C11.25 2.36035 10.87 2.73369 10.4025 2.73369H6.70377C6.23565 2.73369 5.85565 2.36035 5.85565 1.90044C5.85565 1.44114 6.23565 1.06781 6.70377 1.06781H10.4025Z" fill="#333333"></path>
        </svg>
        <span class="h-filter">Show filters</span>
      </div>
    `;
    showFilter.addEventListener("click", () => {
      filter.classList.toggle("hidden");
    });
    const introColumn = document.querySelector("#intro");
    introColumn.insertBefore(showFilter, introColumn.firstChild);
  }

  if (window.innerWidth < 1090) {
    filter.classList.add("hidden");
  } else {
    filter.classList.remove("hidden");
    if (document.querySelector(`.${showFilterClass}`)) {
      showFilter.remove();
    }
  }
}

//?<main> #gallery-shop
// DOM(selectors) -> events
// Maneja la visibilidad y el diseño de la cuadrícula al redimensionar la página
function gridVisibility() {
  const gridContainer = document.querySelector("#gallery-grid");
  const threeColIcon = document.querySelector("#three-column");
  const twoColIcon = document.querySelector("#two-column");

  //Controla los botones de cambio de la grilla entre dos columnas tres al hacer click.
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

  //Ajusta el tamaño de la grilla según el tamaño interno de la ventana del navegador.
  function resize() {
    if (window.innerWidth < 901) {
      gridContainer.classList.toggle("two-columns");
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
  }
  resize();
  eventsIcons();
}

//? <footer>
//DATOS footer -> servicios
// Crea el contenido de servicios en el pie de página
function serviceFooter(data) {
  const servContainer = document.querySelector("#services");
  servContainer.innerHTML = ""; // Limpiar contenido existente

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
      //Hemos añadido una key en la data de objetos que nos ayuda a saber si esa
      //agrupación de objetos cuenta con iconos, podemos realizar una simple condición.
      //En este caso para probar a hacer una condición mucho más simple se opta por
      //los operadores ? y :.

      /*if (service.icons == true) {
        a.innerHTML = `${nameLink.icon} ${nameLink.sName}`;
      } else {
        a.innerHTML = `${nameLink.sName}`;
      }*/

      a.iinerhtml = service.eventsIcons;
      a.innerHTML = service.icons
        ? `${nameLink.icon} ${nameLink.sName}`
        : nameLink.sName;
      li.appendChild(a);
      ul.appendChild(li);
    });

    servContainer.appendChild(article);
  });
}

//? <footer>
//Expande el footer al hacer click cuando el tamaño de la ventana es inferior al normal.
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

//Invocaciones
//Galería de productos #gallery-shop
productTotalPag(products);
productGallery(products);
galleryHoverThumb(products);
//Visibilidad y resize de grilla
window.addEventListener("resize", filterSize);
gridVisibility();
//Footer
serviceFooter(servicesFooterData);
footerExp();
