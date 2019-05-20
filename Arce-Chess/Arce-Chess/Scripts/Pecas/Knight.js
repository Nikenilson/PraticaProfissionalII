function Knight(x,y, color)
{
    Piece.call(this);
    
    this.setImages("img/WKnight.png", "img/BKnight.png");
    this.color = color;
    
    this.value = 3;
    
    this.setXY(x || 0, y || 0);
    
    this.nomePeca = "knight";
}

Knight.prototype = Object.create(Piece.prototype);

Knight.prototype.whereCanGo = function(m, t)
{   
    var ret = [];
    
    var x = this.getX();
    var y = this.getY();
    
    if(x + 2 < t && y + 1 < t)
        if(m[x + 2][y + 1] == null)
            ret.push(new Coordinate(x + 2, y + 1));
        else
            if(m[x + 2][y + 1].color != this.color)
                ret.push(new Coordinate(x + 2, y + 1));
    
    if(x + 1 < t && y + 2 < t)
        if(m[x + 1][y + 2] == null)
            ret.push(new Coordinate(x + 1, y + 2));
        else
            if(m[x + 1][y + 2].color != this.color)
                ret.push(new Coordinate(x + 1, y + 2));
    
    if(x - 2 > - 1 && y - 1 > -1)
        if(m[x - 2][y - 1] == null)
            ret.push(new Coordinate(x - 2, y - 1));
        else
            if(m[x - 2][y - 1].color != this.color)
                ret.push(new Coordinate(x - 2, y - 1));
    
    if(x - 1 > - 1 && y - 2 > -1)
        if(m[x - 1][y - 2] == null)
            ret.push(new Coordinate(x - 1, y - 2));
        else
            if(m[x - 1][y - 2].color != this.color)
                ret.push(new Coordinate(x - 1, y - 2));
    
    if(x + 2 < t && y - 1 > -1)
        if(m[x + 2][y - 1] == null)
            ret.push(new Coordinate(x + 2, y - 1));
        else
            if(m[x + 2][y - 1].color != this.color)
                ret.push(new Coordinate(x + 2, y - 1));
    
    if(x + 1 < t && y - 2 > -1)
        if(m[x + 1][y - 2] == null)
            ret.push(new Coordinate(x + 1, y - 2));
        else
            if(m[x + 1][y - 2].color != this.color)
                ret.push(new Coordinate(x + 1, y - 2));
    
    if(x - 2 > - 1 && y + 1 < t)
        if(m[x - 2][y + 1] == null)
            ret.push(new Coordinate(x - 2, y + 1));
        else
            if(m[x - 2][y + 1].color != this.color)
                ret.push(new Coordinate(x - 2, y + 1));
    
    if(x - 1 > - 1 && y + 2 < t)
        if(m[x - 1][y + 2] == null)
            ret.push(new Coordinate(x - 1, y + 2));
        else
            if(m[x - 1][y + 2].color != this.color)
                ret.push(new Coordinate(x - 1, y + 2));
    
    return ret;
}