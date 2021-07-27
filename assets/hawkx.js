/*
Hoja javascipt en sucio para trabajar el JS del tema
========================================================*/




/*Petición de añadir el producto al carrito*/

/*Petición para ver los productos del carrito*/


alert('Script cargado');

function recuperarItemsCarrito(){


    fetch('/cart.js')
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