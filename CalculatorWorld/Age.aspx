<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.Master" AutoEventWireup="true" CodeBehind="Age.aspx.cs" Inherits="CalculatorWorld.Age" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="container my-3">
        <h3>Age Calculator</h3>
        <hr />
        <div class="row">
            <div class="col-md-3 col-sm-11 mb-3">
                <asp:Label CssClass="form-label" Text="Date of Birth" runat="server" />
                <asp:TextBox runat="server" ID="DOBTxt" CssClass="form-control" TextMode="Date" />
            </div>
            <div class="col-md-3 col-sm-11 mb-3">
                <asp:Label CssClass="form-label" Text="Age at The Date of" runat="server" />
                <asp:TextBox runat="server" ID="todayDateTxt" CssClass="form-control" TextMode="Date" />
            </div>

            <div class="col-md-3 col-sm-11 mb-3">
                <br />
                <asp:Button Text="Calculate Age" CssClass="btn btn-dark" runat="server" ID="btnCalculate" OnClick="btnCalculate_Click" />
            </div>
        </div>
        <div class="row">
            <asp:Label CssClass="form-label fs-4" Text="Your Age Is: " ID="lblAgeResult" runat="server" />
        </div>
    </div>
</asp:Content>
