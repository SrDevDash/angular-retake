import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/Auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup = this.formBuilder.group({});
  error: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private _router: Router
  ) {
    this.buildForm();
  }

  private buildForm(): void {
    this.loginForm = this.formBuilder.group({
      user: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  public login(): void {
    const result = this.authService.login({
      email: this.loginForm.value.user,
      password: this.loginForm.value.password,
    });

    if (result.status === 200) {
      console.log('pass');
      this._router.navigate(['/']);
      localStorage.setItem('user', result.data?.name || '');
      this.error = '';
    } else {
      this.error = result.error || '';
      setInterval(() => {
        this.error = '';
      }, 5000);
      this.loginForm.controls['user'].setValue('');
    }
  }
}
