function Cavalo(x,y, cor)
{
    Piece.call(this);
    
    this.setImages("", "");
    this.cor = cor;
    
    this.valor = 3;
    
    this.setXY(x || 0, y || 0);
    
    this.nomePiece = "cavalo";
}

Cavalo.prototype = Object.create(Piece.prototype);

Cavalo.prototype.paraOndePodeAndar = function(m, t)
{   
    var ret = [];
    
    var x = this.getX();
    var y = this.getY();
    
    if(x + 2 < t && y + 1 < t)
        if(m[x + 2][y + 1] == null)
            ret.push(new Coordenada(x + 2, y + 1));
        else
            if(m[x + 2][y + 1].cor != this.cor)
                ret.push(new Coordenada(x + 2, y + 1));
    
    if(x + 1 < t && y + 2 < t)
        if(m[x + 1][y + 2] == null)
            ret.push(new Coordenada(x + 1, y + 2));
        else
            if(m[x + 1][y + 2].cor != this.cor)
                ret.push(new Coordenada(x + 1, y + 2));
    
    if(x - 2 > - 1 && y - 1 > -1)
        if(m[x - 2][y - 1] == null)
            ret.push(new Coordenada(x - 2, y - 1));
        else
            if(m[x - 2][y - 1].cor != this.cor)
                ret.push(new Coordenada(x - 2, y - 1));
    
    if(x - 1 > - 1 && y - 2 > -1)
        if(m[x - 1][y - 2] == null)
            ret.push(new Coordenada(x - 1, y - 2));
        else
            if(m[x - 1][y - 2].cor != this.cor)
                ret.push(new Coordenada(x - 1, y - 2));
    
    if(x + 2 < t && y - 1 > -1)
        if(m[x + 2][y - 1] == null)
            ret.push(new Coordenada(x + 2, y - 1));
        else
            if(m[x + 2][y - 1].cor != this.cor)
                ret.push(new Coordenada(x + 2, y - 1));
    
    if(x + 1 < t && y - 2 > -1)
        if(m[x + 1][y - 2] == null)
            ret.push(new Coordenada(x + 1, y - 2));
        else
            if(m[x + 1][y - 2].cor != this.cor)
                ret.push(new Coordenada(x + 1, y - 2));
    
    if(x - 2 > - 1 && y + 1 < t)
        if(m[x - 2][y + 1] == null)
            ret.push(new Coordenada(x - 2, y + 1));
        else
            if(m[x - 2][y + 1].cor != this.cor)
                ret.push(new Coordenada(x - 2, y + 1));
    
    if(x - 1 > - 1 && y + 2 < t)
        if(m[x - 1][y + 2] == null)
            ret.push(new Coordenada(x - 1, y + 2));
        else
            if(m[x - 1][y + 2].cor != this.cor)
                ret.push(new Coordenada(x - 1, y + 2));
    
    return ret;
}