//Tem que mudar ainda

function Xadrez(tamanho, pieces)
{
    this.tamanho = tamanho;
    
    this.pecaSelecionada = null;
    
    this.vez = "brancas";
    
    this.canvas        = document.getElementById("game");
    this.canvasContext = this.cvs.getContext("2d");
    
    this.canvas.width  = (this.tamanho==8)?720:900;
    this.canvas.height = 720;
    
    this.setTabuleiro();
    this.setPeca(pieces);
    
    var elem = document.getElementById('game'),
    elemLeft = elem.offsetLeft,
    elemTop  = elem.offsetTop,
    context  = elem.getContext('2d');
    
    pieces = this.pieces;
    
    this.matriz = null;
    
    var funcAux = this;
    
    //onClick do canvas
    this.canvas.addEventListener('click', function(event) {
    var x = event.pageX - elemLeft,
        y = event.pageY - elemTop;
        
        var pecaSelecionada = null;
        
        pieces.forEach(function(piece)
        {
            if(piece.getTX(tamanho) < x && piece.getTX(tamanho) + 80 > x)
                if(piece.getTY(tamanho) < y && piece.getTY(tamanho) + 80 > y)
                    pecaSelecionada = piece;           
        });
        
        funcAux.montarMatriz();
        
        if (pecaSelecionada != null)
        {
            if (pecaSelecionada.cor != funcAux.vez)
            {
                if (funcAux.pecaSelecionada != null)
                    {
                        funcAux.pecaSelecionada.paraOndePodeIr(funcAux.matriz, funcAux.tamanho).forEach(
                        function(coordenada)
                        {
                            if (coordenada.x == Math.floor(x / ((funcAux.tamanho == 8) ? 90 : 80)) && coordenada.y == Math.floor(y/((funcAux.tamanho == 8)?90:80)))
                                {
                                    funcAux.comer(x, y);
                                }
                        });
                    }
                
                return;
            }                    
            
            if (pecaSelecionada == funcAux.pecaSelecionada)
            {
                funcAux.updateScreen();
                funcAux.pecaSelecionada = null;
            }
            else
                {
                    funcAux.putGreenBalls(selectedPiece.whereCanGo(funcAux.matriz, funcAux.tamanho) , selectedPiece);
                    funcAux.selectedPiece = selectedPiece;
                }
            
        }
        else
            if(funcAux.selectedPiece != null)
                {
                    funcAux.selectedPiece.whereCanGo(funcAux.matriz, funcAux.tamanho).forEach(
                    function(coordinate)
                    {
                        if(coordinate.x == Math.floor(x/((funcAux.tamanho == 8)?90:80)) && coordinate.y == Math.floor(y/((funcAux.tamanho == 8)?90:80)))
                            {
                                funcAux.walk(x, y);
                            }
                              
                    });
                }
    }, false);
    
    this.updateScreen();
}

Chess.prototype.andar = function(x, y)
{
    var sPX    = this.selectedPiece.getX();
    var sPY    = this.selectedPiece.getY();
    this.selectedPiece.setXY(Math.floor(x/((this.tamanho == 8)?90:80)), Math.floor(y/((this.tamanho == 8)?90:80)));
    
    if(!this.isCheck((this.turn == "white")?("black"):("white")))
    {
        this.selectedPiece = null;
        if(this.isCheck(this.turn))
            alert("Check");
        this.turn  = (this.turn == "white")?("black"):("white");
        this.updateScreen();
        return true;
    }
    else
        {
            this.selectedPiece.setXY(sPX,sPY);
            return false;
        }
}

Chess.prototype.comer = function(x, y)
{
    var sPX    = this.selectedPiece.getX();
    var sPY    = this.selectedPiece.getY();
    var save;
    for(var i = 0; i < this.pieces.length; i++)
            if(this.pieces[i].getX() == Math.floor(x/((this.tamanho == 8)?90:80)) && this.pieces[i].getY() == Math.floor(y/((this.tamanho == 8)?90:80)))
            {
                save = this.pieces[i];
                this.pieces.splice(i, 1);
            }
    this.selectedPiece.setXY(Math.floor(x/((this.tamanho == 8)?90:80)), Math.floor(y/((this.tamanho == 8)?90:80)));
                
    if(!this.isCheck((this.turn == "white")?("black"):("white")))
    {
        this.selectedPiece = null;
        if(this.isCheck(this.turn))
            alert("Check");
        this.turn = (this.turn == "white")?"black":"white";
        this.updateScreen();
        return true;
    }
    else
    {
        this.selectedPiece.setXY(sPX, sPY);
        this.pieces.push(save);
        return false;
    }
}

Chess.prototype.setBoard = function()
{
    var x = (this.tamanho==8)?90:80;
    
    for(var i = 0; i < 720; i += x)
        for(var j = (i/x)%2==0?x:0; j < 720; j += 2 * x)
            this.cvsContext.fillRect(j, i, x, x)
    
    if (this.tamanho == 9)
        this.cvsContext.fillRect(720, 0, 180, 720);
}



Chess.prototype.setPieces = function(pieces)
{
    this.pieces = pieces;
}

Chess.prototype.updateScreen = function()
{
     this.cvsContext.clearRect(0, 0, 900, 720);

     this.setBoard();
    
     for (var i = 0; i < this.pieces.length; i++)
             this.pieces[i].selfDraw(this.cvsContext, this.tamanho);
    
    if(this.selectedPiece != null)
        this.putGreenBalls(this.selectedPiece.whereCanGo(this.matriz, this.tamanho));
}

Chess.prototype.putGreenBalls = function(positions, selectedPiece)
{
    /*for(var i = 0; i < this.pieces[i].length; i++)
        if(this.selectedPiece)*/
    
    var img = new Image();
    img.src = "img/greenBall.png";
    for(var i = 0; i < positions.length; i++)
    {
        
        this.cvsContext.drawImage(img, (this.tamanho==8)?(90 * positions[i].x + 32):(80 * positions[i].x + 27), (this.tamanho==8)?(90 * positions[i].y + 32):(80 * positions[i].y + 27)); 
        
    }
}

Chess.prototype.isCheck = function(color)
{
    this.montarMatriz();
    var xRei;
    var yRei;
    for(var i = 0; i < this.pieces.length; i++)
        if (this.pieces[i].value == 0 && this.pieces[i].color != color)
        {
            xRei = this.pieces[i].getX();
            yRei = this.pieces[i].getY();
        }
    
    
    for(var i = 0; i < this.pieces.length; i++)
        if(this.pieces[i].color == color)
        {
            var aux = this.pieces[i].whereCanGo(this.matriz, this.tamanho);
            for(var j = 0; j < aux.length; j++)
                if(aux[j].x == xRei && aux[j].y == yRei)
                    return true;
        }
    return false;
}

Chess.prototype.montarMatriz = function()
{
    var matriz = [];
        for (var i = 0; i < this.tamanho; i++)
            matriz.push([]);
        for (var i = 0; i < this.tamanho; i++)
            for (var j = 0; j < this.tamanho; j++)
                matriz[i].push();
        
        this.pieces.forEach(
            function(piece)
            {
                matriz[piece.getX()][piece.getY()] = piece;
            }
        );
        
        this.matriz = matriz;
}