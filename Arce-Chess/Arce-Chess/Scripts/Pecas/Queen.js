function Rainha(x,y, cor)
{
    Peca.call(this);
    
    this.setImages("img/WQueen.png", "img/BQueen.png");
    this.cor = cor;
    
    this.setXY(x || 0, y || 0);
    
    this.valor = 9;
    
    this.nomePeca = "queen";
}

Rainha.prototype = Object.create(Peca.prototype);


//uns calculo muito loco, mas funciona
Rainha.prototype.paraOndePodeAndar = function(m, t)
{   
    var ret = [];
    
    var x = this.getX();
    var y = this.getY();
    
    for(var i = 1; x + i < t; i++)
        if(m[x + i][y] == null)
            ret.push(new Coordinate(x + i, y));
        else
        {
            if(m[x + i][y].color != this.color)
                ret.push(new Coordinate(x + i, y));

            break;
        }
            
    
    for(var i = 1; x - i > -1; i++)
        if(m[x - i][y] == null)
            ret.push(new Coordinate(x - i, y));
        else
        {
            if(m[x - i][y].color != this.color)
                ret.push(new Coordinate(x - i, y));

            break;
        }
    
    for(var i = 1; y + i < t; i++)
        if(m[x][y + i] == null)
            ret.push(new Coordinate(x, y + i));
        else
        {
            if(m[x][y + i].color != this.color)
                ret.push(new Coordinate(x, y + i));

            break;
        }
    
    for(var i = 1; y - i > -1; i++)
        if(m[x][y - i] == null)
            ret.push(new Coordinate(x, y - i));
        else
        {
            if(m[x][y - i].color != this.color)
                ret.push(new Coordinate(x, y - i));

            break;
        }
    
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