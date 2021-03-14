using System.Threading.Tasks;

namespace signalrbooksycfusion.Hubs
{
    public interface IChatClient
    {
        Task MessageReceiver(string user, string message);
    }
}