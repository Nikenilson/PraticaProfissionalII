function Xadrez(tamanho, pieces) {
    this.tamanho = tamanho;
    this.setPieces(pieces);

    alert("deus");

    this.pieceSelecionada = null;
    this.vez = "brancas";

    this.canvas = document.getElementById("game");
    this.canvasContext = this.canvas.getContext("2d");

    this.canvas.width = (this.tamanho == 8) ? 720 : 900;
    this.canvas.height = 720;

    var elem = document.getElementById('game'),
        elemLeft = elem.offsetLeft,
        elemTop = elem.offsetTop,
        context = elem.getContext('2d');

    this.setTabuleiro();


    pieces = this.pieces;
    this.matriz = null;
    var funcAux = this;

    //onClick do canvas
    this.canvas.
        addEventListener('click', function (event) {
            var x = event.pageX - elemLeft,
                y = event.pageY - elemTop;
            var pieceSelecionada = null;

            pieces.forEach(function (piece) {
                if (piece.getTX(tamanho) < x && piece.getTX(tamanho) + 80 > x)
                    if (piece.getTY(tamanho) < y && piece.getTY(tamanho) + 80 > y)
                        pieceSelecionada = piece;
            });

            funcAux.montarMatriz();

            if (pieceSelecionada != null) {
                if (pieceSelecionada.cor != funcAux.vez) {
                    if (funcAux.pieceSelecionada != null) {
                        funcAux.pieceSelecionada.paraOndePodeAndar(funcAux.matriz, funcAux.tamanho).forEach(
                            function (coordenada) {
                                if (coordenada.x == Math.floor(x / ((funcAux.tamanho == 8) ? 90 : 80)) && coordenada.y == Math.floor(y / ((funcAux.tamanho == 8) ? 90 : 80))) {
                                    funcAux.comer(x, y);
                                }
                            });
                    }

                    return;
                }

                if (pieceSelecionada == funcAux.pieceSelecionada) {
                    funcAux.atualizarTela();
                    funcAux.pieceSelecionada = null;
                }
                else {
                    funcAux.putGreenBalls(pieceSelecionada.paraOndePodeAndar(funcAux.matriz, funcAux.tamanho), pieceSelecionada);
                    funcAux.pieceSelecionada = pieceSelecionada;
                }

            }
            else
                if (funcAux.pieceSelecionada != null) {
                    funcAux.pieceSelecionada.paraOndePodeAndar(funcAux.matriz, funcAux.tamanho).forEach(
                        function (coordenada) {
                            if (coordenada.x == Math.floor(x / ((funcAux.tamanho == 8) ? 90 : 80)) && coordenada.y == Math.floor(y / ((funcAux.tamanho == 8) ? 90 : 80))) {
                                funcAux.andar(x, y);
                            }

                        });
                }
        }, false);
    //Fim do onClick do canvas

    this.atualizarTela();
}

Xadrez.prototype.comer = function (x, y) {
    var sPX = this.pieceSelecionada.getX();
    var sPY = this.pieceSelecionada.getY();
    var aux;
    for (var i = 0; i < this.pieces.length; i++)
        if (this.pieces[i].getX() == Math.floor(x / ((this.tamanho == 8) ? 90 : 80)) && this.pieces[i].getY() == Math.floor(y / ((this.tamanho == 8) ? 90 : 80))) {
            aux = this.pieces[i];
            this.pieces.splice(i, 1);
        }
    this.pieceSelecionada.setXY(Math.floor(x / ((this.tamanho == 8) ? 90 : 80)), Math.floor(y / ((this.tamanho == 8) ? 90 : 80)));

    if (!this.isCheck((this.vez == "brancas") ? ("negras") : ("brancas"))) {
        this.pieceSelecionada = null;
        if (this.isCheck(this.vez))
            alert("Check");
        this.vez = (this.vez == "brancas") ? "negras" : "brancas";
        this.atualizarTela();
        return true;
    }
    else {
        this.pieceSelecionada.setXY(sPX, sPY);
        this.pieces.push(aux);
        return false;
    }
}

Xadrez.prototype.andar = function (x, y) {
    var sPX = this.pieceSelecionada.getX();
    var sPY = this.pieceSelecionada.getY();
    this.pieceSelecionada.setXY(Math.floor(x / ((this.tamanho == 8) ? 90 : 80)), Math.floor(y / ((this.tamanho == 8) ? 90 : 80)));

    if (!this.isCheck((this.vez == "brancas") ? ("negras") : ("brancas"))) {
        this.pieceSelecionada = null;
        if (this.isCheck(this.vez))
            alert("Check");
        this.vez = (this.vez == "brancas") ? ("negras") : ("brancas");
        this.atualizarTela();
        return true;
    }
    else {
        this.pieceSelecionada.setXY(sPX, sPY);
        return false;
    }
}

Xadrez.prototype.montarMatriz = function () {
    var matriz = [];
    for (var i = 0; i < this.tamanho; i++)
        matriz.push([]);
    for (var i = 0; i < this.tamanho; i++)
        for (var j = 0; j < this.tamanho; j++)
            matriz[i].push();

    this.pieces.forEach(
        function (piece) {
            matriz[piece.getX()][piece.getY()] = piece;
        }
    );

    this.matriz = matriz;
}

Xadrez.prototype.setTabuleiro = function () {
    var x = (this.tamanho == 8) ? 90 : 80;

    for (var i = 0; i < 720; i += x)
        for (var j = (i / x) % 2 == 0 ? x : 0; j < 720; j += 2 * x)
            this.canvasContext.fillRect(j, i, x, x)

    if (this.tamanho == 9)
        this.canvasContext.fillRect(720, 0, 180, 720);
}

Xadrez.prototype.setPieces = function (pieces) {
    this.pieces = pieces;
}

Xadrez.prototype.atualizarTela = function () {
    this.canvasContext.clearRect(0, 0, 900, 720);

    this.setTabuleiro();

    for (var i = 0; i < this.pieces.length; i++)
        this.pieces[i].desenhar(this.canvasContext, this.tamanho);

    if (this.pieceSelecionada != null)
        this.putGreenBalls(this.pieceSelecionada.paraOndePodeAndar(this.matriz, this.tamanho));
}

Xadrez.prototype.putGreenBalls = function (positions, pieceSelecionada) {
    /*for(var i = 0; i < this.pieces[i].length; i++)
        if(this.pieceSelecionada)*/

    var img = new Image();
    img.src = ""; //imagem
    for (var i = 0; i < positions.length; i++)
        this.canvasContext.drawImage(img, (this.tamanho == 8) ? (90 * positions[i].x + 32) : (80 * positions[i].x + 27), (this.tamanho == 8) ? (90 * positions[i].y + 32) : (80 * positions[i].y + 27));

}
Xadrez.prototype.isCheck = function (cor) {
    this.montarMatriz();
    var xRei;
    var yRei;
    for (var i = 0; i < this.pieces.length; i++)
        if (this.pieces[i].value == 0 && this.pieces[i].cor != cor) {
            xRei = this.pieces[i].getX();
            yRei = this.pieces[i].getY();
        }


    for (var i = 0; i < this.pieces.length; i++)
        if (this.pieces[i].cor == cor) {
            var aux = this.pieces[i].paraOndePodeAndar(this.matriz, this.tamanho);
            for (var j = 0; j < aux.length; j++)
                if (aux[j].x == xRei && aux[j].y == yRei)
                    return true;
        }
    return false;
}
