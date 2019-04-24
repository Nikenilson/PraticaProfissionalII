using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Arce_Chess.Classes
{
    public class Piece
    {
        private string jogador;
        private string nomePiece;
        private int movimentos;
        private int vezesEscolhida;

        public Piece(string j, string n, int m)
        {
            this.Jogador = j;
            this.NomePiece = n;
            this.Movimentos = m;
        }

        public string Jogador
        {
            get { return jogador; }
            set
            {
                if (value == null || value.Equals("") )
                    throw new Exception("Nome invalido");

                jogador = value;
            }
        }

        public string NomePiece
        {
            get { return nomePiece; }
            set
            {
                if (string.IsNullOrEmpty(value))
                    throw new Exception();

                nomePiece = value;
            }
        }

        public int Movimentos
        {
            get { return movimentos; }
            set
            {
                movimentos = value;
            }
        }
    }
}