import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-grade-and-percentage-calculator',
  imports: [FormsModule],
  templateUrl: './grade-and-percentage-calculator.html',
  styleUrl: './grade-and-percentage-calculator.css',
})
export class GradeAndPercentageCalculator {

  // Form Fields
  obtainTxt: number = 0;
  totalTxt: number = 0;

  lblPercentage: string = '';
  lblGrade: string = '';
  lblResult: string = '';

  btnCalculate_Click(): void {

    // Percentage
    let percentage = this.obtainTxt / this.totalTxt * 100;
    this.lblPercentage = "Percentage: " + percentage.toFixed(2) + "%";

    // Grades
    if (percentage >= 90) {
      this.lblGrade = "Grade: " + "A+";
    }
    else if (percentage >= 85 && percentage <= 89) {
      this.lblGrade = "Grade: " + "A";
    }
    else if (percentage >= 80 && percentage <= 84) {
      this.lblGrade = "Grade: " + "A-";
    }
    else if (percentage >= 75 && percentage <= 79) {
      this.lblGrade = "Grade: " + "B+";
    }
    else if (percentage >= 70 && percentage <= 74) {
      this.lblGrade = "Grade: " + "B";
    }
    else if (percentage >= 66 && percentage <= 69) {
      this.lblGrade = "Grade: " + "B-";
    }
    else if (percentage >= 63 && percentage <= 65) {
      this.lblGrade = "Grade: " + "C+";
    }
    else if (percentage >= 60 && percentage <= 62) {
      this.lblGrade = "Grade: " + "C";
    }
    else if (percentage >= 55 && percentage <= 59) {
      this.lblGrade = "Grade: " + "C-";
    }
    else {
      this.lblGrade = "Grade: " + "F";
    }

    // Result
    if (percentage >= 55) {
      this.lblResult = "Result: " + "Pass";
    }
    else {
      this.lblResult = "Result: " + "Fail";
    }
  }

}
