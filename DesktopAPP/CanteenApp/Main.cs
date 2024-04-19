using BarcodeScannerLib;
using GlobalHook;
using MySqlConnector;
using Newtonsoft.Json;

namespace CanteenApp
{

    public partial class Main : Form
    {

        BarcodeScanner barcodeScanner = new BarcodeScanner();

        string searchBarText = "";
        int index = 0;

        public Main()
        {
            InitializeComponent();
            userDataScreen.Hide();
            HookManager.KeyDown += barcodeScanner.KeyDown;
            barcodeScanner.OnScanned += onBarcodeScan;
            GetUser.Parameters.Add("@id", MySqlDbType.VarChar);
            GetUserData.Parameters.Add("@id", MySqlDbType.VarChar);
            GetMeal.Parameters.Add("@id", MySqlDbType.VarChar);
            searchBar.SearchBox.TextChanged += new EventHandler(OnTextChange);
            searchBar.BringToFront();
        }



        void onBarcodeScan(object sender, OnScanEventArgs e)
        {

            if (InvokeRequired)
            {
                Invoke(new Action(() => onBarcodeScan(sender, e)));
                return;
            }


            try
            {
                dbConnection.Open();
                GetUser.Parameters["@id"].Value = e.barcode;


                using (MySqlDataReader reader = GetUser.ExecuteReader())
                {
                    if (reader.HasRows)
                    {
                        userDataScreen.Visible = true;
                        MainScreenPanel.Visible = false;

                        if (searchBar.Visible)
                        {
                            searchBar.Visible = false;
                            searchBar.ResetText();
                        }
                    }
                    else
                    {
                        errorLabel.Visible = true;
                    }
                    reader.Close();
                }


            }
            catch (Exception ex)
            { MessageBox.Show(ex.Message); }
            finally
            {
                dbConnection.Close();
            }

            // Updating values
            try
            {
                dbConnection.Open();
                GetUserData.Parameters["@id"].Value = e.barcode;

                using (MySqlDataReader reader = GetUserData.ExecuteReader())
                {
                    if (reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            userDataScreen.PersonCode.Text = e.barcode;
                            userDataScreen.PersonName.Text = (string)reader.GetValue(0);
                            userDataScreen.Surname.Text = (string)reader.GetValue(1);
                            userDataScreen.Class.Text = (string)reader.GetValue(2);
                            userDataScreen.Role.Text = (bool)reader.GetValue(3) == true ? "Nauczyciel" : "Uczeñ";
                        }
                    }


                    reader.Close();
                }

            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
            finally
            {
                dbConnection.Close();
            }

            // changing dinner state
            try
            {
                dbConnection.Open();
                GetMeal.Parameters["@id"].Value = e.barcode;

                using (MySqlDataReader reader = GetMeal.ExecuteReader())
                {
                    if (reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            string json = (string)reader.GetValue(0);

                            DaysSchema schema = JsonConvert.DeserializeObject<DaysSchema>(json);

                            if (schema != null)
                            {
                                int currentDay = DateTime.Now.Day;
                                int currentMonth = DateTime.Now.Month;

                                var currentSchemaDay = schema.Days.Find(x => x.Day == currentDay && x.Month == currentMonth);

                                DayInfo dayInfo = currentSchemaDay as DayInfo;

                                if (dayInfo != null)
                                {
                                    if (dayInfo.IsGiven)
                                    {
                                        userDataScreen.DinnerStatus.Text = "WYDANY";
                                        userDataScreen.DinnerStatus.ForeColor = Color.Orange;

                                    }
                                    else
                                    {
                                        userDataScreen.DinnerStatus.Text = "POSIADANY";
                                        userDataScreen.DinnerStatus.ForeColor = Color.Green;
                                    }
                                }
                                else
                                {
                                    userDataScreen.DinnerStatus.Text = "NIE KUPIONY";
                                    userDataScreen.DinnerStatus.ForeColor = Color.Red;
                                }

                            }
                        }
                    }
                    else
                    {
                        userDataScreen.DinnerStatus.Text = "NIE KUPIONY";
                        userDataScreen.DinnerStatus.ForeColor = Color.Red;
                    }


                    reader.Close();
                }

            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
            finally
            {
                dbConnection.Close();
            }


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


        private void SearchIcon_Click(object sender, EventArgs e)
        {
            searchBar.Visible = !searchBar.Visible;
            searchBar.SearchBox.Select();
        }

        private void HomeIcon_Click(object sender, EventArgs e)
        {
            userDataScreen.Visible = false;
            searchBar.Visible = false;
            MainScreenPanel.Visible = true;
            errorLabel.Visible = false;
        }

        void OnTextChange(object sender, EventArgs e)
        {
            if (searchBar.SearchBox.Text.Length >= 8)
            {
                onBarcodeScan(null, new OnScanEventArgs(searchBar.SearchBox.Text));
            }
        }
    }
}