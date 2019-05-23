using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace Arce_Chess
{
    public class ChatHubcs : Hub
    {
        public void Hello()
        {
            Clients.All.hello();
        }
    }
}