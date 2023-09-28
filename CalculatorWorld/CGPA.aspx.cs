using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace CalculatorWorld
{
    public partial class CGPA : System.Web.UI.Page
    {
        DataTable dt = new DataTable();

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                dt.Columns.Add("Semester", typeof(string));
                dt.Columns.Add("Credit Hours", typeof(int));
                dt.Columns.Add("GPA", typeof(double));
                dt.Columns.Add("Weight/Average GPA", typeof(double));

                GridView1.DataSource = dt;
                GridView1.DataBind();

                ViewState["table"] = dt;
            }
        }

        protected void btnAdd_Click(object sender, EventArgs e)
        {
            dt = (DataTable)ViewState["table"];

            double weight = Convert.ToDouble(creditTxt.Text) * Convert.ToDouble(GPATxt.Text);
            dt.Rows.Add(semesterTxt.Text, creditTxt.Text, GPATxt.Text, weight);

            ViewState["table"] = dt;
            GridView1.DataSource = dt;
            GridView1.DataBind();

            double creditHours = 0;
            double averageGPA = 0;

            for (int i = 0; i < dt.Rows.Count; i++)
            {
                creditHours += Convert.ToInt32(dt.Rows[i]["Credit Hours"]);
                averageGPA += Convert.ToDouble(dt.Rows[i]["Weight/Average GPA"]);
            }

            double cgpa = averageGPA / creditHours;
            lblTotalCGPA.Text = "Your CGPA Is: " + Math.Round(cgpa, 2).ToString();
        }
    }
}
