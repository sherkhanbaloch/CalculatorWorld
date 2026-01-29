import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-percentage-calculator',
  imports: [FormsModule],
  templateUrl: './percentage-calculator.html',
  styleUrl: './percentage-calculator.css',
})
export class PercentageCalculator {

  fromDDL: string = '';
  toDDL: string = '';

  obtainTxt: number = 0;
  totalTxt: number = 0;

  lblResult: string = '';

  btnCalculate_Click(): void {
    if (this.fromDDL == "Number" && this.toDDL == "Percentage") {
      // Formula = Obtain / Total * 100
      let percentage = this.obtainTxt / this.totalTxt * 100;
      this.lblResult = percentage + " %";
    }
    else if (this.fromDDL == "Percentage" && this.toDDL == "Number") {
      // Formaula = Obatin / 100 * Total
      let value = this.obtainTxt / 100 * this.totalTxt;
      this.lblResult = value.toString();
    }
    else {
      alert('Condition Not Satisfied.');
    }

  }

}
