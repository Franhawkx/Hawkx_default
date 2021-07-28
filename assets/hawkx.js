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

      button_search[0].addEventListener("click", function() { toggle(this, "open"); }, { passive: false });
      form_search[0].addEventListener("click", function(event) { event.stopPropagation(); }, { passive: false });
      button_search[0].addEventListener("click", function() { searh_search[0].focus(); }, { passive: false });
      
      
      

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
