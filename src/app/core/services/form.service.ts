import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  registerForm: FormGroup | null = null

  getRegister(): FormGroup | null {
    return this.registerForm
  }

  setRegister(form: FormGroup) {
    this.registerForm = form
  }
}
