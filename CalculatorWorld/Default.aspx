<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="CalculatorWorld.Default" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

    <section class="home-section my-3">
        <div class="container">
            <div class="row">
                <div class="col-md-6 d-flex justify-content-center flex-column lh-lg">
                    <h1>Calculator World</h1>
                    <h4>Your Maths Companion</h4>
                    <p>Want to do any calculation but don't know how to do it? Don't worry now you are at right place. You can use our Free and Simple interface website for your calculation with 100% accuracy.</p>
                </div>
                <div class="col-md-6">
                    <img src="https://images.unsplash.com/photo-1625225233840-695456021cde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FsY3VsYXRvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" class="img-fluid rounded-3" />
                </div>
            </div>
        </div>
    </section>
    <section class="browse-section my-3">
        <div class="container">
            <h3>Browse Calculators</h3>
            <hr />
            <div class="row">
                <div class="col-md-3">
                    <asp:Button CssClass="btn btn-dark my-3 p-3 container-fluid" ID="btnArithmetic" runat="server" Text="Arithmetic Calculator" OnClick="btnArithmetic_Click" />
                </div>
                <div class="col-md-3">
                    <asp:Button CssClass="btn btn-dark my-3 p-3 container-fluid" ID="btnAge" runat="server" Text="Age Calculator" OnClick="btnAge_Click" />
                </div>
                <div class="col-md-3">
                    <asp:Button CssClass="btn btn-dark my-3 p-3 container-fluid" ID="btnGPA" runat="server" Text="GPA Calculator" OnClick="btnGPA_Click" />
                </div>
                <div class="col-md-3">
                    <asp:Button CssClass="btn btn-dark my-3 p-3 container-fluid" ID="btnCGPA" runat="server" Text="CGPA Calculator" OnClick="btnCGPA_Click" />
                </div>
            </div>
            <div class="row">
                <div class="col-md-3">
                    <asp:Button CssClass="btn btn-dark my-3 p-3 container-fluid" ID="btnPercentage" runat="server" Text="Grade & Percentage Calculator" OnClick="btnPercentage_Click" />
                </div>
                <div class="col-md-3">
                    <asp:Button CssClass="btn btn-dark my-3 p-3 container-fluid" ID="btnTable" runat="server" Text="Multiplication Table Calculator" OnClick="btnTable_Click" />
                </div>
                <div class="col-md-3">
                    <asp:Button CssClass="btn btn-dark my-3 p-3 container-fluid" ID="btnTemperature" runat="server" Text="Temperature Calculator" OnClick="btnTemperature_Click" />
                </div>
            </div>
        </div>
    </section>

</asp:Content>
