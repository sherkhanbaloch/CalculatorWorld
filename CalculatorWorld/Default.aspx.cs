using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace CalculatorWorld
{
    public partial class Default : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void btnArithmetic_Click(object sender, EventArgs e)
        {
            Response.Redirect("Arithmetic.aspx");
        }

        protected void btnAge_Click(object sender, EventArgs e)
        {
            Response.Redirect("Age.aspx");
        }

        protected void btnDate_Click(object sender, EventArgs e)
        {

        }

        protected void btnGPA_Click(object sender, EventArgs e)
        {
            Response.Redirect("GPA.aspx");
        }

        protected void btnCGPA_Click(object sender, EventArgs e)
        {
            Response.Redirect("CGPA.aspx");
        }

        protected void btnPercentage_Click(object sender, EventArgs e)
        {
            Response.Redirect("GradeAndPercentage.aspx");
        }

        protected void btnTable_Click(object sender, EventArgs e)
        {
            Response.Redirect("MultiplicationTable.aspx");
        }

        protected void btnTemperature_Click(object sender, EventArgs e)
        {
            Response.Redirect("Temperature.aspx");
        }
    }
}