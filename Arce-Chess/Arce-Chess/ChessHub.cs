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

        public void MovePiece(string namePiece, string pos, int idAmizade)
        {
            Clients.All.moverPiece(namePiece, pos, idAmizade);
        }
    }
}