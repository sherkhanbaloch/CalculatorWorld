import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gpa-calculator',
  imports: [FormsModule],
  templateUrl: './gpa-calculator.html',
  styleUrl: './gpa-calculator.css',
})
export class GPACalculator {

  id: number = 0;

  // Form Fields
  subjectTxt: string = '';
  creditTxt: number = 0;
  gradeDDL: { text: string; value: number } | null = null;

  grades = [
    { text: 'A+', value: 4 },
    { text: 'A', value: 3.75 },
    { text: 'A-', value: 3.5 },
    { text: 'B+', value: 3.25 },
    { text: 'B', value: 3 },
    { text: 'B-', value: 2.75 },
    { text: 'C+', value: 2.5 },
    { text: 'C', value: 2 },
    { text: 'C-', value: 1.5 },
    { text: 'F', value: 0 }
  ];

  dt: DataTable[] = [];

  lblTotalGPA: string = '';

  btnAdd_Click(): void {

    let points = this.creditTxt * this.gradeDDL!.value;

    this.dt.push(
      { ID: this.id, Subject: this.subjectTxt, CreditHours: this.creditTxt, Grade: this.gradeDDL!.text, GPA: this.gradeDDL!.value, QualityPoints: points }
    );

    this.id++;

    this.CountGPA();
    this.ResetData();
  }

  DeleteRow(id: number): void {

    this.dt.splice(id, 1);
    this.CountGPA();
  }

  CountGPA(): void {

    let creditHours = 0;
    let qualityPoints = 0;

    for (let i = 0; i < this.dt.length; i++) {
      creditHours += this.dt[i].CreditHours;
      qualityPoints += this.dt[i].QualityPoints;
    }

    let gpa = qualityPoints / creditHours;
    this.lblTotalGPA = isNaN(gpa) ? '0' : gpa.toFixed(2);
  }

  ResetData(): void {
    this.subjectTxt = '';
    this.creditTxt = 0;
    this.gradeDDL = null;
  }

}


export interface DataTable {

  ID: number;
  Subject: string,
  CreditHours: number,
  Grade: string,
  GPA: number,
  QualityPoints: number

}