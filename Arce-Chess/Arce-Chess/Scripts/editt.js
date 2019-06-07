		var editando = false;
// 		$(window).on("scroll",function() {
//         navHeight = $('.menu').outerHeight(),
//         windowTop = $(this).scrollTop();
    
//     if (windowTop > navHeight) {
//         $('.menu').addClass("scrolling");
//     } else {
//         $('.menu').removeClass("scrolling");
//     }
// });

var font;
var weight;


	function addP()
	{
		if($("#pp").text != "")
			$(".back").append('<p id="f' + font + '" class="w'+ weight + '">' + $("#pp").val() + '</p>');
	}

	function addImg()
	{
		if($("#image").text != "")
			$(".back").append('<img src = "' + $("#image").val() + '"</img>');
	}

	function addTit()
	{
		if($("#tit").text != "")
			$(".back").append('<h1 id="f' + font + '" class="w'+ weight + '">' + $("#tit").val() + '</h1>');
	}

	function addBr()
	{
		$(".back").append('<br>');
	}

	

	function fontEdit(i)
	{
		font = i;
		// style.color = "black";
	}
	
	function weightEdit(i)
	{
		weight = i;
		// style.color = "black";
	}

	
	function Editar()
	{
		$("body").toggleClass("editando");
		$("#editar").toggleClass("edit");
		if(editando == false)
		{
			$("#editar").html('<span class="hh">Vamos editar a página!</span><br><br><br><br><span id="f1" onclick="fontEdit(1)">Fonte 1</span><span id="f2" onclick="fontEdit(2)">Fonte 2</span><span id="f3" onclick="fontEdit(3)">Fonte 3</span><br><br><span id="w1" onclick="weightEdit(1)">Negrito 1</span><span id="w2" onclick="weightEdit(2)">Negrito 2</span><span id="w3" onclick="weightEdit(3)">Negrito 3</span><br><br><input type="checkbox" class="altCol"><br><br><span><i class="fas fa-plus-circle" onclick="addTit()"></i><input type="text" name="" id="tit" placeholder="Título"></span><br><br><span><i class="fas fa-plus-circle" onclick="addImg()"></i><input type="text" name="" id="image" placeholder="Endereço de imagem ou nome"></span><br><br><span><i class="fas fa-plus-circle" onclick="addP()"></i><textarea name="" id="pp" cols="30" rows="10" placeholder="Parágrafo"></textarea><br><br><span><i class="fas fa-plus-circle" onclick="addBr()"></i>Pular Linha</span>');
			editando = true;
		}
		else
		{
			$("#editar").html("");
			editando = false;
		}
			
	}
