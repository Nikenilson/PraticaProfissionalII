-function Piece(x, y, cor, spriteBrancas, spriteNegras) {
    this.setXY(x || 0, y || 0);
    this.cor = cor;
    this.nomePiece = "piece";
    this.valor = 1;

    this.brancasImg = new Image();
    this.negrasImg = new Image();

    this.brancasImg.src = whiteSprite || "";
    this.negrasImg.src = blackSprite || "";

};

Piece.prototype.getNomePiece = function () {
    return this.nomePiece;
}

Piece.prototype.setX = function (x) {
    this.x = x;
}

Piece.prototype.setY = function (y) {
    this.y = y;
}

Piece.prototype.setXY = function (x, y) {
    this.setX(x);
    this.setY(y);
}

Piece.prototype.getX = function () {
    return this.x;
}

Piece.prototype.getY = function () {
    return this.y;
}

Piece.prototype.getImage = function () {
    return (this.color == "white") ? this.whiteImage : this.blackImage;
}

Piece.prototype.setImages = function (whiteSprite, blackSprite) {
    this.whiteImage.src = whiteSprite;
    this.blackImage.src = blackSprite;
}

Piece.prototype.desenhar = function (context, tamanho) {
    var x = (tamanho == 8) ? (90 * this.getX() + 5) : (80 * this.getX());
    var y = (tamanho == 8) ? (90 * this.getY() + 5) : (80 * this.getY());

    context.drawImage(this.getImage(), x, y);
}

Piece.prototype.paraOndePodeAndar = function () {
    return [];
}

Piece.prototype.comer = function (x, y, pieces) {
    var i = 0;
    pieces.forEach(function (p) {
        if (p.getX() == x && p.getY() == y)
            pieces.splice(i, 1);

        i++;
    })

    this.setXY(x, y);
}

Piece.prototype.getTX = function (tamanho) {
    return (tamanho == 8) ? (90 * this.getX() + 5) : (80 * this.getX());
}

Piece.prototype.getTY = function (tamanho) {
    return (tamanho == 8) ? (90 * this.getY() + 5) : (80 * this.getY());
}