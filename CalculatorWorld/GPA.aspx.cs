using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace CalculatorWorld
{
    public partial class GPA : System.Web.UI.Page
    {
        DataTable dt = new DataTable();

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                dt.Columns.Add("Subject", typeof(string));
                dt.Columns.Add("Credit Hours", typeof(int));
                dt.Columns.Add("Grade", typeof(string));
                dt.Columns.Add("GPA", typeof(double));
                dt.Columns.Add("Quality Points", typeof(double));

                GridView1.DataSource = dt;
                GridView1.DataBind();

                ViewState["table"] = dt;
            }
        }

        protected void btnAdd_Click(object sender, EventArgs e)
        {
            dt = (DataTable)ViewState["table"];

            double points = Convert.ToDouble(creditTxt.Text) * Convert.ToDouble(gradeDDL.SelectedValue);
            dt.Rows.Add(subjectTxt.Text, creditTxt.Text, gradeDDL.SelectedItem.ToString(), Convert.ToDouble(gradeDDL.SelectedValue), points);

            ViewState["table"] = dt;
            GridView1.DataSource = dt;
            GridView1.DataBind();

            double creditHours = 0;
            double qualityPoints = 0;

            for (int i = 0; i < dt.Rows.Count; i++)
            {
                creditHours += Convert.ToInt32(dt.Rows[i]["Credit Hours"]);
                qualityPoints += Convert.ToDouble(dt.Rows[i]["Quality Points"]);
            }

            double gpa = qualityPoints / creditHours;
            lblTotalGPA.Text = "Your GPA Is: " + Math.Round(gpa, 2).ToString();
        }
    }
}