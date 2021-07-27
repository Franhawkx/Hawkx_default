/*
Hoja javascipt en sucio para trabajar el JS del tema
========================================================*/




/*Petición de añadir el producto al carrito*/

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
        for (let i = 0; i < responseAsObject.items.length; i++) {
            console.log('Titulo: ' + responseAsObject.items[i].title + ', precio: ' + responseAsObject.items[i].price + ', cantidad: ' + responseAsObject.items[i].quantity + ', enlace a su imagen: ' + responseAsObject.items[i].image);    
        }
    })
    .catch(function(error) {
        console.log('Ha habido un problema: ', error);
    });
}