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
        private int qtdMovimentos;

        public Piece(string j, string n, int m)
        {
            this.Jogador = j;
            this.NomePiece = n;
            this.QtdMovimentos = m;
        }

        public string Jogador
        {
            get { return jogador; }
            set
            {
                if (value == null || value.Equals("") )
                    throw new Exception("Nome de jogador nulo");

                jogador = value;
            }
        }

        public string NomePiece
        {
            get { return nomePiece; }
            set
            {
                if (value == null || value.Equals(""))
                    throw new Exception("Nome da Peça nulo");

                nomePiece = value;
            }
        }

        public int QtdMovimentos
        {
            get { return qtdMovimentos; }
            set
            {
                qtdMovimentos = value;
            }
        }
    }
}