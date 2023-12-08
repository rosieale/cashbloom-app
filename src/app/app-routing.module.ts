// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard'; 
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExpensesListComponent } from './expenses-list/expenses-list.component';
import { EditExpenseComponent } from './edit-expense/edit-expense.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'expenses', component: ExpensesListComponent },
  { path: 'edit-expense/:id', component: EditExpenseComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' } // Default route
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
