import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

  formulario: FormGroup
  userActive = {
    name: 'Fernando',
    apellido: 'Gomez'
  }


  ngOnInit(): void {
    // this.formulario.get('name')?.setValue(this.userName) forma para solo un campo
    this.formulario.patchValue({name: this.userActive.name, apellido: this.userActive.apellido})
    this.formulario.get('name')?.disable()
    this.formulario.get('apellido')?.disable()
  }

  constructor( private form: FormBuilder) {
    this.formulario = this.form.group({
      name: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  enviar() {
    console.log(this.formulario)
  }

  hasError(campo: string, error: string) {
    return this.formulario.get(campo)?.touched && this.formulario.get(campo)?.hasError(error)
  }
}
