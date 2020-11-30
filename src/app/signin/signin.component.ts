import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  SignInForm: FormGroup;
  constructor(
    private formbuilder: FormBuilder,
    private authService: AuthServiceService,
    private router: Router
  ) {
    this.SignInForm = this.formbuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {}

  get form() {
    return this.SignInForm.controls;
  }

  onSubmit() {
    if (this.SignInForm.invalid) {
      return;
    } else {
      const username = this.SignInForm.controls.username.value;
      const password = this.SignInForm.controls.password.value;
      this.authService
        .signIn(username, password)
        .then((res) => {
          this.router.navigate(['/home']);
        })
        .catch((err) => {
          console.log(err);
          throw err;
        });
    }
  }
}
