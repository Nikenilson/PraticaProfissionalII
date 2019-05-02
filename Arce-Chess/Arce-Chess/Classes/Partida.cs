using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Arce_Chess.Classes
{
    public class Partida
    { 
        private int codPartida;
        private string jogador1;
        private string jogador2;

        public Partida(int codPartida, string jogador1, string jogador2)
        {
            this.CodPartida = codPartida;
            this.Jogador1 = jogador1;
            this.Jogador2 = jogador2;
        }

        public string Jogador1
        {
            get { return jogador1; }
            set
            {
                if (string.IsNullOrEmpty(value))
                    throw new Exception("Parametro nulo!!");

                jogador1 = value;
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

        public string Jogador2
        {
            get { return jogador2; }
            set
            {
                if (string.IsNullOrEmpty(value))
                    throw new Exception("Parametro nulo!!");

                jogador2 = value;
            }
        }
    }
}
