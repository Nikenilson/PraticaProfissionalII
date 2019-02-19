var objCanvas=null; // objeto que representa o canvas
var objContexto=null; // objeto que representa o contexto do canvas

var imgFundo = new Image();
imgFundo.src = "fundo.png";

objCanvas = document.getElementById("meuCanvas");
objContexto = objCanvas.getContext("2d");
objContexto.drawImage(imgFundo,0,0);

function Iniciar()
{
	objCanvas = document.getElementById("meuCanvas");
	objContexto = objCanvas.getContext("2d");

	//AtualizaTela();
}