<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.Master" AutoEventWireup="true" CodeBehind="CGPA.aspx.cs" Inherits="CalculatorWorld.CGPA" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="container my-3">
        <h3>CGPA Calculator</h3>
        <hr />
        <div class="row">
            <div class="col-md-3 col-sm-11 mb-3">
                <asp:Label CssClass="form-label" Text="Semester" runat="server" />
                <asp:TextBox runat="server" ID="semesterTxt" CssClass="form-control" />
            </div>
            <div class="col-md-3 col-sm-11 mb-3">
                <asp:Label CssClass="form-label" Text="Credit Hours" runat="server" />
                <asp:TextBox runat="server" ID="creditTxt" CssClass="form-control" />
            </div>
            <div class="col-md-3 col-sm-11 mb-3">
                <asp:Label CssClass="form-label" Text="GPA" runat="server" />
                <asp:TextBox runat="server" ID="GPATxt" CssClass="form-control" />
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
            <asp:Label CssClass="form-label fs-4" Text="Your CGPA Is: " ID="lblTotalCGPA" runat="server" />
        </div>
    </div>
</asp:Content>
