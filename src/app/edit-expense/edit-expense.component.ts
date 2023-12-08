import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpenseService, Expense } from '../expense.service';

@Component({
  selector: 'app-edit-expense',
  templateUrl: './edit-expense.component.html',
  styleUrls: ['./edit-expense.component.css']
})
export class EditExpenseComponent implements OnInit {
  expense: Expense = { category: '', amount: 0, date: '', description: '' };
  editMode = false;
  id: string | null = null;

  constructor(
    private expenseService: ExpenseService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.editMode = true;
      this.expenseService.getExpense(this.id).subscribe(
        (data: Expense) => {
          this.expense = data;
        },
        (error) => {
          console.error('Error fetching expense', error);
        }
      );
    }
  }

  onSubmit(): void {
    if (this.editMode && this.id) {
      this.expenseService.updateExpense({ ...this.expense, id: this.id }).subscribe(
        () => this.router.navigate(['/expenses']),
        (error) => console.error('Error updating expense', error)
      );
    } else {
      this.expenseService.addExpense(this.expense).subscribe(
        () => this.router.navigate(['/expenses']),
        (error) => console.error('Error adding expense', error)
      );
    }
  }
}
