import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink,  } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import {  HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [RouterLink, CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

  form: FormGroup;
  enviar: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private login: AuthService,
  ) {
    this.enviar = false;
    this.form = this.fb.group({
      email:['',[Validators.required, Validators.email]],
      password:['',Validators.required]
    });
  }


  onSubmit(){
    this.enviar = true;
    if(this.form.valid){
      this.enviar = false;
      this.login.login(this.form.value.email, this.form.value.password).subscribe({
        next: res => {
          console.log(res);
          this.router.navigate(['/profe']);
        },
        error: err => {
          console.log(err);
        }
      });
    }
  }

}
