using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Arce_Chess.Models
{
    public class Coordenada
    {
        private int posX;
        private int posY;

        public Coordenada(int pposX, int pposY)
        {
            this.PosX = pposX;
            this.PosY = pposY;
        }

        public override string ToString()
        {
            return "(" + this.PosX + "," + this.PosY + ")";
        }

        public static string getStringCoordenada(int x, int y)
        {
            return "(" + x + "," + y + ")";
        }

        public int PosX
        {
            get { return posX; }
            set
            {
                posX = value;
            }
        }

        public int PosY
        {
            get { return posY; }
            set
            {
                posY = value;
            }
        }
    }
}