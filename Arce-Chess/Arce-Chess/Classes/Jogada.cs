using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Arce_Chess.Classes
{
    public class Jogada
    {
        private int codJogada;
        private int codPartida;
        private string cor;
        private string piece;
        private Coordenada posicaoOrigem;
        private Coordenada posicaoFim;

        public Jogada(int codJogada, int codPartida, string cor, string piece, Coordenada posicaoOrigem, Coordenada posicaoFim)
        {
            this.CodJogada = codJogada;
            this.CodPartida = codPartida;
            this.Cor = cor;
            this.Piece = piece;
            this.PosicaoOrigem = posicaoOrigem;
            this.PosicaoFim = posicaoFim;
        }

        public int CodJogada
        {
            get { return codJogada; }
            set
            {
                codJogada = value;
            }
        }

        public int CodPartida
        {
            get { return codPartida; }
            set
            {
                codPartida = value;
            }
        }

        public string Cor
        {
            get { return cor; }
            set
            {
                if (value == null || !value.ToUpper().Equals("B") || !value.ToUpper().Equals("P"))
                    cor = value.ToUpper();
            }
        }

        public string Piece
        {
            get { return piece; }
            set
            {
                if (value == null || value.Equals(""))
                    throw new Exception("Peça indefinida");

                piece = value;
            }
        }

        public Coordenada PosicaoOrigem
        {
            get { return posicaoOrigem; }
            set
            {
                if (value == null)
                    throw new Exception("Posição inicial nula.");

                posicaoOrigem = value;
            }
        }

        public Coordenada PosicaoFim
        {
            get { return posicaoFim; }
            set
            {
                if (value == null)
                    throw new Exception("Posição final nula.");

                posicaoFim = value;
            }
        }
    }
}
