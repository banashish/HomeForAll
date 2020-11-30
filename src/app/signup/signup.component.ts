import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  SignUpForm: FormGroup;
  constructor(private formbuilder: FormBuilder, private authService: AuthServiceService, private router: Router) {
    this.SignUpForm = this.formbuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
        ],
      ],
    });
  }

  ngOnInit(): void {}

  get form() {
    return this.SignUpForm.controls;
  }

  onSubmit() {
    if (this.SignUpForm.invalid){
      return;
    }
    else {
      const username = this.SignUpForm.controls.username.value;
      const password = this.SignUpForm.controls.password.value;
      this.authService.signUp(username, password);
    //   .then(res => {
    //     console.log(res);
    //     this.router.navigate(['/home']);
    //   })
    // .catch(err => {
    //   console.log(err);
    //   throw err;
    // });
    }
  }
}
