let video1;
let video2;

// solo hay una de sonido por lo que video2 ya viene con audio
var sonido1;

let posx1 = 50;
let posY = 700;
let posx2 = 850;

let r = 0;
let g = 0;
let b = 0;
let n = 0;


let tamanoBotonX = 100;
let tamanoBotonY = 60;

let fuente1;
let fuente2;

let pupilaX = 500;
let pupilaY = 600;

function preload() 
{
  soundFormats('ogg', 'mp3');
  sonido1 = loadSound('assets/flamingo_kerokero.mp3');
  sonido1.setVolume(0.5);

  fuente1 = loadFont('assets/Bitter-Regular.ttf');
  fuente2 = loadFont('assets/MagicDreams.ttf');

}

function setup() 
{
  createCanvas(1000, 800);

  video1 = createVideo(['assets/banana.mp4']);
  video1.hide(); 
  // por defecto el video aparece en un elemento dom separado.
  // escóndelo y dibújalo en el lienzo en vez de eso.

  video2 = createVideo(['assets/crabrave.mp4']);
  video2.hide();
}

function draw() {
	// Color del fondo
  background(220, 230, 255);

  // que las vainas no tengan borde
  noStroke();

  // el cuadrado de fondo del video de la banana
  // color del cuadrado
  fill(0);
  // posX posY ancho alto
  rect(100, 225, 300, 200);
  // poner el video del banano, posX posY ancho alto
  image(video1, 100, 250, 300, 150); // dibuja el cuadro del video en el lienzo.

  // poner el video del cangrejo, posX posY ancho alto
  image(video2, 600, 225, 300, 200);

  // que el grosor del borde de las vainas sea 5
  strokeWeight(5);

  // boton izq
  // color del borde
  stroke(200,0,0);
  // color de relleno
  fill(255,0,0);
  // posX posY ancho alto y redondeado
  rect(posx1,posY,tamanoBotonX,tamanoBotonY, 100);

  // boton der
  // color del borde
  stroke(0,0,200);
  // color de relleno
  fill(0, 0, 255);
  // posX posY ancho alto y redondeado
  rect(posx2,posY,tamanoBotonX,tamanoBotonY, 100);

   // Monstruo
   // color del borde
   stroke(93, 0, 175);
  // Color del monstruo
  fill(133, 69, 193);
  // posX posY ancho alto redondeado
  rect(200, 550, 600, 400, 100);

  // ojo del monstruo
  // color del ojo
  fill(255);
  // posX posY ancho alto
  ellipse(500, 600, 200, 200);
  // que no tenga borde
  stroke(0);

  // que el grosor del borde de las vainas sea 3
  strokeWeight(3);

  // pupila
  // color de la pupila
  fill(r, g, b);
  // que la pos de la pupila en Y no se pase de entre 550 y 650
  pupilaY = map(mouseY, 0, height, 550, 650, true);
  // que la pos de la pupila en X no se pase de entre 450 y 450
  pupilaX = map(mouseX, 0, width, 450, 550, true);
   // posX posY ancho alto
  ellipse(pupilaX, pupilaY, 50, 50);

  // k no haya borde
  noStroke();
  // k el relleno sea blanco
  fill(255);
  // posX1, posY1, posX2, posY2, posX3, posY3
  triangle(550, 755, 580, 750, 570, 770);

  // k no haya relleno
  noFill();
  // color del borde
  stroke(93, 0, 175);
  // k el grosor del borde sea 5
  strokeWeight(5);
  // posX posY ancho alto, noc, media circunferencia
  arc(500, 710, 300, 100, 0, PI);

  // k no haya borde
  noStroke();
  // k el relleno sea negro
  fill(0);
  // k la fuente sea bitter regular
  textFont(fuente1);
  // tamaño texto
  textSize(12);
  // texto, posx, posy
  text('¿Qué harán las teclas R, G, B, N?', 100, 10);
  // texto, posx, posy
  text('stop', 980, 10);

  // k las vainas se pongan lo más central posible, cogen las coordenadas de y para ubicar el centro de los textos
  textAlign(CENTER, CENTER);
  // tamaño texto
  textSize(50);

  // texto, posx, posy
  text('Escoge la música que escuchará', 500, 70);

  // tamaño texto
  textSize(60);
  // k la fuente sea la magic dreams
  textFont(fuente2);
  // texto, posx, posy <3
  text('Pochinkardo', 500, 130);

}

// Cambiar el color de la pupila del pochinkardo
function keyTyped() {
    if (key === 'r') {
      r=250;  g=0; b=0; 
    } else if (key === 'g') {
      r=0;  g=250; b=0; 
    } else if (key === 'b') {
      r=0;  g=0; b=250; 
    } else if (key === 'n') {
      r=0;  g=0; b=0; 
    }
  }

// Activar los botones
function mousePressed() 
{
	if(mouseX >= posx1 && mouseX <= posx1+tamanoBotonX)
	{
		if(mouseY >= posY && mouseY <= posY+tamanoBotonY)
		{
			video1.loop(); // configurar el video para empezar a reproducirse en bucle
			sonido1.play(); // que comience a sonar sonido al tiempo

			video2.stop(); // si video2 se está reproduciendo, que pare
		} 		
	}

	if(mouseX >= posx2 && mouseX <= posx2+tamanoBotonX)
	{
		if(mouseY >= posY && mouseY <= posY+tamanoBotonY)
		{
			video2.play(); // configurar el video para empezar a reproducirse

			video1.stop(); // si video1 se está reproduciendo, que pare
			sonido1.stop(); // si sonido1 se está reproduciendo, que pare
		} 		
	}

	if(mouseX >= 950 && mouseX <= 1000)
	{
		if(mouseY >= 0 && mouseY <= 30)
		{
			// si hay algo reproduciendo, que pare
			video2.stop(); 
			video1.stop(); 
			sonido1.stop();
		} 		
	}
 
}