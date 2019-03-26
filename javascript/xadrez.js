window.onload = function()
{
	desenhaTabuleiro();

	//AtualizaTela();
}

/*function AtualizaTela()
{

}*/

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

function drawPiece(cor,x,y, piece) //Tá em ingles porque em portugues fica feio demais(desenhaPeca)
{
	var tela = document.getElementById("canvas");
	var pincel = tela.getContext('2d');
	var img = new Image();

	if(cor == "White" ||cor == "W" ||cor == "Brancas" ||cor == "B")
	{
		switch(piece)
		{
			case "pA":
			img.src = 'peaoBranco.jpg';
			pincel.drawImage(img, x, y);
			break;
			case "pB":
			img.src = 'peaoBranco.jpg';
			pincel.drawImage(img, x, y);
			break;
			case "pC":
			img.src = 'peaoBranco.jpg';
			pincel.drawImage(img, x, y);
			break;
			case "pD":
			img.src = 'peaoBranco.jpg';
			pincel.drawImage(img, x, y);
			break;
			case "pE":
			img.src = 'peaoBranco.jpg';
			pincel.drawImage(img, x, y);
			break;
			case "pF":
			img.src = 'peaoBranco.jpg';
			pincel.drawImage(img, x, y);
			break;
			case "pG":
			img.src = 'peaoBranco.jpg';
			pincel.drawImage(img, x, y);
			break;
			case "pH":
			img.src = 'peaoBranco.jpg';
			pincel.drawImage(img, x, y);
			break;

			case "":
			break;
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

