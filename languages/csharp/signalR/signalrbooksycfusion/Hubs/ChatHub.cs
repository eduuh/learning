using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace signalrbooksycfusion.Hubs
{
    public class ChatHub: Hub<IChatClient>
    {
        public async Task MessageSender(string user, string message) {
            await Clients.All.MessageReceiver(user, message);
        }

    }
}