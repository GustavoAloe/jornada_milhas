import { Component } from '@angular/core';
import { FormService } from '../../core/services/form.service';
import { RegisterService } from '../../core/services/register.service';
import { UserPerson } from '../../core/types/type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  profileComponent = false;

  constructor(
    private formService: FormService,
    private registerService: RegisterService,
    private router: Router
  ) {
  }

  register() {
    const formRegister = this.formService.getRegister()

    if(formRegister?.valid) {
      const newRegister = formRegister.getRawValue() as UserPerson;
      console.log(newRegister)
      this.registerService.register(newRegister).subscribe({
        next: (value) => {
          console.log('Cadastro realizado com sucesso', value);
          this.router.navigate(['/login'])
        },
        error: (err) => {
          console.log('Erro ao realizar cadastro', err)
        }
      })
    }


  }
}
