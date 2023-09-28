using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace CalculatorWorld
{
    public partial class Temperature : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void btnCalculate_Click(object sender, EventArgs e)
        {
            if (fromDDL.SelectedItem.ToString() == "Fahrenheit" && toDDL.SelectedItem.ToString() == "Celsius")
            {
                double cls = (Convert.ToDouble(valueTxt.Text) - 32) * 5 / 9;
                lblResult.Text = valueTxt.Text + " Fahrenheit = " + Math.Round(cls, 4).ToString() + " Celsius ";
            }
            else if (fromDDL.SelectedItem.ToString() == "Celsius" && toDDL.SelectedItem.ToString() == "Fahrenheit")
            {
                double fhr = (Convert.ToDouble(valueTxt.Text) * 9 / 5) + 32;
                lblResult.Text = valueTxt.Text + " Celsius = " + Math.Round(fhr, 4).ToString() + " Fahrenheit ";
            }
            else
            {
                lblResult.Text = valueTxt.Text + " " + fromDDL.Text + " = " + valueTxt.Text + " " + toDDL.Text;
            }
        }
    }
}