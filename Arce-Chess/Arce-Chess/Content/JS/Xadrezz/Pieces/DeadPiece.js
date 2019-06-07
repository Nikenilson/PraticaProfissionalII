function DeadPiece(x, y, cor, pClass) {
    Piece.call(this);

    this.brancasIMG = new pClass(5, 5, "brancas").getImage();
    this.pretasIMG = new pClass(5, 5, "negras").getImage();
    this.cor = cor;

    this.valor = new pClass(5, 5, cor).valor;

    this.pClass = pClass;

    this.x = x;
    this.y = y;

    this.qtd = 0;

    this.vaue = null;

    this.jaMoveu = false;

    this.nomePiece = "deadPiece";
}

DeadPiece.prototype = Object.create(Piece.prototype);

DeadPiece.prototype.paraOndePodeAndar = function (m) {
    var ret = [];
    var t = m.length;
    if (this.valor != 1) {
        if (this.qtd > 0)
            for (var i = 0; i < t; i++)
                for (var j = 0; j < t; j++)
                    if (m[i][j] == null) {
                        ret.push(new Coordenada(i, j));
                    }
    }
    else
        if (this.qtd > 0)
            for (var i = 0; i < t; i++) {
                var aux = true;

                for (var j = 0; j < t; j++)
                    if (m[i][j] != null)
                        if (m[i][j].value == 1)
                            if (m[i][j].cor == this.cor)
                                aux = false;

                if (aux)
                    for (var j = 0; j < t; j++)
                        if (m[i][j] == null)
                            ret.push(new Coordenada(i, j));

            }
    return ret;
}

DeadPiece.prototype.setQtd = function (n) {
    this.qtd = n;
}

DeadPiece.prototype.getQtd = function () {
    return this.qtd;
}

DeadPiece.prototype.setX = function (x) {
    this.qtd--;
}

DeadPiece.prototype.setY = function (x) {

}

DeadPiece.prototype.getNewPieceClass = function (x, y) {
    return (new this.pClass(x, y, this.color));
}

DeadPiece.prototype.setPieceClass = function (nClass) {
    this.pClass = nClass;
}