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

