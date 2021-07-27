/*
Hoja javascipt en sucio para trabajar el JS del tema
========================================================*/


window.onload = function() {
    //Función para añadir la clase sticky al header cuando se hace scroll Fran
    const divHeader = document.getElementById("shopify-section-header");

    const Nsticky = document.querySelectorAll("#shopify-section-announcement-bar")[0].offsetHeight;
    window.addEventListener("scroll", function() {sticky(divHeader, Nsticky);}, { passive: false });

    if (pageYOffset >= Nsticky  || scrollY >= Nsticky) {
        divHeader.classList.add("sticky");
    }
}


//Función para añadir la clase sticky al header cuando se hace scroll Fran
function sticky($element, $number) {
    if (pageYOffset >= $number || scrollY >= $number) {
      $element.classList.add("sticky");
    } else if(pageYOffset < $number || scrollY < $number){
      $element.classList.remove("sticky");
    }
}
