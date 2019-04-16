import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false;

  form: FormGroup;

  username = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);

  constructor(fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.form = fb.group({
      'username': this.username,
      'password': this.password
    });
  }

  ngOnInit() {
    if (this.authService.IsLoggedIn) {
      this.router.navigate(['home']);
    }
  }

  async onSubmit() {
    this.submitted = true;

    const success = await this.authService.login(this.username.value, this.password.value);

    if (success) {
      this.router.navigate(['home']);
    }
  }

}
