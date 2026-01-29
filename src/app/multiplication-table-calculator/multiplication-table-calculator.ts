import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-multiplication-table-calculator',
  imports: [FormsModule],
  templateUrl: './multiplication-table-calculator.html',
  styleUrl: './multiplication-table-calculator.css',
})
export class MultiplicationTableCalculator {

  numberTxt: number = 0;
  startTxt: number = 0;
  endTxt: number = 0;

  lblTable: string = '';


  btnCalculate_Click(): void {

    for (let i = this.startTxt; i <= this.endTxt; i++) {
      this.lblTable += this.numberTxt + " x " + i + " = " + this.numberTxt * i + "</br>";
    }

  }

}
