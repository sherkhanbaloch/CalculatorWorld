using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace CalculatorWorld
{
    public partial class GradeAndPercentage : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void btnCalculate_Click(object sender, EventArgs e)
        {
            double obtMarks = Convert.ToSingle(obtainTxt.Text);
            double totalMarks = Convert.ToSingle(totalTxt.Text);

            // Percentage
            double percentage = obtMarks / totalMarks * 100;
            lblPercentage.Text = "Percentage: " + Math.Round(percentage, 2).ToString() + "%";

            // Grades
            if (percentage >= 90)
            {
                lblGrade.Text = "Grade: " + "A+";
            }
            else if (percentage >= 85 && percentage <= 89)
            {
                lblGrade.Text = "Grade: " + "A";
            }
            else if (percentage >= 80 && percentage <= 84)
            {
                lblGrade.Text = "Grade: " + "A-";
            }
            else if (percentage >= 75 && percentage <= 79)
            {
                lblGrade.Text = "Grade: " + "B+";
            }
            else if (percentage >= 70 && percentage <= 74)
            {
                lblGrade.Text = "Grade: " + "B";
            }
            else if (percentage >= 66 && percentage <= 69)
            {
                lblGrade.Text = "Grade: " + "B-";
            }
            else if (percentage >= 63 && percentage <= 65)
            {
                lblGrade.Text = "Grade: " + "C+";
            }
            else if (percentage >= 60 && percentage <= 62)
            {
                lblGrade.Text = "Grade: " + "C";
            }
            else if (percentage >= 55 && percentage <= 59)
            {
                lblGrade.Text = "Grade: " + "C-";
            }
            else
            {
                lblGrade.Text = "Grade: " + "F";
            }

            // Result
            if (percentage >= 55)
            {
                lblResult.Text = "Result: " + "Pass";
            }
            else
            {
                lblResult.Text = "Result: " + "Fail";
            }
        }
    }
}
