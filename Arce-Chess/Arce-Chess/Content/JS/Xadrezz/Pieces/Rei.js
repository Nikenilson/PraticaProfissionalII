function Rei(x, y, cor) {
    Piece.call(this);

    this.setImages("", "");
    this.cor = cor;

    this.valor = 0;

    this.setXY(x || 0, y || 0);

    this.nomePiece = "rei";
}

Rei.prototype = Object.create(Piece.prototype);

King.prototype.paraOndePodeAndar = function (m, t) {
    var ret = [];

    var x = this.getX();
    var y = this.getY();

    if (x + 1 < t)
        if (m[x + 1][y] == null)
            ret.push(new Coordenada(x + 1, y));
        else
            if (m[x + 1][y].cor != this.cor)
                ret.push(new Coordenada(x + 1, y));

    if (x > 0)
        if (m[x - 1][y] == null)
            ret.push(new Coordenada(x - 1, y));
        else
            if (m[x - 1][y].cor != this.cor)
                ret.push(new Coordenada(x - 1, y));

    if (y + 1 < t)
        if (m[x][y + 1] == null)
            ret.push(new Coordenada(x, y + 1));
        else
            if (m[x][y + 1].cor != this.cor)
                ret.push(new Coordenada(x, y + 1));

    if (y > 0)
        if (m[x][y - 1] == null)
            ret.push(new Coordenada(x, y - 1));
        else
            if (m[x][y - 1].cor != this.cor)
                ret.push(new Coordenada(x, y - 1));

    if (x + 1 < t && y + 1 < t)
        if (m[x + 1][y + 1] == null)
            ret.push(new Coordenada(x + 1, y + 1));
        else
            if (m[x + 1][y + 1].cor != this.cor)
                ret.push(new Coordenada(x + 1, y + 1));

    if (x + 1 < t && y > 0)
        if (m[x + 1][y - 1] == null)
            ret.push(new Coordenada(x + 1, y - 1));
        else
            if (m[x + 1][y - 1].cor != this.cor)
                ret.push(new Coordenada(x + 1, y - 1));

    if (x > 0 && y + 1 < t)
        if (m[x - 1][y + 1] == null)
            ret.push(new Coordenada(x - 1, y + 1));
        else
            if (m[x - 1][y + 1].cor != this.cor)
                ret.push(new Coordenada(x - 1, y + 1));

    if (x > 0 && y > 0)
        if (m[x - 1][y - 1] == null)
            ret.push(new Coordenada(x - 1, y - 1));
        else
            if (m[x - 1][y - 1].cor != this.cor)
                ret.push(new Coordenada(x - 1, y - 1));

    return ret;
}