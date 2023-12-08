import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service'; // Adjust the path as necessary

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = { email: '', password: '' };

  constructor(private authService: AuthenticationService, private router: Router) { }

  onLogin(): void {
    this.authService.login(this.user).subscribe(
      response => {
        // Handle successful login here
        localStorage.setItem('token', response.token); // Save the token (or other relevant data)
        this.router.navigate(['/dashboard']); // Navigate to the dashboard
      },
      error => {
        console.error('Login error', error);
        // Optionally handle login failure here
      }
    );
  }
}
