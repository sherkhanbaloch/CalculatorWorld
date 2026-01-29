import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-age-calculator',
  imports: [FormsModule],
  templateUrl: './age-calculator.html',
  styleUrl: './age-calculator.css',
})
export class AgeCalculator {

  // Form Fields
  DOBTxt: string = '';
  todayDateTxt: string = '';
  lblAgeResult: string = '';

  btnCalculate_Click(): void {

    const dob = new Date(this.DOBTxt);
    const today = new Date(this.todayDateTxt);

    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();

    // Adjust days
    if (days < 0) {
      months--;
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += prevMonth.getDate();
    }

    // Adjust months
    if (months < 0) {
      years--;
      months += 12;
    }

    this.lblAgeResult = "Your Age Is: " + years + " Years, " + months + " Months, " + days + " Days.";
  }
}
