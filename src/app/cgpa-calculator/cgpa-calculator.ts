import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cgpa-calculator',
  imports: [FormsModule],
  templateUrl: './cgpa-calculator.html',
  styleUrl: './cgpa-calculator.css',
})
export class CgpaCalculator {
  id: number = 0;

  // Form Fields
  semesterTxt: string = '';
  creditTxt: number = 0;
  GPATxt: number = 0;

  dt: DataTable[] = [];

  lblTotalCGPA: string = '';

  btnAdd_Click(): void {

    let weight = this.creditTxt * this.GPATxt;

    this.dt.push(
      { ID: this.id, Semester: this.semesterTxt, CreditHours: this.creditTxt, GPA: this.GPATxt, WeightAverageGPA: weight }
    );

    this.id++;

    this.CountCGPA();
    this.ResetData();
  }

  DeleteRow(id: number): void {

    this.dt.splice(id, 1);
    this.CountCGPA();
  }

  CountCGPA(): void {

    let creditHours = 0;
    let averageGPA = 0;

    for (let i = 0; i < this.dt.length; i++) {
      creditHours += this.dt[i].CreditHours;
      averageGPA += this.dt[i].WeightAverageGPA;
    }

    let cgpa = averageGPA / creditHours;
    this.lblTotalCGPA = isNaN(cgpa) ? '0' : cgpa.toFixed(2);
  }

  ResetData(): void {
    this.semesterTxt = '';
    this.creditTxt = 0;
    this.GPATxt = 0;
  }

}


export interface DataTable {

  ID: number;
  Semester: string,
  CreditHours: number,
  GPA: number,
  WeightAverageGPA: number

}
