namespace CanteenApp
{
    partial class Main
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.dbConnection = new MySqlConnector.MySqlConnection();
            this.GetUser = new MySqlConnector.MySqlCommand();
            this.AddUser = new MySqlConnector.MySqlCommand();
            this.GetUserData = new MySqlConnector.MySqlCommand();
            this.GetMeal = new MySqlConnector.MySqlCommand();
            this.label3 = new System.Windows.Forms.Label();
            this.ScanCodeText = new System.Windows.Forms.Label();
            this.ZSTLogo = new System.Windows.Forms.PictureBox();
            this.panel1 = new System.Windows.Forms.Panel();
            this.userDataScreen = new CanteenApp.UserDataScreen();
            ((System.ComponentModel.ISupportInitialize)(this.ZSTLogo)).BeginInit();
            this.panel1.SuspendLayout();
            this.SuspendLayout();
            // 
            // dbConnection
            // 
            this.dbConnection.ConnectionString = "server=localhost; uid=root; pwd=; database=icanteen";
            this.dbConnection.ProvideClientCertificatesCallback = null;
            this.dbConnection.ProvidePasswordCallback = null;
            this.dbConnection.RemoteCertificateValidationCallback = null;
            // 
            // GetUser
            // 
            this.GetUser.CommandText = "SELECT * FROM `consumers` WHERE `id` = @id;";
            this.GetUser.CommandTimeout = 0;
            this.GetUser.Connection = this.dbConnection;
            this.GetUser.Transaction = null;
            this.GetUser.UpdatedRowSource = System.Data.UpdateRowSource.None;
            // 
            // AddUser
            // 
            this.AddUser.CommandTimeout = 0;
            this.AddUser.Connection = this.dbConnection;
            this.AddUser.Transaction = null;
            this.AddUser.UpdatedRowSource = System.Data.UpdateRowSource.None;
            // 
            // GetUserData
            // 
            this.GetUserData.CommandTimeout = 0;
            this.GetUserData.Connection = this.dbConnection;
            this.GetUserData.Transaction = null;
            this.GetUserData.UpdatedRowSource = System.Data.UpdateRowSource.None;
            // 
            // GetMeal
            // 
            this.GetMeal.CommandTimeout = 0;
            this.GetMeal.Connection = this.dbConnection;
            this.GetMeal.Transaction = null;
            this.GetMeal.UpdatedRowSource = System.Data.UpdateRowSource.None;
            // 
            // label3
            // 
            this.label3.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(16)))), ((int)(((byte)(56)))), ((int)(((byte)(107)))));
            this.label3.Dock = System.Windows.Forms.DockStyle.Top;
            this.label3.Location = new System.Drawing.Point(0, 0);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(1902, 96);
            this.label3.TabIndex = 7;
            // 
            // ScanCodeText
            // 
            this.ScanCodeText.Anchor = ((System.Windows.Forms.AnchorStyles)((((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Bottom) 
            | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.ScanCodeText.Font = new System.Drawing.Font("Segoe UI Black", 60F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.ScanCodeText.Location = new System.Drawing.Point(262, 168);
            this.ScanCodeText.Name = "ScanCodeText";
            this.ScanCodeText.Size = new System.Drawing.Size(1455, 493);
            this.ScanCodeText.TabIndex = 8;
            this.ScanCodeText.Text = "Zeskanuj kod kreskowy albo wyszukaj osobę ręcznie";
            this.ScanCodeText.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            this.ScanCodeText.Click += new System.EventHandler(this.ScanCodeText_Click);
            // 
            // ZSTLogo
            // 
            this.ZSTLogo.Image = global::CanteenApp.Properties.Resources.ZST_logo_Nadruk_448x212;
            this.ZSTLogo.Location = new System.Drawing.Point(14, 15);
            this.ZSTLogo.Name = "ZSTLogo";
            this.ZSTLogo.Size = new System.Drawing.Size(289, 131);
            this.ZSTLogo.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.ZSTLogo.TabIndex = 1;
            this.ZSTLogo.TabStop = false;
            // 
            // panel1
            // 
            this.panel1.Controls.Add(this.userDataScreen);
            this.panel1.Controls.Add(this.ZSTLogo);
            this.panel1.Controls.Add(this.ScanCodeText);
            this.panel1.Location = new System.Drawing.Point(0, 100);
            this.panel1.Margin = new System.Windows.Forms.Padding(3, 4, 3, 4);
            this.panel1.Name = "panel1";
            this.panel1.Size = new System.Drawing.Size(1902, 934);
            this.panel1.TabIndex = 9;
            // 
            // userDataScreen
            // 
            this.userDataScreen.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.userDataScreen.Location = new System.Drawing.Point(3, 3);
            this.userDataScreen.Name = "userDataScreen";
            this.userDataScreen.Size = new System.Drawing.Size(1902, 928);
            this.userDataScreen.TabIndex = 9;
            // 
            // Main
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 20F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.AutoSize = true;
            this.BackColor = System.Drawing.Color.White;
            this.ClientSize = new System.Drawing.Size(1902, 1033);
            this.Controls.Add(this.panel1);
            this.Controls.Add(this.label3);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedSingle;
            this.MaximizeBox = false;
            this.Name = "Main";
            this.StartPosition = System.Windows.Forms.FormStartPosition.Manual;
            this.Text = "Stołówka";
            this.WindowState = System.Windows.Forms.FormWindowState.Maximized;
            ((System.ComponentModel.ISupportInitialize)(this.ZSTLogo)).EndInit();
            this.panel1.ResumeLayout(false);
            this.ResumeLayout(false);

        }

        #endregion

        private MySqlConnector.MySqlConnection dbConnection;
        private MySqlConnector.MySqlCommand GetUser;
        private MySqlConnector.MySqlCommand AddUser;
        private MySqlConnector.MySqlCommand GetUserData;
        private MySqlConnector.MySqlCommand GetMeal;
        private Label label3;
        private Label ScanCodeText;
        private PictureBox ZSTLogo;
        private Panel panel1;
        private UserDataScreen userDataScreen;
    }
}