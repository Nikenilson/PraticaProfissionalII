alert("lixuuu")
var objCanvas=null; // objeto que representa o canvas
var objContexto=null; // objeto que representa o contexto do canvas

var imgFundo = new Image();
imgFundo.src = "../images/fundo.jpg";

objCanvas = document.getElementById("meuCanvas");
objContexto = objCanvas.getContext("2d");
objContexto.drawImage(imgFundo,0,0);

window.onload = function()
{
	objCanvas = document.getElementById("meuCanvas");
	objContexto = objCanvas.getContext("2d");

	AtualizaTela();
}

function AtualizaTela()
{
	objContexto.drawImage(imgFundo,0,0);

}

