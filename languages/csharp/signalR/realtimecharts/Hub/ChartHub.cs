using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace realtimecharts.Hub
{
    public class ChartHub: Hub<IChartHub>
    {
        public async Task ValueSender(double chartvalue) {
            await Clients.All.ValueReceiver(chartvalue);
        }
    }
}