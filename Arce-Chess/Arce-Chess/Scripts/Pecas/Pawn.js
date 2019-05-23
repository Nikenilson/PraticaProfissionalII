function Pawn(x,y, color)
{
    Piece.call(this);
    
    this.setImages("img/WPawn.png", "img/BPawn.png");
    this.color = color || "black";
    
    this.naosei = false;
    
    this.x = x || 0;
    this.y = y || 0;
    
    this.naosei = true;
    
    this.value = 1;
    
    this.hasAlreadymove = false;
    
    this.nomePeca = "pawn";
}

Pawn.prototype = Object.create(Piece.prototype);

Pawn.prototype.whereCanGo = function(m)
{
    var ret = [];
    
        if(m[this.getX()][this.getY() + ((this.color=="white")?(-1):1)] == null)
                ret.push(new Coordinate(this.getX(), this.getY() + ((this.color=="white")?(-1):1)));

        if (this.hasAlreadymove == false && ret.length > 0)
            if(m[this.getX()][this.getY() + ((this.color=="white")?(-2):2)] == null)
                ret.push(new Coordinate(this.getX(), this.getY() + ((this.color=="white")?(-2):2)));

        if(this.getX() < m.length - 1)
            if(m[this.getX() + 1][this.getY() + ((this.color=="white")?(-1):1)] != null)
                if (m[this.getX() + 1][this.getY() + ((this.color=="white")?(-1):1)].color != this.color)
                    ret.push(new Coordinate(this.getX() + 1, this.getY() + ((this.color=="white")?(-1):1)));

        if(this.getX() > 0)
            if(m[this.getX() - 1][this.getY() + ((this.color=="white")?(-1):1)] != null)
                if (m[this.getX() - 1][this.getY() + ((this.color=="white")?(-1):1)].color != this.color)
                    ret.push(new Coordinate(this.getX() - 1, this.getY() + ((this.color=="white")?(-1):1)));
    
    return ret;
}

Pawn.prototype.setX = function(x)
{
    this.x = x;
    
    this.hasAlreadymove = true;
}

Pawn.prototype.setY = function(y)
{
    this.y = y;
    
    if(this.naosei == true)
        if((this.color == "white")?(y == 0):(y == 7))
            this.promote();
            
    
    this.hasAlreadymove = true;
}

Pawn.prototype.promote = function()
{
    pawn = this;
    $('#modalPromote').modal('show');
}