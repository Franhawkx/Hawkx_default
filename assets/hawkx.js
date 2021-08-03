/*
Hoja javascipt en sucio para trabajar el JS del tema
========================================================*/

/* Inicio onload
========================================================*/
window.onload = function () {

    // Función para añadir la clase sticky al header cuando se hace scroll Fran
    const container_header = document.getElementById("shopify-section-header"); // Definimos el contenedor del elemento que va a ser sticky
    const header = document.querySelectorAll("#shopify-section-header header")[0]; // Definimos el elemento que va a ser sticky
    const Nsticky = document.querySelectorAll("#shopify-section-announcement-bar")[0].offsetHeight; // Definimos la cantidad de desplazamiento antes de aplicar sticky

    // Añadimos el evento para escuvhar el desplazamiento
    window.addEventListener("scroll", function () {
        sticky_menu(container_header, header, Nsticky);
    }, {
        passive: false
    });

    // Comprobamos si existe desplazamiento vertical en scroll para aplicar sticky
    if (pageYOffset >= Nsticky || scrollY >= Nsticky) {
        container_header.style.height = header.offsetHeight + "px";
        container_header.classList.add("sticky");
    }

    //let boton_añadir_producto = document.querySelector('#añadir_producto');
    //boton_añadir_producto.addEventListener('click', subirProduct, false);
}
// Fin onload


//Función para añadir la clase sticky al header cuando se hace scroll Fran
function sticky_menu($container, $element, $number) {
    $container.style.height = $element.offsetHeight + "px";

    if (pageYOffset >= $number || scrollY >= $number) {
        $container.classList.add("sticky");
    } else if (pageYOffset < $number || scrollY < $number) {
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




//Peticion para añadir un producto al carrito por su id
function eliminarProduct(){
    const url= '/cart/change.js';
    let eliminar = {"quantity": 0,"id":"40607206015127"};
    const request = {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(eliminar)
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




//API CLIENTES

function listar_clientes(){
    fetch('/admin/api/2021-07/customers.json')
    .then(function (response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json();
    })
    .then(function (responseAsObject) {
        console.log("Hola");
        for (let i = 0; i < responseAsObject.length; i++) {
            console.log(responseAsObject);
        }
    })
    .catch(function (error) {
        console.log('Ha habido un problema: ', error);
    });

}



function crear_cliente(){
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", "Basic YzY0YWY5ZGE3ZmNmZDQwYzQzMDE4OTE2YTg5M2UzN2Q6c2hwcGFfM2MzYzNhNzljNDUwMjA0Njg3NTUyY2U1ZTEwZDFkZDk=");

var raw = JSON.stringify({
  "customer": {
    "first_name": "jose",
    "last_name": "jose",
    "email": "jose.lastnameson@example.com",
    "phone": "+34683969966",
    "verified_email": true,
    "addresses": [
      {
        "address1": "123 Oak St",
        "city": "Ottawa",
        "province": "ON",
        "phone": "555-1212",
        "zip": "123 ABC",
        "last_name": "Lastnameson",
        "first_name": "Mother",
        "country": "CA"
      }
    ]
  }
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("/admin/api/2021-07/customers.json", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}



function pruebaFetch(){

    
    var raw = JSON.stringify({
        "customer": {
          "first_name": "jose",
          "last_name": "jose",
          "email": "jose.lastnameson@example.com",
          "phone": "+34683969966",
          "verified_email": true,
          "addresses": [
            {
              "address1": "123 Oak St",
              "city": "Ottawa",
              "province": "ON",
              "phone": "555-1212",
              "zip": "123 ABC",
              "last_name": "Lastnameson",
              "first_name": "Mother",
              "country": "CA"
            }
          ]
        }
      });


      var requestOptions = {
        method: 'POST',
        body: raw
      };

    fetch("/admin/api/2021-07/customers.json", requestOptions)
    .then(function (response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json();
    })
    .then(function (responseAsObject) {
        console.log("Hola");
        for (let i = 0; i < responseAsObject.length; i++) {
            console.log(responseAsObject);
        }
    })
    .catch(function (error) {
        console.log('Ha habido un problema: ', error);
    });
}


function probandoEsto(){
    fetch('/admin/api/2021-07/graphql.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "Authorization", "Basic YzY0YWY5ZGE3ZmNmZDQwYzQzMDE4OTE2YTg5M2UzN2Q6c2hwcGFfM2MzYzNhNzljNDUwMjA0Njg3NTUyY2U1ZTEwZDFkZDk="
        },
        body: JSON.stringify({
          query: `
          mutation{
            customerCreate(input:{firstName:"Pepito" lastName:"Pepito" email:"asdfasdf@gmail.com" }){
              customer{
                email
                firstName
                lastName
              }
            }
          }
            `
        }),
      })
        .then((res) => res.json())
        .then((result) => console.log(result));
      

}
