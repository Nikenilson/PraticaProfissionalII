window.onload = function()
{
	desenhaTabuleiro();
	desenhaInicio();

	//AtualizaTela();
}

/*function AtualizaTela()
{

}*/

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

function desenhaQuadrado(x, y, cor) 
{
	
	var tela = document.getElementById("canvas");
	var pincel = tela.getContext('2d');
	
	pincel.fillStyle = cor;
	pincel.fillRect(x, y, 100, 100);
	/*pincel.strokeStyle = 'black';
	pincel.strokeRect(x, y, 100, 100);
	*/
	
}

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
			// case "pB":
			// img.src = 'pB.jpg';
			// pincel.drawImage(img, x, y);
			// break;
			// case "pC":
			// img.src = 'pB.jpg';
			// pincel.drawImage(img, x, y);
			// break;
			// case "pD":
			// img.src = 'pB.jpg';
			// pincel.drawImage(img, x, y);
			// break;
			// case "pE":
			// img.src = 'pB.jpg';
			// pincel.drawImage(img, x, y);
			// break;
			// case "pF":
			// img.src = 'pB.jpg';
			// pincel.drawImage(img, x, y);
			// break;
			// case "pG":
			// img.src = 'pB.jpg';
			// pincel.drawImage(img, x, y);
			// break;
			// case "pH":
			// img.src = 'pB.jpg';
			// pincel.drawImage(img, x, y);
			// break;


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
			// case "bF":
			// img.src = 'bB.jpg';
			// pincel.drawImage(img, x, y);
			// break;
			// case "kG":
			// img.src = 'kB.jpg';
			// pincel.drawImage(img, x, y);
			// break;
			// case "hH":
			// img.src = 'HB.jpg';
			// pincel.drawImage(img, x, y);
			// break;
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
			// case "pB":
			// img.src = 'pN.jpg';
			// pincel.drawImage(img, x, y);
			// break;
			// case "pC":
			// img.src = 'pN.jpg';
			// pincel.drawImage(img, x, y);
			// break;
			// case "pD":
			// img.src = 'pN.jpg';
			// pincel.drawImage(img, x, y);
			// break;
			// case "pE":
			// img.src = 'pN.jpg';
			// pincel.drawImage(img, x, y);
			// break;
			// case "pF":
			// img.src = 'pN.jpg';
			// pincel.drawImage(img, x, y);
			// break;
			// case "pG":
			// img.src = 'pN.jpg';
			// pincel.drawImage(img, x, y);
			// break;
			// case "pH":
			// img.src = 'pN.jpg';
			// pincel.drawImage(img, x, y);
			// break;

			
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
			// case "bF":
			// img.src = 'bN.jpg';
			// pincel.drawImage(img, x, y);
			// break;
			// case "kG":
			// img.src = 'kN.jpg';
			// pincel.drawImage(img, x, y);
			// break;
			// case "hH":
			// img.src = 'HN.jpg';
			// pincel.drawImage(img, x, y);
			// break;
		}
	}
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



/*function getXY(casa)
{
	var x = null;
	var y = null;
	switch(casa)
	{
		case: a1
		x = ; 50
		y = ; 50
		break;
		case: a2
		x = ;
		y = ;
		break;
		case: a3
		x = ;
		y = ;
		break;
		case: a4
		x = ;
		y = ;
		break;
		case: a5
		x = ;
		y = ;
		break;
		case: a6
		x = ;
		y = ;
		break;
		case: a7
		x = ;
		y = ;
		break;
		case: a8
		x = ;
		y = ;
		break;


		case: b1
		x = ;
		y = ;
		break;
		case: b2
		x = ;
		y = ;
		break;
		case: b3
		x = ;
		y = ;
		break;
		case: b4
		x = ;
		y = ;
		break;
		case: b5
		x = ;
		y = ;
		break;
		case: b6
		x = ;
		y = ;
		break;
		case: b7
		x = ;
		y = ;
		break;
		case: b8
		x = ;
		y = ;
		break;

		case: c1
		x = ;
		y = ;
		break;
		case: c2
		x = ;
		y = ;
		break;
		case: c3
		x = ;
		y = ;
		break;
		case: c4
		x = ;
		y = ;
		break;
		case: c5
		x = ;
		y = ;
		break;
		case: c6
		x = ;
		y = ;
		break;
		case: c7
		x = ;
		y = ;
		break;
		case: c8
		x = ;
		y = ;
		break;

		case: d1
		x = ;
		y = ;
		break;
		case: d2
		x = ;
		y = ;
		break;
		case: d3
		x = ;
		y = ;
		break;
		case: d4
		x = ;
		y = ;
		break;
		case: d5
		x = ;
		y = ;
		break;
		case: d6
		x = ;
		y = ;
		break;
		case: d7
		x = ;
		y = ;
		break;
		case: d8
		x = ;
		y = ;
		break;

		case: e1
		x = ;
		y = ;
		break;
		case: e2
		x = ;
		y = ;
		break;
		case: e3
		x = ;
		y = ;
		break;
		case: e4
		x = ;
		y = ;
		break;
		case: e5
		x = ;
		y = ;
		break;
		case: e6
		x = ;
		y = ;
		break;
		case: e7
		x = ;
		y = ;
		break;
		case: e8
		x = ;
		y = ;
		break;

		case: f1
		x = ;
		y = ;
		break;
		case: f2
		x = ;
		y = ;
		break;
		case: f3
		x = ;
		y = ;
		break;
		case: f4
		x = ;
		y = ;
		break;
		case: f5
		x = ;
		y = ;
		break;
		case: f6
		x = ;
		y = ;
		break;
		case: f7
		x = ;
		y = ;
		break;
		case: f8
		x = ;
		y = ;
		break;

		case: g1
		x = ;
		y = ;
		break;
		case: g2
		x = ;
		y = ;
		break;
		case: g3
		x = ;
		y = ;
		break;
		case: g4
		x = ;
		y = ;
		break;
		case: g5
		x = ;
		y = ;
		break;
		case: g6
		x = ;
		y = ;
		break;
		case: g7
		x = ;
		y = ;
		break;
		case: g8
		x = ;
		y = ;
		break;

		case: h1
		x = ;
		y = ;
		break;
		case: h2
		x = ;
		y = ;
		break;
		case: h3
		x = ;
		y = ;
		break;
		case: h4
		x = ;
		y = ;
		break;
		case: h5
		x = ;
		y = ;
		break;
		case: h6
		x = ;
		y = ;
		break;
		case: h7
		x = ;
		y = ;
		break;
		case: h8
		x = ;
		y = ;
		break;


	}
}*/
