import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submitted = false;

  form: FormGroup;

  username = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);
  password_repeat = new FormControl('', Validators.required);
  email = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  constructor(fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.form = fb.group({
      'username': this.username,
      'password': this.password,
      'password_repeat': this.password_repeat,
      'email': this.email
    });
  }

  ngOnInit() {
    if (this.authService.IsLoggedIn) {
      this.router.navigate(['home']);
    }
  }

  async onSubmit() {
    this.submitted = true;
    if (this.password.value === this.password_repeat.value) {
      const url = environment.baseApiUrl + '/users/register';

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: this.username.value,
          password: this.password.value,
          password_repeat: this.password_repeat.value,
          email: this.email.value
        })
      });

      const json = await response.json();

      if (json.success) {
        this.router.navigate(['/login']);
      } else {
        this.submitted = false;
        // TODO display error messages
      }
    }
  }

}
