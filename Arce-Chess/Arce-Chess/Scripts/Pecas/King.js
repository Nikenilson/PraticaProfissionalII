function King(x,y, color)
{
    Piece.call(this);
    
    this.setImages("img/WKing.png", "img/BKing.png");
    this.color = color || "black";
    
    this.value = 0;
    
    this.setXY(x || 0, y || 0);
    
    this.nomePeca = "king";
}

King.prototype = Object.create(Piece.prototype);

King.prototype.whereCanGo = function(m, t)
{   
    var ret = [];
    
    var x = this.getX();
    var y = this.getY();
    
    if(x + 1 < t)
        if(m[x + 1][y] == null)
            ret.push(new Coordinate(x + 1, y));
        else
            if(m[x + 1][y].color != this.color)
                ret.push(new Coordinate(x + 1, y));
    
    if(x > 0)
        if(m[x - 1][y] == null)
            ret.push(new Coordinate(x - 1, y));
        else
            if(m[x - 1][y].color != this.color)
                ret.push(new Coordinate(x - 1, y));
    
    if(y + 1 < t)
        if(m[x][y + 1] == null)
            ret.push(new Coordinate(x, y + 1));
        else
            if(m[x][y + 1].color != this.color)
                ret.push(new Coordinate(x, y + 1));
    
    if(y > 0)
        if(m[x][y - 1] == null)
            ret.push(new Coordinate(x, y - 1));
        else
            if(m[x][y - 1].color != this.color)
                ret.push(new Coordinate(x, y - 1));
    
    if(x + 1 < t && y + 1 < t)
        if(m[x + 1][y + 1] == null)
            ret.push(new Coordinate(x + 1, y + 1));
        else
            if(m[x + 1][y + 1].color != this.color)
                ret.push(new Coordinate(x + 1, y + 1));
    
    if(x + 1 < t && y > 0)
        if(m[x + 1][y - 1] == null)
            ret.push(new Coordinate(x + 1, y - 1));
        else
            if(m[x + 1][y - 1].color != this.color)
                ret.push(new Coordinate(x + 1, y - 1));
    
    if(x > 0 && y + 1 < t)
        if(m[x - 1][y + 1] == null)
            ret.push(new Coordinate(x - 1, y + 1));
        else
            if(m[x - 1][y + 1].color != this.color)
                ret.push(new Coordinate(x - 1, y + 1));
    
    if(x > 0 && y > 0)
        if(m[x - 1][y - 1] == null)
            ret.push(new Coordinate(x - 1, y - 1));
        else
            if(m[x - 1][y - 1].color != this.color)
                ret.push(new Coordinate(x - 1, y - 1));
    
    return ret;
}