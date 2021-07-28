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



//Peticion para añadir un producto al carrito por su id
function subirProduct(){
    const url= '/cart/add.js';
    let productos = {
        'items': [
        {
            'id': 40607206015127,
            'quantity': 2
        }
        ]
    };
    const request = {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(productos)
    };
    fetch(url,request)
    .then(function(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
        return response.json();
    })
    .then(function(responseAsObject) {
        console.log(responseAsObject);
    })
    .catch(function(error) {
        console.log('Ha habido un problema: ', error);
    });
}
/*Petición para ver los productos del carrito*/
function recuperarItemsCarrito() {
    fetch('/cart.js')
        .then(function (response) {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        })
        .then(function (responseAsObject) {
            for (let i = 0; i < responseAsObject.items.length; i++) {
                console.log('Titulo: ' + responseAsObject.items[i].title + ', precio: ' + responseAsObject.items[i].price + ', cantidad: ' + responseAsObject.items[i].quantity + ', enlace a su imagen: ' + responseAsObject.items[i].image);
            }
        })
        .catch(function (error) {
            console.log('Ha habido un problema: ', error);
        });
}

var botonPrueba = document.querySelector(".botonPrueba");
botonPrueba.addEventListener('click', borrarVariante);
function borrarVariante(){
    const url= '/cart/change.js';
    let eliminar = {
        "quantity": 0, //Esto tiene que ser fijo a cero para asi poder indicarle que queremos eliminarlo
        "id":40607206015127
    }
    const request = {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"quantity": 0,"id":"40607206015127"})
    };
    fetch(url,request)
    .then(function(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
        return response.json();
    })
    .then(function(responseAsObject) {
        console.log(responseAsObject);
    })
    .catch(function(error) {
        console.log('Ha habido un problema: ', error);
    });

}