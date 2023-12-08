import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Expense {
  id?: string; 
  category: string;
  amount: number;
  date: string;
  description?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private apiUrl = 'http://localhost:4200/api/expenses'; 

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  // Fetch all expenses
  getExpenses(): Observable<Expense[]> {
    return this.http.get<Expense[]>(this.apiUrl);
  }

  // Fetch a single expense by id
  getExpense(id: string): Observable<Expense> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Expense>(url);
  }

  // Add a new expense
  addExpense(expense: Expense): Observable<Expense> {
    return this.http.post<Expense>(this.apiUrl, expense, this.httpOptions);
  }

  // Update an existing expense
  updateExpense(expense: Expense): Observable<any> {
    const url = `${this.apiUrl}/${expense.id}`;
    return this.http.put(url, expense, this.httpOptions);
  }

  // Delete an expense
  deleteExpense(id: string): Observable<Expense> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Expense>(url, this.httpOptions);
  }
}
