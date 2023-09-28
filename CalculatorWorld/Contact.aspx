<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.Master" AutoEventWireup="true" CodeBehind="Contact.aspx.cs" Inherits="CalculatorWorld.Contact" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

    <div class="container my-3">
        <h3>Contact Us</h3>
        <hr />
        <div class="row mx-auto">
            <div class="row g-3">
                <div class="col-md-6">
                    <asp:Label CssClass="form-label" Text="Full Name" runat="server" />
                    <asp:TextBox runat="server" ID="nameTxt" class="form-control" />
                </div>
                <div class="col-md-6">
                    <asp:Label CssClass="form-label" Text="Email" runat="server" />
                    <asp:TextBox runat="server" ID="emailTxt" class="form-control" />
                </div>
                <div class="col-12">
                    <asp:Label CssClass="form-label" Text="Message" runat="server" />
                    <asp:TextBox runat="server" ID="messageTxt" class="form-control" Height="100" />
                </div>
                <div class="col-12">
                    <asp:Button Text="Send Message" CssClass="btn btn-dark" runat="server" ID="btnSend" />
                </div>
            </div>
        </div>
    </div>
</asp:Content>
