import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatIconModule, SideNavComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  //Income
  lastMonthsIncome: { month: string, amount: number }[] = [
    { month: 'January', amount: 1000 },
    { month: 'February', amount: 1500 },
    { month: 'March', amount: 1200 }
  ];
    
  currentMonthIncome: number = 2000;

  //Expense
  lastMonthsExpense :{ month: string, amount: number}[] = [
    {month: 'January', amount: 800},
    {month: 'February', amount: 1000},
    {month: 'March', amount: 1200},
  ]
  currentMonthExpense: number = 1500;

  //Transactions
  todoTransactions = [
    { description: 'Pay electricity bill'},
    { description: 'Buy groceries'}
  ];

  totalCurretMonthIncome = 2000;
  totalCurrentMonthExpense = 1500;

  constructor(public router: Router){}
  navigateTo(route: string) {
    this.router.navigate([`/my-finance/${route}`]);
  }
  
  get currentMonthSavings(): number {
    return this.totalCurretMonthIncome - this.totalCurrentMonthExpense;
  }
}
