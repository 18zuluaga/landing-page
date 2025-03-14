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
  TipoDocumento = "CC"


  ngOnInit(): void {
    this.formulario.get('tipoDocumento')?.valueChanges.subscribe(value => {
      this.TipoDocumento = value
    })
  }

  constructor( private form: FormBuilder) {
    this.formulario = this.form.group({
      name: ['', Validators.required],
      apellido: ['', Validators.required],
      documento: ['', Validators.required],
      tipoDocumento: ['', Validators.required],
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
