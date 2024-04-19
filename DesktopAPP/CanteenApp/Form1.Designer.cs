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
            this.ZSTLogo = new System.Windows.Forms.PictureBox();
            ((System.ComponentModel.ISupportInitialize)(this.ZSTLogo)).BeginInit();
            this.SuspendLayout();
            // 
            // ZSTLogo
            // 
            this.ZSTLogo.Image = global::CanteenApp.Properties.Resources.ZST_logo_Nadruk_448x212;
            this.ZSTLogo.Location = new System.Drawing.Point(12, 12);
            this.ZSTLogo.Name = "ZSTLogo";
            this.ZSTLogo.Size = new System.Drawing.Size(132, 82);
            this.ZSTLogo.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.ZSTLogo.TabIndex = 0;
            this.ZSTLogo.TabStop = false;
            // 
            // Main
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 20F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.AutoSize = true;
            this.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(1)))), ((int)(((byte)(147)))), ((int)(((byte)(222)))));
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.ZSTLogo);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.None;
            this.MaximizeBox = false;
            this.MinimizeBox = false;
            this.Name = "Main";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "Canteen";
            this.WindowState = System.Windows.Forms.FormWindowState.Maximized;
            ((System.ComponentModel.ISupportInitialize)(this.ZSTLogo)).EndInit();
            this.ResumeLayout(false);

        }

        #endregion

        private PictureBox ZSTLogo;
    }
}