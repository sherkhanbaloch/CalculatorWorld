<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.Master" AutoEventWireup="true" CodeBehind="Arithmetic.aspx.cs" Inherits="CalculatorWorld.Arithmetic" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="container my-3">
        <h3>Arithmetic Calculator</h3>
        <hr />
        <div class="w-50 mx-auto">
            <div class="row my-2">
                <div class="col-md-12">
                    <asp:Label Text="0" runat="server" ID="lblInputLabel" CssClass="text-center" />
                    <asp:TextBox ID="inputTxt" runat="server" class="form-control"></asp:TextBox>
                </div>
            </div>
            <div class="row my-2">
                <div class="col-md-12 d-flex justify-content-between">
                    <asp:Button CssClass="mx-2 btn btn-dark container-fluid" ID="btnAC" runat="server" Text="AC" OnClick="btnAC_Click" />
                    <asp:Button CssClass="mx-2 btn btn-dark container-fluid" ID="btnDelete" runat="server" Text="Del" OnClick="btnDelete_Click" />
                    <asp:Button CssClass="mx-2 btn btn-dark container-fluid" ID="btnPlusMinus" runat="server" Text="+/-" />
                    <asp:Button CssClass="mx-2 btn btn-dark container-fluid" ID="btnDivide" runat="server" Text="/" OnClick="btnDivide_Click" />
                </div>
            </div>
            <div class="row my-2">
                <div class="col-md-12 d-flex justify-content-between">
                    <asp:Button CssClass="mx-2 btn btn-dark container-fluid" ID="btnSeven" runat="server" Text="7" OnClick="btnSeven_Click" />
                    <asp:Button CssClass="mx-2 btn btn-dark container-fluid" ID="btnEight" runat="server" Text="8" OnClick="btnEight_Click" />
                    <asp:Button CssClass="mx-2 btn btn-dark container-fluid" ID="btnNine" runat="server" Text="9" OnClick="btnNine_Click" />
                    <asp:Button CssClass="mx-2 btn btn-dark container-fluid" ID="btnMultiply" runat="server" Text="X" OnClick="btnMultiply_Click" />
                </div>
            </div>
            <div class="row my-2">
                <div class="col-md-12 d-flex justify-content-between">
                    <asp:Button CssClass="mx-2 btn btn-dark container-fluid" ID="btnFour" runat="server" Text="4" OnClick="btnFour_Click" />
                    <asp:Button CssClass="mx-2 btn btn-dark container-fluid" ID="btnFive" runat="server" Text="5" OnClick="btnFive_Click" />
                    <asp:Button CssClass="mx-2 btn btn-dark container-fluid" ID="btnSix" runat="server" Text="6" OnClick="btnSix_Click" />
                    <asp:Button CssClass="mx-2 btn btn-dark container-fluid" ID="btnMinus" runat="server" Text="-" OnClick="btnMinus_Click" />
                </div>
            </div>
            <div class="row my-2">
                <div class="col-md-12 d-flex justify-content-between">
                    <asp:Button CssClass="mx-2 btn btn-dark container-fluid" ID="btnOne" runat="server" Text="1" OnClick="btnOne_Click" />
                    <asp:Button CssClass="mx-2 btn btn-dark container-fluid" ID="btnTwo" runat="server" Text="2" OnClick="btnTwo_Click" />
                    <asp:Button CssClass="mx-2 btn btn-dark container-fluid" ID="btnThree" runat="server" Text="3" OnClick="btnThree_Click" />
                    <asp:Button CssClass="mx-2 btn btn-dark container-fluid" ID="btnPlus" runat="server" Text="+" OnClick="btnPlus_Click" />
                </div>
            </div>

            <div class="row my-2">
                <div class="col-md-12 d-flex justify-content-between">
                    <asp:Button CssClass="mx-2 btn btn-dark container-fluid" ID="btnPercentage" runat="server" Text="%" />
                    <asp:Button CssClass="mx-2 btn btn-dark container-fluid" ID="btnZero" runat="server" Text="0" OnClick="btnZero_Click" />
                    <asp:Button CssClass="mx-2 btn btn-dark container-fluid" ID="btnPoint" runat="server" Text="." OnClick="btnPoint_Click" />
                    <asp:Button CssClass="mx-2 btn btn-dark container-fluid" ID="btnEqual" runat="server" Text="=" OnClick="btnEqual_Click" />
                </div>
            </div>
        </div>
    </div>
</asp:Content>
