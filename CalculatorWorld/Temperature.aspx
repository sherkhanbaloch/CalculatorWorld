<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.Master" AutoEventWireup="true" CodeBehind="Temperature.aspx.cs" Inherits="CalculatorWorld.Temperature" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="container my-3">
        <h3>Temperature Calculator</h3>
        <hr />
        <div class="row">
            <div class="col-md-3 col-sm-11 mb-3">
                <asp:Label CssClass="form-label" Text="From" runat="server" />
                <asp:DropDownList ID="fromDDL" CssClass="form-control" runat="server">
                    <asp:ListItem>Celsius</asp:ListItem>
                    <asp:ListItem>Fahrenheit</asp:ListItem>
                </asp:DropDownList>
            </div>
            <div class="col-md-3 col-sm-11 mb-3">
                <asp:Label CssClass="form-label" Text="To" runat="server" />
                <asp:DropDownList ID="toDDL" CssClass="form-control" runat="server">
                    <asp:ListItem>Celsius</asp:ListItem>
                    <asp:ListItem>Fahrenheit</asp:ListItem>
                </asp:DropDownList>
            </div>
            <div class="col-md-3 col-sm-11 mb-3">
                <asp:Label CssClass="form-label" Text="Value" runat="server" />
                <asp:TextBox ID="valueTxt" CssClass="form-control" runat="server"></asp:TextBox>
            </div>
            <div class="col-md-3 col-sm-11 mb-3">
                <br />
                <asp:Button Text="Calculate" CssClass="btn btn-dark" runat="server" ID="btnCalculate" OnClick="btnCalculate_Click" />
            </div>
        </div>
        <div class="row">
            <asp:Label CssClass="form-label fs-4" Text="Result: " ID="lblResult" runat="server" />
        </div>
    </div>
</asp:Content>
