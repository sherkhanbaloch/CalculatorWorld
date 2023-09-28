<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.Master" AutoEventWireup="true" CodeBehind="MultiplicationTable.aspx.cs" Inherits="CalculatorWorld.MultiplicationTable" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="container my-3">
        <h3>Multiplication Table Calculator</h3>
        <hr />
        <div class="row">
            <div class="col-md-3 col-sm-11 mb-3">
                <asp:Label CssClass="form-label" Text="Table of Number" runat="server" />
                <asp:TextBox runat="server" ID="numberTxt" CssClass="form-control" />
            </div>
            <div class="col-md-3 col-sm-11 mb-3">
                <asp:Label CssClass="form-label" Text="Starts From" runat="server" />
                <asp:TextBox runat="server" ID="startTxt" CssClass="form-control" />
            </div>
            <div class="col-md-3 col-sm-11 mb-3">
                <asp:Label CssClass="form-label" Text="Ends To" runat="server" />
                <asp:TextBox runat="server" ID="endTxt" CssClass="form-control" />
            </div>
            <div class="col-md-3 col-sm-11 mb-3">
                <br />
                <asp:Button Text="Calculate" CssClass="btn btn-dark" runat="server" ID="btnCalculate" OnClick="btnCalculate_Click" />
            </div>
        </div>
        <div class="row">
            <asp:Label CssClass="form-label fs-4" Text="" ID="lblTable" runat="server" />
        </div>
    </div>
</asp:Content>
