import { Component, Input } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormBuilder, FormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
// import { NotifierService } from 'angular-notifier';
import { ReactiveFormsModule } from '@angular/forms'; 


@Component({
  selector: 'app-login-form',
  standalone: true,
  imports:  [
    MatFormFieldModule, 
    MatInputModule, 
    MatSelectModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    ReactiveFormsModule
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  errorEmail = 'Le champs nom utilisateur est obligatoire';
  errorPassword = 'Le champs mot de passe est obligatoire';
  signInForm: any;
  hidePassword: boolean = true;

  @Input() urlNavigation = '';

  private _destroySub$ = new Subject<void>();

  role = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    // private notifier: NotifierService,
  ) {
    // this.notifier = notifier;
    this.signInForm= this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(6)]],
    });
   }
   public ngOnDestroy(): void {
    this._destroySub$.next();
  }
  
  public onSubmit(): void {
    const signInRequest = {
      email: this.email.value,
      password: this.password.value
    }
    console.log(signInRequest);
  }

  get email(){
    return this.signInForm.get('email');
  }

  get password(){
    return this.signInForm.get('password');
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }
}