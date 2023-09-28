using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace CalculatorWorld
{
    public partial class Arithmetic : System.Web.UI.Page
    {
        static float a, c, answer;
        static char opt;

        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void btnOne_Click(object sender, EventArgs e)
        {
            if ((inputTxt.Text == "+") || (inputTxt.Text == "-") || (inputTxt.Text == "*") || (inputTxt.Text == "/"))
            {
                inputTxt.Text = "";
                inputTxt.Text = inputTxt.Text + "1";
            }
            else
            {
                inputTxt.Text = inputTxt.Text + "1";
            }
        }

        protected void btnTwo_Click(object sender, EventArgs e)
        {
            if ((inputTxt.Text == "+") || (inputTxt.Text == "-") || (inputTxt.Text == "*") || (inputTxt.Text == "/"))
            {
                inputTxt.Text = "";
                inputTxt.Text = inputTxt.Text + "2";
            }
            else
            {
                inputTxt.Text = inputTxt.Text + "2";
            }
        }

        protected void btnThree_Click(object sender, EventArgs e)
        {
            if ((inputTxt.Text == "+") || (inputTxt.Text == "-") || (inputTxt.Text == "*") || (inputTxt.Text == "/"))
            {
                inputTxt.Text = "";
                inputTxt.Text = inputTxt.Text + "3";
            }
            else
            {
                inputTxt.Text = inputTxt.Text + "3";
            }
        }

        protected void btnFour_Click(object sender, EventArgs e)
        {
            if ((inputTxt.Text == "+") || (inputTxt.Text == "-") || (inputTxt.Text == "*") || (inputTxt.Text == "/"))
            {
                inputTxt.Text = "";
                inputTxt.Text = inputTxt.Text + "4";
            }
            else
            {
                inputTxt.Text = inputTxt.Text + "4";
            }
        }

        protected void btnFive_Click(object sender, EventArgs e)
        {
            if ((inputTxt.Text == "+") || (inputTxt.Text == "-") || (inputTxt.Text == "*") || (inputTxt.Text == "/"))
            {
                inputTxt.Text = "";
                inputTxt.Text = inputTxt.Text + "5";
            }
            else
            {
                inputTxt.Text = inputTxt.Text + "5";
            }
        }

        protected void btnSix_Click(object sender, EventArgs e)
        {
            if ((inputTxt.Text == "+") || (inputTxt.Text == "-") || (inputTxt.Text == "*") || (inputTxt.Text == "/"))
            {
                inputTxt.Text = "";
                inputTxt.Text = inputTxt.Text + "6";
            }
            else
            {
                inputTxt.Text = inputTxt.Text + "6";
            }
        }

        protected void btnSeven_Click(object sender, EventArgs e)
        {
            if ((inputTxt.Text == "+") || (inputTxt.Text == "-") || (inputTxt.Text == "*") || (inputTxt.Text == "/"))
            {
                inputTxt.Text = "";
                inputTxt.Text = inputTxt.Text + "7";
            }
            else
            {
                inputTxt.Text = inputTxt.Text + "7";
            }
        }

        protected void btnEight_Click(object sender, EventArgs e)
        {
            if ((inputTxt.Text == "+") || (inputTxt.Text == "-") || (inputTxt.Text == "*") || (inputTxt.Text == "/"))
            {
                inputTxt.Text = "";
                inputTxt.Text = inputTxt.Text + "8";
            }
            else
            {
                inputTxt.Text = inputTxt.Text + "8";
            }
        }

        protected void btnNine_Click(object sender, EventArgs e)
        {
            if ((inputTxt.Text == "+") || (inputTxt.Text == "-") || (inputTxt.Text == "*") || (inputTxt.Text == "/"))
            {
                inputTxt.Text = "";
                inputTxt.Text = inputTxt.Text + "9";
            }
            else
            {
                inputTxt.Text = inputTxt.Text + "9";
            }
        }

        protected void btnZero_Click(object sender, EventArgs e)
        {
            if ((inputTxt.Text == "+") || (inputTxt.Text == "-") || (inputTxt.Text == "*") || (inputTxt.Text == "/"))
            {
                inputTxt.Text = "";
                inputTxt.Text = inputTxt.Text + "0";
            }
            else
            {
                inputTxt.Text = inputTxt.Text + "0";
            }
        }

        protected void btnPlus_Click(object sender, EventArgs e)
        {
            a = Convert.ToInt32(inputTxt.Text);
            lblInputLabel.Text = a.ToString();
            inputTxt.Text = "";
            opt = '+';
            inputTxt.Text += opt;
        }

        protected void btnMinus_Click(object sender, EventArgs e)
        {
            a = Convert.ToInt32(inputTxt.Text);
            lblInputLabel.Text = a.ToString();
            inputTxt.Text = "";
            opt = '-';
            inputTxt.Text += opt;
        }

        protected void btnMultiply_Click(object sender, EventArgs e)
        {
            a = Convert.ToInt32(inputTxt.Text);
            lblInputLabel.Text = a.ToString();
            inputTxt.Text = "";
            opt = '*';
            inputTxt.Text += opt;
        }

        protected void btnDivide_Click(object sender, EventArgs e)
        {
            a = Convert.ToInt32(inputTxt.Text);
            lblInputLabel.Text = a.ToString();
            inputTxt.Text = "";
            opt = '/';
            inputTxt.Text += opt;
        }

        protected void btnDelete_Click(object sender, EventArgs e)
        {
            if (inputTxt.Text != "")
            {
                inputTxt.Text = inputTxt.Text.Remove(inputTxt.Text.Length - 1, 1);
            }
        }

        protected void btnAC_Click(object sender, EventArgs e)
        {
            inputTxt.Text = "";
            lblInputLabel.Text = "";
        }

        protected void btnPoint_Click(object sender, EventArgs e)
        {
            if ((inputTxt.Text == "+") || (inputTxt.Text == "-") || (inputTxt.Text == "*") || (inputTxt.Text == "/"))
            {
                inputTxt.Text = "";
                inputTxt.Text = inputTxt.Text + ".";
            }
            else
            {
                inputTxt.Text = inputTxt.Text + ".";
            }
        }

        protected void btnEqual_Click(object sender, EventArgs e)
        {
            c = Convert.ToInt32(inputTxt.Text);
            inputTxt.Text = "";

            if (opt == '+')
            {
                answer = a + c;
                lblInputLabel.Text = a.ToString() + " + " + c.ToString();
                inputTxt.Text += answer;
                a = answer;
            }
            else if (opt == '-')
            {
                answer = a - c;
                lblInputLabel.Text = a.ToString() + " - " + c.ToString();
                inputTxt.Text += answer;
                a = answer;
            }
            else if (opt == '*')
            {
                answer = a * c;
                lblInputLabel.Text = a.ToString() + " * " + c.ToString();
                inputTxt.Text += answer;
                a = answer;
            }
            else if (opt == '/')
            {
                answer = a / c;
                lblInputLabel.Text = a.ToString() + " / " + c.ToString();
                inputTxt.Text += answer;
                a = answer;
            }
            else
            {
                answer = a * c;
                inputTxt.Text += answer;
                a = answer;
            }
        }
    }
}