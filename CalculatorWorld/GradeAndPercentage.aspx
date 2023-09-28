<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.Master" AutoEventWireup="true" CodeBehind="GradeAndPercentage.aspx.cs" Inherits="CalculatorWorld.GradeAndPercentage" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="container my-3">
        <h3>Percentage & Grade Calculator</h3>
        <hr />
        <div class="row">
            <div class="col-md-3 col-sm-11 mb-3">
                <asp:Label CssClass="form-label" Text="Obtained Marks" runat="server" />
                <asp:TextBox runat="server" ID="obtainTxt" CssClass="form-control" />
            </div>
            <div class="col-md-3 col-sm-11 mb-3">
                <asp:Label CssClass="form-label" Text="Total Marks" runat="server" />
                <asp:TextBox runat="server" ID="totalTxt" CssClass="form-control" />
            </div>

            <div class="col-md-3 col-sm-11 mb-3">
                <br />
                <asp:Button Text="Calculate" CssClass="btn btn-dark" runat="server" ID="btnCalculate" OnClick="btnCalculate_Click" />
            </div>
        </div>
        <div class="row">
            <asp:Label CssClass="form-label fs-4" Text="Percentage: " ID="lblPercentage" runat="server" />
            <br />
            <asp:Label CssClass="form-label fs-4" Text="Grade: " ID="lblGrade" runat="server" />
            <br />
            <asp:Label CssClass="form-label fs-4" Text="Result: " ID="lblResult" runat="server" />
        </div>
    </div>
</asp:Content>
