import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthServiceService } from '../../../service/auth-service/auth-service.service';
import { catchError, switchMap } from 'rxjs/operators';
import { of, throwError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  pageTitle!: string;

  constructor(private fb: FormBuilder,
    private authService: AuthServiceService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    // console.log(this.loginForm.value);
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    this.authService.login(email, password).pipe(
      switchMap(response => {
        console.log(response);
        return of(response);
      })
    ),
    catchError(error => {
      console.log(error);
      return throwError(() => new Error('something went wrong'))
    })
  }
}
