import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FederativeUnity } from '../../core/types/type';
import { FormService } from '../../core/services/form.service';
import { FormValidations } from '../form-validations';

@Component({
  selector: 'app-form-base',
  templateUrl: './form-base.component.html',
  styleUrl: './form-base.component.scss'
})
export class FormBaseComponent implements OnInit{
  registerForm!: FormGroup;
  stateControl = new FormControl<FederativeUnity | null>(null, Validators.required);
  @Input() profileComponent!: boolean;
  @Input() title: string = 'Crie sua conta';
  @Input() textButton: string = 'CADASTRAR';
  @Output() actionClick: EventEmitter<any> = new EventEmitter<any>()
  @Output() exit: EventEmitter<any> = new EventEmitter<any>()
  

  constructor(
    private formBuilder: FormBuilder,
    private formService: FormService
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nome: [null, Validators.required],
      nascimento: [null, [Validators.required]],
      cpf: [null, [Validators.required]],
      cidade: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required, Validators.minLength(3)]],
      genero: ['outro'],
      telefone: [null, Validators.required],
      estado: this.stateControl,
      confirmarEmail: [null, [Validators.required, Validators.email, FormValidations.equalTo('email')]],
      confirmarSenha: [null, [Validators.required, Validators.minLength(3), FormValidations.equalTo('senha')]],
      aceitarTermos: [false, [Validators.requiredTrue]]
    });

    if(this.profileComponent) {
      this.registerForm.get('aceitarTermos')?.setValidators(null)
    } else {
      this.registerForm.get('aceitarTermos')?.setValidators([Validators.requiredTrue])
    }

    this.registerForm.get('aceitarTermos')?.updateValueAndValidity();

    this.formService.setRegister(this.registerForm)
  }

  executeAction() {
    this.actionClick.emit();
  }

  logout() {
    this.exit.emit();
  }
}
