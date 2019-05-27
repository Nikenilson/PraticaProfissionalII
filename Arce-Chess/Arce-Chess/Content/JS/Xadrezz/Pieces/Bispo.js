function Bispo(x, y, cor) {
    Piece.call(this);

    this.setImages("./Content/IMG/GBishop.png", "./Content/IMG/BBishop.png"); //Imagens de cor branca e preta da pe�a
    this.cor = cor;

    this.valor = 3;

    this.setXY(x || 0, y || 0);
    this.nomePiece = "bispo";
}

Bispo.prototype = Object.create(Piece.prototype);


//uns calculo muito loco, mas funciona
Bispo.prototype.paraOndePodeAndar = function (m, t) {
    var ret = [];

    var x = this.getX();
    var y = this.getY();

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