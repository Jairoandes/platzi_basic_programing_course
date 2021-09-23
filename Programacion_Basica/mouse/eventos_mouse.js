var cuadrito = document.getElementById("area_de_dibujo");
document.addEventListener("mousedown", dibujarMouse);
document.addEventListener("mouseup", dibujarMouse);
document.addEventListener("mousemove", dibujarMouse);
var papel = cuadrito.getContext("2d");

function dibujarPunto(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarMouse(evento)
{
    var  colorcito = "blue";
    var x = evento.x;
    var y = evento.y;
    console.log(x);
    console.log(y);
    if(evento.type == "mousedown")
        {
            console.log("Pincel abajo!");
            dibujarPunto(colorcito, x-1, y-1, x+1, y+1, papel);
            if(evento.type == "mousemove")
                {
                    console.log("A pintar!");
                    //dibujarPunto("red", x-1, y-1, x+1, y+1, papel);
                }
        }
    if(evento.type == "mouseup")
        {
            console.log("Hasta ahì fue!");
        }
}
