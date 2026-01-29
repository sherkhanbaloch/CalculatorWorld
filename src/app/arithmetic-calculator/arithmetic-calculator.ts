import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-arithmetic-calculator',
  imports: [FormsModule],
  templateUrl: './arithmetic-calculator.html',
  styleUrl: './arithmetic-calculator.css',
})
export class ArithmeticCalculator {

  // Form Fields
  lblInputLabel: string = '';
  inputTxt: string = '';

  // Others
  a: number = 0;
  c: number = 0;
  answer: number = 0;

  opt: string = '';

  btnOne_Click(): void {

    if ((this.inputTxt == "+") || (this.inputTxt == "-") || (this.inputTxt == "*") || (this.inputTxt == "/")) {
      this.inputTxt = "";
      this.inputTxt = this.inputTxt + "1";
    }
    else {
      this.inputTxt = this.inputTxt + "1";
    }

  }

  btnTwo_Click(): void {
    if ((this.inputTxt == "+") || (this.inputTxt == "-") || (this.inputTxt == "*") || (this.inputTxt == "/")) {
      this.inputTxt = "";
      this.inputTxt = this.inputTxt + "2";
    }
    else {
      this.inputTxt = this.inputTxt + "2";
    }

  }

  btnThree_Click(): void {
    if ((this.inputTxt == "+") || (this.inputTxt == "-") || (this.inputTxt == "*") || (this.inputTxt == "/")) {
      this.inputTxt = "";
      this.inputTxt = this.inputTxt + "3";
    }
    else {
      this.inputTxt = this.inputTxt + "3";
    }

  }

  btnFour_Click(): void {
    if ((this.inputTxt == "+") || (this.inputTxt == "-") || (this.inputTxt == "*") || (this.inputTxt == "/")) {
      this.inputTxt = "";
      this.inputTxt = this.inputTxt + "4";
    }
    else {
      this.inputTxt = this.inputTxt + "4";
    }

  }

  btnFive_Click(): void {
    if ((this.inputTxt == "+") || (this.inputTxt == "-") || (this.inputTxt == "*") || (this.inputTxt == "/")) {
      this.inputTxt = "";
      this.inputTxt = this.inputTxt + "5";
    }
    else {
      this.inputTxt = this.inputTxt + "5";
    }

  }

  btnSix_Click(): void {
    if ((this.inputTxt == "+") || (this.inputTxt == "-") || (this.inputTxt == "*") || (this.inputTxt == "/")) {
      this.inputTxt = "";
      this.inputTxt = this.inputTxt + "6";
    }
    else {
      this.inputTxt = this.inputTxt + "6";
    }

  }

  btnSeven_Click(): void {
    if ((this.inputTxt == "+") || (this.inputTxt == "-") || (this.inputTxt == "*") || (this.inputTxt == "/")) {
      this.inputTxt = "";
      this.inputTxt = this.inputTxt + "7";
    }
    else {
      this.inputTxt = this.inputTxt + "7";
    }
  }

  btnEight_Click(): void {
    if ((this.inputTxt == "+") || (this.inputTxt == "-") || (this.inputTxt == "*") || (this.inputTxt == "/")) {
      this.inputTxt = "";
      this.inputTxt = this.inputTxt + "8";
    }
    else {
      this.inputTxt = this.inputTxt + "8";
    }

  }

  btnNine_Click(): void {
    if ((this.inputTxt == "+") || (this.inputTxt == "-") || (this.inputTxt == "*") || (this.inputTxt == "/")) {
      this.inputTxt = "";
      this.inputTxt = this.inputTxt + "9";
    }
    else {
      this.inputTxt = this.inputTxt + "9";
    }

  }

  btnZero_Click(): void {
    if ((this.inputTxt == "+") || (this.inputTxt == "-") || (this.inputTxt == "*") || (this.inputTxt == "/")) {
      this.inputTxt = "";
      this.inputTxt = this.inputTxt + "0";
    }
    else {
      this.inputTxt = this.inputTxt + "0";
    }

  }

  btnPlus_Click(): void {

    this.a = Number.parseFloat(this.inputTxt);
    this.lblInputLabel = this.a.toString();
    this.inputTxt = "";
    this.opt = '+';
    this.inputTxt += this.opt;

  }

  btnMinus_Click(): void {

    this.a = Number.parseFloat(this.inputTxt);
    this.lblInputLabel = this.a.toString();
    this.inputTxt = "";
    this.opt = '-';
    this.inputTxt += this.opt;
  }

  btnMultiply_Click(): void {

    this.a = Number.parseFloat(this.inputTxt);
    this.lblInputLabel = this.a.toString();
    this.inputTxt = "";
    this.opt = '*';
    this.inputTxt += this.opt;
  }

  btnDivide_Click(): void {

    this.a = Number.parseFloat(this.inputTxt);
    this.lblInputLabel = this.a.toString();
    this.inputTxt = "";
    this.opt = '/';
    this.inputTxt += this.opt;
  }

  btnDelete_Click(): void {

    if (this.inputTxt != "") {
      this.inputTxt = this.inputTxt.slice(0, -1);
    }

  }

  btnAC_Click(): void {
    this.inputTxt = "";
    this.lblInputLabel = "";
  }

  btnPoint_Click(): void {
    if ((this.inputTxt == "+") || (this.inputTxt == "-") || (this.inputTxt == "*") || (this.inputTxt == "/")) {
      this.inputTxt = "";
      this.inputTxt = this.inputTxt + ".";
    }
    else {
      this.inputTxt = this.inputTxt + ".";
    }

  }

  btnEqual_Click(): void {
    this.c = Number.parseFloat(this.inputTxt);
    this.inputTxt = "";

    if (this.opt == '+') {
      this.answer = this.a + this.c;
      this.lblInputLabel = this.a.toString() + " + " + this.c.toString();
      this.inputTxt += this.answer;
      this.a = this.answer;
    }
    else if (this.opt == '-') {
      this.answer = this.a - this.c;
      this.lblInputLabel = this.a.toString() + " - " + this.c.toString();
      this.inputTxt += this.answer;
      this.a = this.answer;
    }
    else if (this.opt == '*') {
      this.answer = this.a * this.c;
      this.lblInputLabel = this.a.toString() + " * " + this.c.toString();
      this.inputTxt += this.answer;
      this.a = this.answer;
    }
    else if (this.opt == '/') {
      this.answer = this.a / this.c;
      this.lblInputLabel = this.a.toString() + " / " + this.c.toString();
      this.inputTxt += this.answer;
      this.a = this.answer;
    }
    else {
      this.answer = this.a * this.c;
      this.inputTxt += this.answer;
      this.a = this.answer;
    }
  }

}


