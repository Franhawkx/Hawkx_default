/*
Hoja javascipt en sucio para trabajar el JS del tema
========================================================*/


window.onload = function() {
    //Función para añadir la clase sticky al header cuando se hace scroll Fran
    const container_header = document.getElementById("shopify-section-header");
    const header = document.querySelectorAll("#shopify-section-header header")[0];
    
    const Nsticky = document.querySelectorAll("#shopify-section-announcement-bar")[0].offsetHeight;
    window.addEventListener("scroll", function() {sticky_menu(container_header, header, Nsticky);}, { passive: false });

    if (pageYOffset >= Nsticky  || scrollY >= Nsticky) {
        container_header.style.height = header.offsetHeight + "px";
        container_header.classList.add("sticky");
    }
}


//Función para añadir la clase sticky al header cuando se hace scroll Fran
function sticky_menu($container, $element, $number) {
  $container.style.height = $element.offsetHeight + "px";

    if (pageYOffset >= $number || scrollY >= $number) {
      $container.classList.add("sticky");
    } else if(pageYOffset < $number || scrollY < $number){
      $container.classList.remove("sticky");
    }
}
