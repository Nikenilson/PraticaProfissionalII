function Peca(x, y, cor, spriteBrancas, spriteNegras)
{
    this.setXY(x || 0, y || 0);
    this.cor = cor;
    this.nomePeca = "piece";
    this.valor = 1;
    
    this.brancasImg = new Image();
    this.negrasImg = new Image();
    
    this.brancasImg.src = whiteSprite || "";
    this.negrasImg.src = blackSprite || "";

};

Peca.prototype.getNomePeca = function ()
{
    return this.nomePeca;
}

Peca.prototype.setX = function(x)
{
    this.x = x;
}

Peca.prototype.setY = function(y)
{
    this.y = y;
}

Peca.prototype.setXY = function(x, y)
{
    this.setX(x);
    this.setY(y);
}

Peca.prototype.getX = function()
{
    return this.x;
}

Peca.prototype.getY = function()
{
    return this.y;
}

Peca.prototype.getImage = function()
{
    return (this.color=="white")?this.whiteImage:this.blackImage;
}

Peca.prototype.setImages = function(whiteSprite, blackSprite)
{
    this.whiteImage.src = whiteSprite;
    this.blackImage.src = blackSprite;
}

Peca.prototype.desenhar = function(context, tamanho)
{
    var x = (tamanho==8)?(90 * this.getX() + 5):(80 * this.getX());
    var y = (tamanho==8)?(90 * this.getY() + 5):(80 * this.getY());
    
    context.drawImage(this.getImage(), x, y);
}

Peca.prototype.paraOndePodeAndar = function()
{
    return [];
}

Peca.prototype.comer = function(x, y, pieces)
{
    var i = 0;
    pieces.forEach(function(p)
    {
        if(p.getX() == x && p.getY() == y)
            pieces.splice(i, 1);
            
        i++;
    })
    
    this.setXY(x, y);
}

//Depende do canvas 
Piece.prototype.getTX = function (tamanho)
{
    return (tamanho == 8) ? (90 * this.getX() + 5) : (80 * this.getX());
}

Piece.prototype.getTY = function (tamanho)
{
    return (tamanho == 8) ? (90 * this.getY() + 5) : (80 * this.getY());
}