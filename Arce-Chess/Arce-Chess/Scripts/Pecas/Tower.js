function Torre(x,y, cor)
{
    Peca.call(this);
    
    this.setImages("img/WTower.png", "img/BTower.png");
    this.cor = cor;
    
    this.setXY(x || 0, y || 0);
    
    this.valor = 5;
    
    this.nomePeca = "torre";
}

Torre.prototype = Object.create(Peca.prototype);

Torre.prototype.paraOndePodeAndar = function(m, t)
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
    
    return ret;
}