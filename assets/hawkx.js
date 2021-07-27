/*
Hoja javascipt en sucio para trabajar el JS del tema
========================================================*/


window.onload = function() {
    let boton_añadir_producto = document.querySelector('#añadir_producto');
    boton_añadir_producto.addEventListener('click', subirProduct, false);
};

/*Petición de añadir el producto al carrito*/

function subirProduct(){
    let id = document.querySelector('.product__title').id;

    const url= '/cart/add.js';
    let productos = {
        'items': [
        {
            'id': 7048058634391,
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

function recuperarItemsCarrito(){
    fetch('/cart.js')
    .then(function(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
        return response.json();
    })
    .then(function(responseAsObject) {
        for (let i = 0; i < responseAsObject.items.length; i++) {
            console.log('Titulo: ' + responseAsObject.items[i].title + ', precio: ' + responseAsObject.items[i].price + ', cantidad: ' + responseAsObject.items[i].quantity + ', enlace a su imagen: ' + responseAsObject.items[i].image);    
        }
    })
    .catch(function(error) {
        console.log('Ha habido un problema: ', error);
    });
}