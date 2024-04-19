using BarcodeScannerLib;
using GlobalHook;

namespace CanteenApp
{
    public partial class Main : Form
    {

        BarcodeScanner barcodeScanner = new BarcodeScanner();

        public Main()
        {
            InitializeComponent();

            HookManager.KeyDown += barcodeScanner.KeyDown;
            barcodeScanner.OnScanned += onBarcodeScan;

        }
        void onBarcodeScan(object sender, OnScanEventArgs e)
        {
            MessageBox.Show(e.barcode);
        }

    }
}