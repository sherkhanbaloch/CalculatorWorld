import { Routes } from '@angular/router';
import { Home } from './home/home';
import { GPACalculator } from './gpa-calculator/gpa-calculator';
import { AboutDeveloper } from './about-developer/about-developer';
import { Contact } from './contact/contact';
import { AgeCalculator } from './age-calculator/age-calculator';
import { ArithmeticCalculator } from './arithmetic-calculator/arithmetic-calculator';
import { CgpaCalculator } from './cgpa-calculator/cgpa-calculator';
import { GradeAndPercentageCalculator } from './grade-and-percentage-calculator/grade-and-percentage-calculator';
import { MultiplicationTableCalculator } from './multiplication-table-calculator/multiplication-table-calculator';
import { PercentageCalculator } from './percentage-calculator/percentage-calculator';
import { TemperatureCalculator } from './temperature-calculator/temperature-calculator';

export const routes: Routes = [
    { path: '', component: Home, title: 'Home - CalculatorWorld' },
    { path: 'about-developer', component: AboutDeveloper, title: 'About Developer - CalculatorWorld' },
    { path: 'contact', component: Contact, title: 'Contact - CalculatorWorld' },

    { path: 'arithmetic-calculator', component: ArithmeticCalculator, title: 'Arithmetic Calculator - CalculatorWorld' },
    { path: 'age-calculator', component: AgeCalculator, title: 'Age Calculator - CalculatorWorld' },
    { path: 'gpa-calculator', component: GPACalculator, title: 'GPA Calculator - CalculatorWorld' },
    { path: 'cgpa-calculator', component: CgpaCalculator, title: 'CGPA Calculator - CalculatorWorld' },
    { path: 'grade-and-percentage-calculator', component: GradeAndPercentageCalculator, title: 'Grade And Percentage Calculator - CalculatorWorld' },
    { path: 'multiplication-table-calculator', component: MultiplicationTableCalculator, title: 'Multiplication Table Calculator - CalculatorWorld' },
    { path: 'temperature-calculator', component: TemperatureCalculator, title: 'Temperature Calculator - CalculatorWorld' },
    { path: 'percentage-calculator', component: PercentageCalculator, title: 'Percentage Calculator - CalculatorWorld' }
];
