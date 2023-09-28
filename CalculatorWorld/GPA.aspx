<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.Master" AutoEventWireup="true" CodeBehind="GPA.aspx.cs" Inherits="CalculatorWorld.GPA" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="container my-3">
        <h3>GPA Calculator</h3>
        <hr />
        <div class="row">
            <div class="col-md-3 col-sm-11 mb-3">
                <asp:Label CssClass="form-label" Text="Subject" runat="server" />
                <asp:TextBox runat="server" ID="subjectTxt" class="form-control" />
            </div>
            <div class="col-md-3 col-sm-11 mb-3">
                <asp:Label CssClass="form-label" Text="Credit Hours" runat="server" />
                <asp:TextBox runat="server" ID="creditTxt" class="form-control" />
            </div>
            <div class="col-md-3 col-sm-11 mb-3">
                <asp:Label CssClass="form-label" Text="Grade" runat="server" />
                <asp:DropDownList CssClass="form-control" ID="gradeDDL" runat="server">
                    <asp:ListItem Text="Select Grade" Value="0"></asp:ListItem>
                    <asp:ListItem Text="A+" Value="4"></asp:ListItem>
                    <asp:ListItem Text="A" Value="3.75"></asp:ListItem>
                    <asp:ListItem Text="A-" Value="3.5"></asp:ListItem>
                    <asp:ListItem Text="B+" Value="3.25"></asp:ListItem>
                    <asp:ListItem Text="B" Value="3"></asp:ListItem>
                    <asp:ListItem Text="B-" Value="2.75"></asp:ListItem>
                    <asp:ListItem Text="C+" Value="2.5"></asp:ListItem>
                    <asp:ListItem Text="C" Value="2"></asp:ListItem>
                    <asp:ListItem Text="C-" Value="1.5"></asp:ListItem>
                    <asp:ListItem Text="F" Value="0"></asp:ListItem>
                </asp:DropDownList>
            </div>
            <div class="col-md-3 col-sm-11 mb-3">
                <br />
                <asp:Button Text="Add To List" CssClass="btn btn-dark" runat="server" ID="btnAdd" OnClick="btnAdd_Click" />
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 my-3 mx-auto">
                <asp:DataGrid ID="GridView1" runat="server" CssClass="table table-striped"></asp:DataGrid>
            </div>
        </div>
        <div class="row">
            <asp:Label CssClass="form-label fs-4" Text="Your GPA Is: " ID="lblTotalGPA" runat="server" />
        </div>
    </div>
</asp:Content>
