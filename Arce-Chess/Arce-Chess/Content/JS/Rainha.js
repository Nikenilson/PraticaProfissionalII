-function Rainha(x, y, cor) {
    Peca.call(this);

    this.setImages("w", "b");
    this.cor = cor;

    this.setXY(x || 0, y || 0);

    this.valor = 9;

    this.nomePiece = "rainha";
}

Rainha.prototype = Object.create(Piece.prototype);


Rainha.prototype.paraOndePodeAndar = function (m, t) {
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

    for (var i = 1; (x + i < t && y + i < t); i++)
        if (m[x + i][y + i] == null)
            ret.push(new Coordenada(x + i, y + i));
        else {
            if (m[x + i][y + i].cor != this.cor)
                ret.push(new Coordenada(x + i, y + i));

            break;
        }


    for (var i = 1; (x + i < t && y - i > -1); i++)
        if (m[x + i][y - i] == null)
            ret.push(new Coordenada(x + i, y - i));
        else {
            if (m[x + i][y - i].cor != this.cor)
                ret.push(new Coordenada(x + i, y - i));

            break;
        }

    for (var i = 1; (x - i > -1 && y + i < t); i++)
        if (m[x - i][y + i] == null)
            ret.push(new Coordenada(x - i, y + i));
        else {
            if (m[x - i][y + i].cor != this.cor)
                ret.push(new Coordenada(x - i, y + i));

            break;
        }

    for (var i = 1; (x - i > -1 && y - i > -1); i++)
        if (m[x - i][y - i] == null)
            ret.push(new Coordenada(x - i, y - i));
        else {
            if (m[x - i][y - i].cor != this.cor)
                ret.push(new Coordenada(x - i, y - i));

            break;
        }

    return ret;
}