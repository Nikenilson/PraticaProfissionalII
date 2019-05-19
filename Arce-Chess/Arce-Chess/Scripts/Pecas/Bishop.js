function Bispo(x,y, cor)
{
    Peca.call(this);
    
    this.setImages("img/WBishop.png", "img/BBishop.png");
    this.cor = cor;
    
    this.value = 3;
    
    this.setXY(x || 0, y || 0);
    this.nomePeca = "bishop";
}

Bispo.prototype = Object.create(Piece.prototype);


//uns calculo muito loco, mas funciona
Bispo.prototype.paraOndePodeAndar = function(m, t)
{   
    var ret = [];
    
    var x = this.getX();
    var y = this.getY();
    
    for(var i = 1; (x + i < t && y + i < t); i++)
        if(m[x + i][y + i] == null)
            ret.push(new Coordinate(x + i, y + i));
        else
        {
            if(m[x + i][y + i].color != this.color)
                ret.push(new Coordinate(x + i, y + i));

            break;
        }
            
    
    for(var i = 1; (x + i < t && y - i > -1); i++)
        if(m[x + i][y - i] == null)
            ret.push(new Coordinate(x + i, y - i));
        else
        {
            if(m[x + i][y - i].color != this.color)
                ret.push(new Coordinate(x + i, y - i));

            break;
        }
    
    for(var i = 1; (x - i > -1 && y + i < t); i++)
        if(m[x - i][y + i] == null)
            ret.push(new Coordinate(x - i, y + i));
        else
        {
            if(m[x - i][y + i].color != this.color)
                ret.push(new Coordinate(x - i, y + i));

            break;
        }
    
    for(var i = 1; (x - i > -1 && y - i > -1); i++)
        if(m[x - i][y - i] == null)
            ret.push(new Coordinate(x - i, y - i));
        else
        {
            if(m[x - i][y - i].color != this.color)
                ret.push(new Coordinate(x - i, y - i));

            break;
        }
    
    return ret;
}