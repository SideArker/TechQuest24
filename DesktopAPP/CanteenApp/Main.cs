using BarcodeScannerLib;
using GlobalHook;
using MySqlConnector;
using System.Diagnostics;
using Timer = System.Windows.Forms.Timer;

namespace CanteenApp
{
    public partial class Main : Form
    {

        BarcodeScanner barcodeScanner = new BarcodeScanner();

        public Main()
        {
            InitializeComponent();
            userDataScreen.Visible = false;
            HookManager.KeyDown += barcodeScanner.KeyDown;
            barcodeScanner.OnScanned += onBarcodeScan;
            //dateText.Text = DateTime.Now.ToString();
            //TimeText.Text = DateTime.Now.ToString("HH:mm:ss");

            //GetUser.Parameters.Add("@id", MySqlDbType.VarChar);

            //Lens.BringToFront();

            Timer timer = new Timer();
            timer.Tick += new EventHandler(TimerTick);
            timer.Interval = 1000;
            timer.Start();
        }

        void TimerTick(Object myObject, EventArgs myEventArgs)
        {
            //TimeText.Text = DateTime.Now.ToString("HH:mm:ss");
        }

        void onBarcodeScan(object sender, OnScanEventArgs e)
        {
            Console.WriteLine("In database");

            //MainPanel.Visible = false;

            //userDataPanel.Visible = true;
            userDataScreen.Visible = true;
            //try
            //{
            //    dbConnection.Open();
            //    GetUser.Parameters["@id"].Value = e.barcode;


            //    using (MySqlDataReader reader = GetUser.ExecuteReader())
            //    {
            //        if(reader.HasRows)
            //        {

            //        }
            //        else
            //        {
            //            MessageBox.Show("No user found");
            //        }

            //    }

            //}
            //catch (Exception ex)
            //{ MessageBox.Show(ex.Message); }



            //dbConnection.Close();
        }


        protected override void WndProc(ref Message message)
        {
            const int WM_SYSCOMMAND = 0x0112;
            const int SC_MOVE = 0xF010;

            switch (message.Msg)
            {
                case WM_SYSCOMMAND:
                    int command = message.WParam.ToInt32() & 0xfff0;
                    if (command == SC_MOVE)
                        return;
                    break;
            }

            base.WndProc(ref message);
        }

        private void ScanCodeText_Click(object sender, EventArgs e)
        {

        }
    }
}