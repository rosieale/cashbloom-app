import { Component, OnInit } from '@angular/core';
import { ExpenseService, Expense } from '../expense.service';

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.css']
})
export class ExpensesListComponent implements OnInit {
  expenses: Expense[] = [];

  constructor(private expenseService: ExpenseService) { }

  ngOnInit(): void {
    this.expenseService.getExpenses().subscribe(
      (data: Expense[]) => {
        this.expenses = data;
      },
      (error) => {
        console.error('Error fetching expenses', error);
      }
    );
  }
}
