var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick );

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}
 
function dibujoPorClick()
{
    var lineas = parseInt(texto.value);
    var l = 0;
    var yi, xf;
    var colorcito = "#AAF";
    var espacio = ancho / lineas;
    lienzo.clearRect(0, 0, 300, 300);
    
    for(l = 0; l < lineas; l++)
    {
        yi = espacio * l;
        xf = espacio * (l + 1);
        xi = espacio * l;
        yf = espacio * (l + 1);
        dibujarLinea(colorcito, xi, 0, 300, yf);
        dibujarLinea(colorcito, 0, yi, xf, 300);
        console.log("Linea " + l);
    }

    dibujarLinea(colorcito, 1, 1, 1, 299);
    dibujarLinea(colorcito, 1, 299, 299, 299);
    dibujarLinea(colorcito, 1, 1, 299, 1);
    dibujarLinea(colorcito, 299, 1, 299, 299);
}

// for(l = 0; l < lineas; l++)
{
    xi = 10 * l;
    yf = 10 * (l + 1);
    dibujarLinea("#AAF", xi, 0, 300, yf);
    console.log("Linea " + l);
}

// while(l < lineas)
{
    yi = 10 * l;
    xf = 10 * (l + 1);
    dibujarLinea("#AAF", 0, yi, xf, 300);
    console.log("Linea " + l);
    l++;
}




