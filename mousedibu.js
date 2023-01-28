var cuadrito = document.getElementById("area_de_dibujo");// Variable que contiene el area de dibujo.
var papel = cuadrito.getContext("2d");// Variable que contiene el contecto del area de dibujo.
var movimiento = 1;// Define cuanto se va a mover la linea.
var grosor = document.getElementById("Grosor");// Esta variable contiene el objeto Grosor, definido en HTML.
var color = document.getElementById("color");// Esta variable contiene el objeto color, definido en HTML.
var colorcito = "#000000";//Esta variable debe estar definida despues de la variable que llama al objeto color, para que este le pueda dar un valor.
// Añadimos un escuchador (change) al objeto color que detecta los datos que el usuario esta proporcionando desde la caja de colores
color.addEventListener("change", selectorColor);

// Esta funcion solo se activa al ocurrir el evento change,cambia el valor de la variable colorcito.
function selectorColor (colorSelector)
{
  // color.value trae el valor que le otorga el ususario desde la caja de colores(input type = "color").
  colorcito = color.value;
}


// Añadimos un escuchador al objeto area_de_dibujo y activamos la funcion mouse dibujo.
area_de_dibujo.addEventListener("mousedown", dibujoMouse);


// Dentro de esta funcion añadimos un escuchador al objeto area_de_dibujo que escuchara el evento mousemove y la funcion dibujomouse2.
function dibujoMouse()
{
  area_de_dibujo.addEventListener("mousemove", dibujomouse2);

  }


// definimos la funcion dibujomouse2 y le añadimos el parametro evento para encontrar los valores que definen a X y Y.
// Con dichos valores definimos el codigo que dibuja las lineas dentro del area de dibujo.
function dibujomouse2(evento2)
{
  // offsetX y offsetY definen las cooordenadas respecto a un objeto desde que ocurre el evento.
  var x = evento2.offsetX;
  var y = evento2.offsetY;
  dibujarlinea(colorcito, x, y, x - movimiento, y - movimiento, papel);
  dibujarlinea(colorcito, x, y, x + movimiento, y + movimiento, papel);
}

//Agregamos un evento al objeto area_de_dibujo y lo definimos para que courra la funcion solo cuando de ejecute el evento.
area_de_dibujo.onmouseup = function detener()
{
  //Añadimos un removedor de eventos al area_de_dibujo para detener el evento mousemove y la funcion dibujomouse2.
area_de_dibujo.removeEventListener("mousemove", dibujomouse2);
}

// Esta funcion contiene los parametros para dibujar las lineas dentro del area_de_dibujo.
function dibujarlinea(color,x_inicial,y_inicial,x_final,y_final,lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = grosor.value;
  lienzo.moveTo(x_inicial, y_inicial);
  lienzo.lineTo(x_final, y_final);
  lienzo.stroke();
  lienzo.closePath();
}

//Enmarca el area de dibujo (el canvas).
dibujarlinea(colorcito,1, 1, 799, 1, papel);
dibujarlinea(colorcito, 799, 799, 799, 1, papel);
dibujarlinea(colorcito, 1, 799, 799, 799, papel);
dibujarlinea(colorcito, 1, 799, 1, 1, papel);
