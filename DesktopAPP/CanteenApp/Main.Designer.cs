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
            this.Connection = new MySqlConnector.MySqlConnection();
            this.pictureBox1 = new System.Windows.Forms.PictureBox();
            this.label1 = new System.Windows.Forms.Label();
            this.pictureBox2 = new System.Windows.Forms.PictureBox();
            this.ZSTLogo = new System.Windows.Forms.PictureBox();
            this.Lens = new System.Windows.Forms.PictureBox();
            this.Text = new System.Windows.Forms.Label();
            this.MainPanel = new System.Windows.Forms.Panel();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox2)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.ZSTLogo)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.Lens)).BeginInit();
            this.MainPanel.SuspendLayout();
            this.SuspendLayout();
            // 
            // Connection
            // 
            this.Connection.ProvideClientCertificatesCallback = null;
            this.Connection.ProvidePasswordCallback = null;
            this.Connection.RemoteCertificateValidationCallback = null;
            // 
            // pictureBox1
            // 
            this.pictureBox1.Location = new System.Drawing.Point(0, 0);
            this.pictureBox1.Name = "pictureBox1";
            this.pictureBox1.Size = new System.Drawing.Size(100, 50);
            this.pictureBox1.TabIndex = 0;
            this.pictureBox1.TabStop = false;
            // 
            // label1
            // 
            this.label1.Location = new System.Drawing.Point(0, 0);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(100, 23);
            this.label1.TabIndex = 0;
            // 
            // pictureBox2
            // 
            this.pictureBox2.Location = new System.Drawing.Point(0, 0);
            this.pictureBox2.Name = "pictureBox2";
            this.pictureBox2.Size = new System.Drawing.Size(100, 50);
            this.pictureBox2.TabIndex = 0;
            this.pictureBox2.TabStop = false;
            // 
            // ZSTLogo
            // 
            this.ZSTLogo.Image = global::CanteenApp.Properties.Resources.ZST_logo_Nadruk_448x212;
            this.ZSTLogo.Location = new System.Drawing.Point(14, 10);
            this.ZSTLogo.Name = "ZSTLogo";
            this.ZSTLogo.Size = new System.Drawing.Size(175, 104);
            this.ZSTLogo.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.ZSTLogo.TabIndex = 0;
            this.ZSTLogo.TabStop = false;
            // 
            // Lens
            // 
            this.Lens.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Right)));
            this.Lens.Image = global::CanteenApp.Properties.Resources.lupa;
            this.Lens.Location = new System.Drawing.Point(683, 10);
            this.Lens.Name = "Lens";
            this.Lens.Size = new System.Drawing.Size(104, 104);
            this.Lens.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.Lens.TabIndex = 3;
            this.Lens.TabStop = false;
            // 
            // Text
            // 
            this.Text.Anchor = ((System.Windows.Forms.AnchorStyles)((((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Bottom) 
            | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.Text.Font = new System.Drawing.Font("Segoe UI Black", 20F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.Text.Location = new System.Drawing.Point(130, 146);
            this.Text.Name = "Text";
            this.Text.Size = new System.Drawing.Size(584, 226);
            this.Text.TabIndex = 2;
            this.Text.Text = "Zeskanuj kod kreskowy albo wyszukaj osobę ręcznie";
            this.Text.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // MainPanel
            // 
            this.MainPanel.Anchor = ((System.Windows.Forms.AnchorStyles)((((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Bottom) 
            | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.MainPanel.Controls.Add(this.ZSTLogo);
            this.MainPanel.Controls.Add(this.Text);
            this.MainPanel.Controls.Add(this.Lens);
            this.MainPanel.Location = new System.Drawing.Point(0, 0);
            this.MainPanel.Name = "MainPanel";
            this.MainPanel.Size = new System.Drawing.Size(800, 450);
            this.MainPanel.TabIndex = 4;
            this.MainPanel.Visible = false;
            // 
            // Main
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 20F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.AutoSize = true;
            this.BackColor = System.Drawing.Color.White;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.MainPanel);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.None;
            this.MaximizeBox = false;
            this.MinimizeBox = false;
            this.Name = "Main";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.WindowState = System.Windows.Forms.FormWindowState.Maximized;
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox2)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.ZSTLogo)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.Lens)).EndInit();
            this.MainPanel.ResumeLayout(false);
            this.ResumeLayout(false);

        }

        #endregion
        private MySqlConnector.MySqlConnection Connection;
        private PictureBox pictureBox1;
        private Label label1;
        private PictureBox pictureBox2;
        private PictureBox ZSTLogo;
        private PictureBox Lens;
        private Label Text;
        private Panel MainPanel;
    }
}