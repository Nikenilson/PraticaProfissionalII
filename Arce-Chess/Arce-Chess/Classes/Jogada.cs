using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Arce_Chess.Classes
{
    public class Jogada
    {
        private int codJogada;
        private int CodPartida;
        private string cor;
        private string piece;
        private Coordenada posicaoOrigem;
        private Coordenada posicaoFim;

        public Jogada(int ID, int IDSala, bool cor, string peca, Coordenada posO, Coordenada posF)
        {
            this.ID = ID;
            this.IDSala = IDSala;
            this.Cor = cor;
            this.Peca = peca;
            this.PosOrigem = posO;
            this.PosFim = posF;
        }

        public int ID
        {
            get { return id; }
            set
            {
                id = value;
            }
        }

        public int IDSala
        {
            get { return idSala; }
            set
            {
                idSala = value;
            }
        }

        public bool Cor //0->preto; 1->branco
        {
            get { return cor; }
            set
            {
                cor = value;
            }
        }

        public string Peca
        {
            get { return peca; }
            set
            {
                if (string.IsNullOrEmpty(value))
                    throw new Exception("Peça indefinida");

                peca = value;
            }
        }

        public Coordenada PosOrigem
        {
            get { return posOrigem; }
            set
            {
                if (value == null)
                    throw new Exception("Posição de origem não pode ser nula.");

                posOrigem = value;
            }
        }

        public Coordenada PosFim
        {
            get { return posFim; }
            set
            {
                if (value == null)
                    throw new Exception("Posição de destino não pode ser nula.");

                posFim = value;
            }
        }
    }
}
}