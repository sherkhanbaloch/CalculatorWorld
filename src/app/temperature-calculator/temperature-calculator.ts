import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-temperature-calculator',
  imports: [FormsModule],
  templateUrl: './temperature-calculator.html',
  styleUrl: './temperature-calculator.css',
})
export class TemperatureCalculator {

  fromDDL: string = '';
  toDDL: string = '';

  valueTxt: number = 0;

  lblResult: string = '';

  btnCalculate_Click(): void {
    if (this.fromDDL == "Fahrenheit" && this.toDDL == "Celsius") {
      let cls = (this.valueTxt - 32) * 5 / 9;
      this.lblResult = this.valueTxt + " Fahrenheit = " + cls.toFixed(4) + " Celsius ";
    }
    else if (this.fromDDL == "Celsius" && this.toDDL == "Fahrenheit") {
      let fhr = (this.valueTxt * 9 / 5) + 32;
      this.lblResult = this.valueTxt + " Celsius = " + fhr.toFixed(4) + " Fahrenheit ";
    }
    else {
      this.lblResult = this.valueTxt + " " + this.fromDDL + " = " + this.valueTxt + " " + this.toDDL;
    }

  }
}
