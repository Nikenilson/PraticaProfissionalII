function DeadPiece(x,y, color, pClass)
{
    Piece.call(this);
    
    this.whiteImage = new pClass(5, 5, "white").getImage();
    this.blackImage = new pClass(5, 5, "black").getImage();
    this.color = color || "black";
    
    this.value = new pClass(5, 5, color).value;
    
    this.pClass = pClass;
    
    this.x = x;
    this.y = y;
    
    this.qtd = 0;
    
    this.vaue = null;
    
    this.hasAlreadymove = false;
    
    this.nomePeca = "deadPiece";
}

DeadPiece.prototype = Object.create(Piece.prototype);

DeadPiece.prototype.whereCanGo = function(m)
{
    var ret = [];
    var t = m.length;
    if(this.value != 1)
    {
        if(this.qtd > 0)
            for(var i = 0; i < t; i++)
                for(var j = 0; j < t; j++)
                    if(m[i][j] == null)
                    {
                        ret.push(new Coordinate(i, j));       
                    }
    }
    else
        if(this.qtd > 0)
            for(var i = 0; i < t; i++)
            {
                var aux = true;
                
                for(var j = 0; j < t; j++)
                    if(m[i][j] != null)
                        if(m[i][j].value == 1)
                            if(m[i][j].color == this.color)
                                aux = false;
                        
                if(aux)
                    for(var j = 0; j < t; j++)
                        if(m[i][j] == null)
                            ret.push(new Coordinate(i, j));
                
            }
    return ret;
}

DeadPiece.prototype.setQtd = function(n)
{
    this.qtd = n;
}

DeadPiece.prototype.getQtd = function()
{
    return this.qtd;
}

DeadPiece.prototype.setX = function(x)
{
    this.qtd--;
}

DeadPiece.prototype.setY = function(x)
{
    
}

DeadPiece.prototype.getNewPieceClass = function(x, y)
{
    return (new this.pClass(x, y, this.color));
}

DeadPiece.prototype.setPieceClass = function(nClass)
{
    this.pClass = nClass;
}