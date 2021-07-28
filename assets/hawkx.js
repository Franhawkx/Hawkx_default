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


//Función hacer llamada json
//getJSON();
var getJSON = function($url, $callback) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", $url, true);
  xhr.responseType = 'json';
  xhr.onload = function() {
    var status = xhr.status;
    if (status === 200) {
      $callback(null, xhr.response);
    } else {
      $callback(status, xhr.response);
    }
  };
  xhr.send();
};

var response = function(err, data) {
  if (err !== null) {
    console.log('Something went wrong: ' + err);
  } else {
    console.log('Your query: ' + data);
    $data = data;
  }
}


const cart_count = document.querySelectorAll(".count_car__header span")[0];

var update_cart = function(err, data) {
  if (err !== null) {
    console.log('Something went wrong: ' + err);
  } else {
    cart_count.innerText = data.items.length;   
  }
}


var postJSON = function($url, $json, $callback) {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", $url, true);
  xhr.responseType = 'json';
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onload = function() {
    var status = xhr.status;
    if (status === 200) {
      
    } else {
      
    }
  };
  xhr.send(JSON.stringify($json));
};

/*

let json = {
  updates: {
    40607204278423: 2,
  }
};
postJSON("/cart/update.js", json, getJSON("/cart.js", update_cart))













var postJSON = function($url, $data) {
  
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
      .catch((error) => {
        console.error('Error:', error);
  });


};



var getJSON = function($url) {
  fetch($url,{ 
    method: 'GET',  
    headers: { 
      'Content-type' : 'text/json' 
    }
      }) 
      .then(response =>  
        response.json(),
        function() {
          console.log("hola");
        }
        
      ) 
      .then(data => {  
          console.log(data) 
      }) 
}*/


/*

var json = {
  items: [
    {
      quantity: 1,
      id: 7048058142871
    }
  ]
}


postJSON("/cart/add.js", {
  items: [
    {
      quantity: 1,
      id: 7048058142871
    }
  ]
} )

postJSON("/cart/update.js", {
  updates: {
    7048058142871: 2
  }
})

getJSON("/products/vino-ramon-2.js")


let formData =  {
  items: [
    {
      quantity: 1,
      id: 7048058142871
    }
  ]
};

let json = {
 'items': [{
  'id': 40607204278423,
  'quantity': 2
  }]
};

postJSON("/cart/add.js", json, update_cart)

fetch('/cart/add.js', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(formData)
})
.then(response => {
  return response.json();
})
.catch((error) => {
  console.error('Error:', error);
});


*/
