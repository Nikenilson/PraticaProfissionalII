function Torre(x, y, cor) {
    Piece.call(this);

    this.setImages("./Content/IMG/GTower.png", "./Content/IMG/BTower.png");
    this.cor = cor;

    this.setXY(x || 0, y || 0);

    this.valor = 5;

    this.nomePiece = "torre";
}

Torre.prototype = Object.create(Piece.prototype);

Torre.prototype.paraOndePodeAndar = function (m, t) {
    var ret = [];

    var x = this.getX();
    var y = this.getY();

    for (var i = 1; x + i < t; i++)
        if (m[x + i][y] == null)
            ret.push(new Coordenada(x + i, y));
        else {
            if (m[x + i][y].cor != this.cor)
                ret.push(new Coordenada(x + i, y));

            break;
        }


    for (var i = 1; x - i > -1; i++)
        if (m[x - i][y] == null)
            ret.push(new Coordenada(x - i, y));
        else {
            if (m[x - i][y].cor != this.cor)
                ret.push(new Coordenada(x - i, y));

            break;
        }

    for (var i = 1; y + i < t; i++)
        if (m[x][y + i] == null)
            ret.push(new Coordenada(x, y + i));
        else {
            if (m[x][y + i].cor != this.cor)
                ret.push(new Coordenada(x, y + i));

            break;
        }

    for (var i = 1; y - i > -1; i++)
        if (m[x][y - i] == null)
            ret.push(new Coordenada(x, y - i));
        else {
            if (m[x][y - i].cor != this.cor)
                ret.push(new Coordenada(x, y - i));

            break;
        }

    return ret;
}