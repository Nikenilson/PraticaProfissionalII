const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const casas = new Array();

window.onload = function()
{
    for(var l = 1; l <= 8; l++)
	   for(var c = 1; c <= 8; c++)
	   {
            var a    = ((l * c) - 1);
            var posX = ((100 * (c - 1)) + 50);
            var posY = ((100 * (l - 1)) + 50);
        
            alert(l * c);
            
            if(a % 2 == 0)
                casas[a] = { id: a, x: posX, y: posY, color: 'black'};
		    else
			 casas[a] = { id: a, x: posX, y: posY, color: 'beige'};	
	   }

    casas.forEach(casa => {
	   ctx.fillStyle = casa.color;
	   ctx.fillRect(casa.x, casa.y, 100, 100);
    });
    
    
	desenhaTabuleiro();
	//desenhaInicio();
}

function desenhaTabuleiro()
{
	var x = 0;
	var y = 0;
	var cor = 'beige';
	contador = 1;

	while (x <= 800 && y <= 800) {

		desenhaQuadrado(x, y, cor);
		x += 100;
		contador += 1;
		if (x == 800) 
		{
			x = 0;
			y += 100;
			contador -= 1;
		}
		if (contador % 2 == 0) 
			cor = 'black';
		else 
			cor = 'beige';
		
	}

}

function isIntersect(point, casa) {
  if((point.x - casa.x > -50 || point.x - casa.x < 50) && (point.y - casa.y > -50 || point.y-casa.y < 50))
  	return true;
  return false;
}

canvas.addEventListener('click', (e) => {
	
  const mousePos = {
  	/*x: e.clientX,
  	y: e.clientY*/
  	
    x: e.clientX - canvas.offsetLeft,
    y: e.clientY - canvas.offsetTop
  };
  casas.forEach(casa => {
    if (isIntersect(mousePos, casa)) {
      alert('click on circle: ' + casa.id);
    }
  });
});

/*
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const hitCanvas = document.createElement('canvas');
const hitCtx = hitCanvas.getContext('2d');

const colorsHash = {};

function getRandomColor() {
 const r = Math.round(Math.random() * 255);
 const g = Math.round(Math.random() * 255);
 const b = Math.round(Math.random() * 255);
 return `rgb(${r},${g},${b})`;
}



const circles = [{
  id: '1', x: 40, y: 40, radius: 10, color: 'rgb(255,0,0)'
}, {
  id: '2', x: 100, y: 70, radius: 10, color: 'rgb(0,255,0)'
}];

circles.forEach(circle => {
	while(true) {
     const colorKey = getRandomColor();
     if (!colorsHash[colorKey]) {
        circle.colorKey = colorKey;
        colorsHash[colorKey] = circle;
        return;
     }
  }
});

circles.forEach(circle => {
  ctx.beginPath();
  ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI, false);
  ctx.fillStyle = circle.color;
  ctx.fill();
  
  hitCtx.beginPath();
  hitCtx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI, false);
  hitCtx.fillStyle = circle.colorKey;
  hitCtx.fill();
});

function hasSameColor(color, shape) {
  return shape.color === color;
}

canvas.addEventListener('click', (e) => {
  const mousePos = {
    x: e.clientX - canvas.offsetLeft,
    y: e.clientY - canvas.offsetTop
  };
  const pixel = hitCtx.getImageData(mousePos.x, mousePos.y, 1, 1).data;
  const color = `rgb(${pixel[0]},${pixel[1]},${pixel[2]})`;
  const shape = colorsHash[color];
  if (shape) {
     alert('click on circle: ' + shape.id);
  }
 });*/


/*
function desenhaInicio()
{
	var letras = new Array("a","b","c","d","e","f","g");
	var p = new Array("h","n","b","q","k","b","n","h");
	
	for(var i = 0; i < 9; i++)
	{
		//desenha peões das Brancas
		drawPiece("B","p",letras[i],2);
		//desenha peças das Brancas
		drawPiece("B",p[i],letras[i],1);
	}
	for(var i = 0; i < 9; i++)
	{
		//desenha peões das Negras
		drawPiece("W","p",letras[i],7);
		//desenha peças das Brancas
		drawPiece("B",p[i],letras[i],8);
	}
}
*/
function desenhaQuadrado(x, y, cor) 
{	
	ctx.fillStyle = cor;
	ctx.fillRect(x, y, 100, 100);


	/*pincel.strokeStyle = 'black';
	pincel.strokeRect(x, y, 100, 100);
	*/
	
}

/*
function drawPiece(cor, piece, l, c) //Tá em ingles porque em portugues fica feio demais(desenhaPeca)
{
	var tela = document.getElementById("canvas");
	var pincel = tela.getContext('2d');
	var img = new Image();

	var x = null;
	var y = null;
	switch(l)
	{
		case "a":
		x = 50;
		break;
		case "b":
		x = 150;
		break;
		case "c":
		x = 250;
		break;
		case "d":
		x = 350;
		break;
		case "e":
		x = 450;
		break;
		case "f":
		x = 550;
		break;
		case "g":
		x = 650;
		break;
		case "h":
		x = 750;
		break;
	}
	switch(c)
	{
		case 1:
		y = 50;
		break;
		case 2:
		y = 150;
		break;
		case 3:
		y = 250;
		break;
		case 4:
		y = 350;
		break;
		case 5:
		y = 450;
		break;
		case 6:
		y = 550;
		break;
		case 7:
		y = 650;
		break;
		case 8:
		y = 750;
		break;
	}

	if(cor == "White" ||cor == "W" ||cor == "Brancas" ||cor == "B")
	{
		switch(piece)
		{
			case "p":
			img.src = 'pB.jpg';
			pincel.drawImage(img, x, y);
			break;
			case "h":
			img.src = 'hB.jpg';
			pincel.drawImage(img, x, y);
			break;
			case "n":
			img.src = 'kB.jpg';
			pincel.drawImage(img, x, y);
			break;
			case "b":
			img.src = 'bB.jpg';
			pincel.drawImage(img, x, y);
			break;
			case "q":
			img.src = 'qB.jpg';
			pincel.drawImage(img, x, y);
			break;
			case "k":
			img.src = 'kB.jpg';
			pincel.drawImage(img, x, y);
			break;
		}
	}

	if(cor == "Black" ||cor == "B" ||cor == "Negras" ||cor == "N")
	{
		switch(piece)
		{
			case "p":
			img.src = 'pN.jpg';
			pincel.drawImage(img, x, y);
			break;
			
			case "h":
			img.src = 'hN.jpg';
			pincel.drawImage(img, x, y);
			break;
			case "n":
			img.src = 'nN.jpg';
			pincel.drawImage(img, x, y);
			break;
			case "b":
			img.src = 'bN.jpg';
			pincel.drawImage(img, x, y);
			break;
			case "q":
			img.src = 'qN.jpg';
			pincel.drawImage(img, x, y);
			break;
			case "k":
			img.src = 'kN.jpg';
			pincel.drawImage(img, x, y);
			break;
		}
	}
}*/





