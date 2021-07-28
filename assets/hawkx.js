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


//Funcion para obtener datos del carrito
function getCART($callback) {
  fetch("/cart.js",{ 
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    return response.json();
  })
  .then(data => {
    $callback(data.status, data)
  });
};

//Funcion para limpiar el carrito
function clearCART($callback){
  fetch("/cart/clear.js",{ 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    return response.json();
  })
  .then(data => {
    $callback(data.status, data);
  });
}

//Funcion para actualizar datos del carrito
function updateCART($mode, $data, $callback) {
  if ($mode == "add") {
    $url = "/cart/add.js";
  } else if($mode == "update") {
    $url = "/cart/update.js";
  }

  fetch($url,{ 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify($data)
  })
  .then(response => {
    return response.json();
  })
  .then(data => {
      if ($mode == "add") {
        getCART($callback);    
      }else {
        $callback(data.status, data);
      }
  });

};

//Callback para actualizar el carrito segun respuesta
function update_cart(err, data) {
  if (err !== null && err !== undefined) {
    console.log('El error es: ' + err);
  } else {
    const cart_count = document.getElementById("count_car__header");
    count = data.item_count;
    if ( count != 0 )  {
      cart_count.classList.remove("empty");
    } else {
      cart_count.classList.add("empty");
    }
    cart_count.innerText = count; 
  }
}

//Callback para pintar los datos del carrito
function print_product_cart(err, data) {
  if (err !== null && err !== undefined) {
    console.log('El error es: ' + err);
  } else {

    console.log(data);
    count = data.items_count;
    for (var i = 0; index < count; i++) {
      console.log(data.items[i].id);
    }

  }
}


/*
let json = {
  updates: {
    40607204278423: 4,
  }
};
updateCART("update", json, update_cart)

let json = {
 'items': [{
  'id': 40607204278423,
  'quantity': 2
  }]
};

updateCART("add", json, update_cart)
*/