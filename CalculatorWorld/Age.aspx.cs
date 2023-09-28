using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace CalculatorWorld
{
    public partial class Age : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void btnCalculate_Click(object sender, EventArgs e)
        {
            int year = Convert.ToDateTime(todayDateTxt.Text).Year - Convert.ToDateTime(DOBTxt.Text).Year;
            int months = Convert.ToDateTime(todayDateTxt.Text).Month - Convert.ToDateTime(DOBTxt.Text).Month;
            int days = Convert.ToDateTime(todayDateTxt.Text).Day - Convert.ToDateTime(DOBTxt.Text).Day;
            int monthh = year * 12;

            lblAgeResult.Text = "Your Age Is: " + year.ToString() + " Years, " + months.ToString() + " Months, " + days.ToString() + " Days.";
        }
    }
}