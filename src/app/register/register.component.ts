import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service'; 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = { email: '', password: '' };

  constructor(private authService: AuthenticationService, private router: Router) { }

  onRegister(): void {
    this.authService.register(this.user).subscribe(
      response => {
        // Handle successful registration here
        this.router.navigate(['/dashboard']); 
      },
      error => {
        console.error('Registration error', error);
        
      }
    );
  }
}
