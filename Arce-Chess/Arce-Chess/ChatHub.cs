using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace Arce_Chess
{
    public class ChatHub : Hub
    {
        public void Send(string name, string message, int idchat)
        { 
            Clients.All.addNewMessageToPage(name, message, idchat);
        }
    }
}