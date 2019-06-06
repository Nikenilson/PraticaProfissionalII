using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace Arce_Chess
{
    public class ChessHub : Hub
    {
        public void MovePiece(string xInicial, string yInical, int idAmizade, char color)
        {
            Clients.All.moverPiece(xInicial, yInical, idAmizade, color);
        }
    }
}