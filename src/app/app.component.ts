import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) {}

  logout(): void {
    localStorage.removeItem('token'); // Remove the JWT token from local storage
    this.router.navigate(['/login']); // Navigate to the login page
  }
}
