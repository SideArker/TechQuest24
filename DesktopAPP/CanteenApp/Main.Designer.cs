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
            this.ScanCodeText = new System.Windows.Forms.Label();
            this.ZSTLogo = new System.Windows.Forms.PictureBox();
            this.MainScreenPanel = new System.Windows.Forms.Panel();
            this.errorLabel = new System.Windows.Forms.Label();
            this.userDataScreen = new CanteenApp.UserDataScreen();
            this.GetMeal = new MySqlConnector.MySqlCommand();
            this.GetUserData = new MySqlConnector.MySqlCommand();
            this.label1 = new System.Windows.Forms.Label();
            this.HomeIcon = new System.Windows.Forms.PictureBox();
            this.SearchIcon = new System.Windows.Forms.PictureBox();
            this.searchBar = new CanteenApp.SearchBar();
            ((System.ComponentModel.ISupportInitialize)(this.ZSTLogo)).BeginInit();
            this.MainScreenPanel.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.HomeIcon)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.SearchIcon)).BeginInit();
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
            // ScanCodeText
            // 
            this.ScanCodeText.Anchor = ((System.Windows.Forms.AnchorStyles)((((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Bottom) 
            | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.ScanCodeText.Font = new System.Drawing.Font("Segoe UI Black", 60F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.ScanCodeText.Location = new System.Drawing.Point(226, 182);
            this.ScanCodeText.Name = "ScanCodeText";
            this.ScanCodeText.Size = new System.Drawing.Size(1484, 493);
            this.ScanCodeText.TabIndex = 8;
            this.ScanCodeText.Text = "Zeskanuj kod kreskowy albo wyszukaj osobę ręcznie";
            this.ScanCodeText.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
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
            // MainScreenPanel
            // 
            this.MainScreenPanel.Controls.Add(this.errorLabel);
            this.MainScreenPanel.Controls.Add(this.ZSTLogo);
            this.MainScreenPanel.Controls.Add(this.ScanCodeText);
            this.MainScreenPanel.Location = new System.Drawing.Point(0, 70);
            this.MainScreenPanel.Margin = new System.Windows.Forms.Padding(3, 4, 3, 4);
            this.MainScreenPanel.Name = "MainScreenPanel";
            this.MainScreenPanel.Size = new System.Drawing.Size(1902, 934);
            this.MainScreenPanel.TabIndex = 9;
            // 
            // errorLabel
            // 
            this.errorLabel.Anchor = System.Windows.Forms.AnchorStyles.Bottom;
            this.errorLabel.AutoSize = true;
            this.errorLabel.BackColor = System.Drawing.Color.White;
            this.errorLabel.Font = new System.Drawing.Font("Segoe UI", 25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.errorLabel.ForeColor = System.Drawing.Color.Red;
            this.errorLabel.Location = new System.Drawing.Point(470, 685);
            this.errorLabel.Name = "errorLabel";
            this.errorLabel.Size = new System.Drawing.Size(1069, 57);
            this.errorLabel.TabIndex = 10;
            this.errorLabel.Text = "Nie znaleziono żadnej osoby o podanym identyfikatorze";
            this.errorLabel.Visible = false;
            // 
            // userDataScreen
            // 
            this.userDataScreen.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.userDataScreen.Location = new System.Drawing.Point(0, 70);
            this.userDataScreen.Name = "userDataScreen";
            this.userDataScreen.Size = new System.Drawing.Size(1902, 928);
            this.userDataScreen.TabIndex = 9;
            // 
            // GetMeal
            // 
            this.GetMeal.CommandText = "SELECT `days` FROM `meals` WHERE `id` = @id;";
            this.GetMeal.CommandTimeout = 0;
            this.GetMeal.Connection = this.dbConnection;
            this.GetMeal.Transaction = null;
            this.GetMeal.UpdatedRowSource = System.Data.UpdateRowSource.None;
            // 
            // GetUserData
            // 
            this.GetUserData.CommandText = "SELECT consumers.name, consumers.surname, consumers.class, consumers.isTeacher, m" +
    "eals.days FROM `consumers`, `meals` WHERE consumers.id = 90000595 AND consumers." +
    "id = meals.id;";
            this.GetUserData.CommandTimeout = 0;
            this.GetUserData.Connection = this.dbConnection;
            this.GetUserData.Transaction = null;
            this.GetUserData.UpdatedRowSource = System.Data.UpdateRowSource.None;
            // 
            // label1
            // 
            this.label1.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(16)))), ((int)(((byte)(56)))), ((int)(((byte)(107)))));
            this.label1.Dock = System.Windows.Forms.DockStyle.Top;
            this.label1.Location = new System.Drawing.Point(0, 0);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(1902, 68);
            this.label1.TabIndex = 10;
            // 
            // HomeIcon
            // 
            this.HomeIcon.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(16)))), ((int)(((byte)(56)))), ((int)(((byte)(107)))));
            this.HomeIcon.Image = global::CanteenApp.Properties.Resources.home;
            this.HomeIcon.Location = new System.Drawing.Point(12, 4);
            this.HomeIcon.Name = "HomeIcon";
            this.HomeIcon.Size = new System.Drawing.Size(70, 60);
            this.HomeIcon.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.HomeIcon.TabIndex = 11;
            this.HomeIcon.TabStop = false;
            this.HomeIcon.Click += new System.EventHandler(this.HomeIcon_Click);
            // 
            // SearchIcon
            // 
            this.SearchIcon.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(16)))), ((int)(((byte)(56)))), ((int)(((byte)(107)))));
            this.SearchIcon.Image = global::CanteenApp.Properties.Resources.search;
            this.SearchIcon.Location = new System.Drawing.Point(102, 4);
            this.SearchIcon.Name = "SearchIcon";
            this.SearchIcon.Size = new System.Drawing.Size(70, 60);
            this.SearchIcon.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.SearchIcon.TabIndex = 12;
            this.SearchIcon.TabStop = false;
            this.SearchIcon.Click += new System.EventHandler(this.SearchIcon_Click);
            // 
            // searchBar
            // 
            this.searchBar.AutoSize = true;
            this.searchBar.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(16)))), ((int)(((byte)(56)))), ((int)(((byte)(107)))));
            this.searchBar.Location = new System.Drawing.Point(433, 345);
            this.searchBar.Name = "searchBar";
            this.searchBar.Size = new System.Drawing.Size(1144, 302);
            this.searchBar.TabIndex = 11;
            this.searchBar.Visible = false;
            // 
            // Main
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 20F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.AutoSize = true;
            this.BackColor = System.Drawing.Color.White;
            this.ClientSize = new System.Drawing.Size(1902, 1033);
            this.Controls.Add(this.SearchIcon);
            this.Controls.Add(this.HomeIcon);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.MainScreenPanel);
            this.Controls.Add(this.userDataScreen);
            this.Controls.Add(this.searchBar);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedSingle;
            this.MaximizeBox = false;
            this.Name = "Main";
            this.StartPosition = System.Windows.Forms.FormStartPosition.Manual;
            this.Text = "Stołówka";
            this.WindowState = System.Windows.Forms.FormWindowState.Maximized;
            ((System.ComponentModel.ISupportInitialize)(this.ZSTLogo)).EndInit();
            this.MainScreenPanel.ResumeLayout(false);
            this.MainScreenPanel.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.HomeIcon)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.SearchIcon)).EndInit();
            this.ResumeLayout(false);

        }

        #endregion

        private MySqlConnector.MySqlConnection dbConnection;
        private MySqlConnector.MySqlCommand GetUser;
        private MySqlConnector.MySqlCommand AddUser;
        private Label ScanCodeText;
        private PictureBox ZSTLogo;
        private UserDataScreen userDataScreen;
        public Panel MainScreenPanel;
        private MySqlConnector.MySqlCommand GetMeal;
        private MySqlConnector.MySqlCommand GetUserData;
        private Label label1;
        private PictureBox HomeIcon;
        private PictureBox SearchIcon;
        private Label errorLabel;
        private SearchBar searchBar;
    }
}