var cuadrito = document.getElementById("area_de_dibujo");
document.addEventListener("mousedown", bajarPincel);
document.addEventListener("mouseup", levantarPincel);
document.addEventListener("mousemove", dibujarMouse);
var papel = cuadrito.getContext("2d");
var estado = 0;

function dibujarPunto(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 2;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function bajarPincel(evento)
{
    estado = 1;
}

function dibujarMouse(evento)
{
    var  colorcito = "blue";
    var x = evento.x;
    var y = evento.y;
    if(estado == 1)
        {
            dibujarPunto(colorcito, x, y, x+1, y+1, papel);
        }
}

function levantarPincel(evento)
{
    estado = 0;
}