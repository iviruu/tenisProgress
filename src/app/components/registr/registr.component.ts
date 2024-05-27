import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registr',
  standalone: true,
  imports: [RouterLink, CommonModule, ReactiveFormsModule],
  templateUrl: './registr.component.html',
  styleUrl: './registr.component.css'
})
export class RegistrComponent {

  form: FormGroup;
  enviar: boolean = false;

  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      name:['',Validators.required],
      surname:['',Validators.required],
      email:['',Validators.required, Validators.email],
      password:['',Validators.required],
      roles:['',Validators.required]
    });
  }


  onSubmit(){
    this.enviar = true;
    if(this.form.invalid){
      console.log(this.form.value);
      return;
      
    }
  }
}
