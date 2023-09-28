using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace CalculatorWorld
{
    public partial class MultiplicationTable : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void btnCalculate_Click(object sender, EventArgs e)
        {
            for (int i = Convert.ToInt32(startTxt.Text); i <= Convert.ToInt32(endTxt.Text); i++)
            {
                lblTable.Text += numberTxt.Text + " * " + i + " = " + (Convert.ToInt32(numberTxt.Text) * i) + "</br>";
            }
        }
    }
}