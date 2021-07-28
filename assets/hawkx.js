/*
Hoja javascipt en sucio para trabajar el JS del tema
========================================================*/

/* Inicio onload
========================================================*/
window.onload = function() {

    // Función para añadir la clase sticky al header cuando se hace scroll Fran
      const container_header = document.getElementById("shopify-section-header"); // Definimos el contenedor del elemento que va a ser sticky
      const header = document.querySelectorAll("#shopify-section-header header")[0]; // Definimos el elemento que va a ser sticky
      const Nsticky = document.querySelectorAll("#shopify-section-announcement-bar")[0].offsetHeight; // Definimos la cantidad de desplazamiento antes de aplicar sticky

      // Añadimos el evento para escuvhar el desplazamiento
      window.addEventListener("scroll", function() {sticky_menu(container_header, header, Nsticky);}, { passive: false });

      // Comprobamos si existe desplazamiento vertical en scroll para aplicar sticky
      if (pageYOffset >= Nsticky || scrollY >= Nsticky) {
          container_header.style.height = header.offsetHeight + "px";
          container_header.classList.add("sticky");
      }

      const button_search = document.querySelectorAll(".search__header");
      const form_search = document.querySelectorAll(".search__header form");
      const searh_search = document.querySelectorAll(".search__header .search_input__header");

      button_search[0].addEventListener("click", function() { toggle(this, "open"); searh_search[0].focus(); }, { passive: false });
      form_search[0].addEventListener("click", function(event) { event.stopPropagation(); }, { passive: false });
  
}
// Fin onload


//Función para añadir la clase sticky al header cuando se hace scroll Fran
function sticky_menu($container, $element, $number) {
  $container.style.height = $element.offsetHeight + "px";

    if (pageYOffset >= $number || scrollY >= $number) {
      $container.classList.add("sticky");
    } else if(pageYOffset < $number || scrollY < $number){
      $container.classList.remove("sticky");
    }
}

//Función para añadir o quitar una clase
function toggle($element, $class) {
  $element.classList.toggle($class);
}


import PredictiveSearch from "@shopify/theme-predictive-search";

var predictiveSearch = new PredictiveSearch({
  resources: {
    type: [PredictiveSearch.TYPES.PRODUCT],
    limit: 4,
    options: {
      unavailable_products: PredictiveSearch.UNAVAILABLE_PRODUCTS.LAST,
      fields: [
        PredictiveSearch.FIELDS.TITLE,
        PredictiveSearch.FIELDS.VENDOR,
        PredictiveSearch.FIELDS.PRODUCT_TYPE,
        PredictiveSearch.FIELDS.VARIANTS_TITLE
      ]
    }
  }
});

// Set success event listener
predictiveSearch.on("success", suggestions => {
  const productSuggestions = suggestions.resources.results.products;

  if (productSuggestions.length > 0) {
    const firstProductSuggestion = productSuggestions[0];

    alert(`The title of the first product suggestion is: ${firstProductSuggestion.title}`);
  }
});

// Set error event listener
predictiveSearch.on("error", error => {
   console.error("Error message:", error.message);
});

// Send query
predictiveSearch.query("The Calling");