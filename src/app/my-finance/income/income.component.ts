import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-income',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './income.component.html',
  styleUrl: './income.component.scss'
})
export class IncomeComponent {
  incomeForm: any;
  selectedMonth: any;

  constructor(public fb:FormBuilder){}

  ngOnInit(): void {
    this.incomeForm = this.fb.group({
      month: ['', Validators.required],
      source: ['', Validators.required],
      amount: ['', Validators.required],
      investments: ['', Validators.required]
    })
  }

  onChange(event: any){
    this.selectedMonth = event.target.value;
    this.getFilteredIncomes();
  }
  getFilteredIncomes(){
    
  }

  onSubmit(){

  }
}
