using MySqlConnector;
using System.Data;
using Timer = System.Windows.Forms.Timer;
namespace CanteenApp
{
    public partial class UserDataScreen : UserControl
    {
        public UserDataScreen()
        {
            InitializeComponent();
            dateText.Text = DateTime.Now.ToString();
            TimeText.Text = DateTime.Now.ToString("HH:mm:ss");

            Timer timer = new Timer();
            timer.Tick += new EventHandler(TimerTick);
            timer.Interval = 1000;
            timer.Start();

        }

        void TimerTick(Object myObject, EventArgs myEventArgs)
        {
            TimeText.Text = DateTime.Now.ToString("HH:mm:ss");
        }

    }
}
