function Pawn(x, y, cor) //Peao fica estranho
{
    Piece.call(this);

    this.setImages("", "");
    this.cor = cor;

    this.naosei = false;

    this.x = x || 0;
    this.y = y || 0;

    this.naosei = true;

    this.valor = 1;

    this.jaMoveu = false;

    this.nomePiece = "pawn"; //Peao fica estranho
}

Pawn.prototype = Object.create(Piece.prototype);

Pawn.prototype.paraOndePodeAndar = function (m) {
    var ret = [];

    if (m[this.getX()][this.getY() + ((this.cor == "brancas") ? (-1) : 1)] == null)
        ret.push(new Coordenada(this.getX(), this.getY() + ((this.cor == "brancas") ? (-1) : 1)));

    if (this.jaMoveu == false && ret.length > 0)
        if (m[this.getX()][this.getY() + ((this.cor == "brancas") ? (-2) : 2)] == null)
            ret.push(new Coordenada(this.getX(), this.getY() + ((this.cor == "brancas") ? (-2) : 2)));

    if (this.getX() < m.length - 1)
        if (m[this.getX() + 1][this.getY() + ((this.cor == "brancas") ? (-1) : 1)] != null)
            if (m[this.getX() + 1][this.getY() + ((this.cor == "brancas") ? (-1) : 1)].cor != this.cor)
                ret.push(new Coordenada(this.getX() + 1, this.getY() + ((this.cor == "brancas") ? (-1) : 1)));

    if (this.getX() > 0)
        if (m[this.getX() - 1][this.getY() + ((this.cor == "brancas") ? (-1) : 1)] != null)
            if (m[this.getX() - 1][this.getY() + ((this.cor == "brancas") ? (-1) : 1)].cor != this.cor)
                ret.push(new Coordenada(this.getX() - 1, this.getY() + ((this.cor == "brancas") ? (-1) : 1)));

    return ret;
}

Pawn.prototype.setX = function (x) {
    this.x = x;

    this.jaMoveu = true;
}

Pawn.prototype.setY = function (y) {
    this.y = y;

    if (this.naosei == true)
        if ((this.cor == "brancas") ? (y == 0) : (y == 7))
            this.promover();


    this.jaMoveu = true;
}

Pawn.prototype.promover = function () {
    pawn = this;
    $('#modalPromote').modal('show');
}