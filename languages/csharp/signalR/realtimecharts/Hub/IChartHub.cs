using System.Threading.Tasks;

namespace realtimecharts.Hub
{
    public interface IChartHub
    {
        Task ValueReceiver(double chartValue);
    }
}