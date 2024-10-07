import { Component, OnInit } from '@angular/core';
import { UserPerson } from '../../core/types/type';
import { TokenService } from '../../core/services/token.service';
import { RegisterService } from '../../core/services/register.service';
import { FormGroup } from '@angular/forms';
import { FormService } from '../../core/services/form.service';
import { Router } from '@angular/router';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit{
  title = 'Olá ';
  textButton = 'ATUALIZAR';
  profileComponent = true;

  token = '';
  name = '';
  register!: UserPerson;
  form!: FormGroup<any> | null;

  constructor(
    private tokenService: TokenService,
    private registerService: RegisterService,
    private formService: FormService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.token = this.tokenService.returnToken();
    this.registerService.searchRegister().subscribe(register => {
      this.register = register;
      this.name = this.register.nome;
      this.loadForm();
    })
  }

  loadForm() {
    this.form = this.formService.getRegister();
    this.form?.patchValue({
      nome: this.register.nome,
      nascimento: this.register.nascimento,
      cpf: this.register.cpf,
      telefone: this.register.telefone,
      email: this.register.email,
      senha: this.register.senha,
      cidade: this.register.cidade,
      estado: this.register.estado,
      genero: this.register.genero
    })
  }
  
    update() {
      const updatedData = {
        nome: this.form?.value.nome,
        nascimento: this.form?.value.nascimento,
        cpf: this.form?.value.cpf,
        telefone: this.form?.value.telefone,
        email: this.form?.value.email,
        senha: this.form?.value.senha,
        cidade: this.form?.value.cidade,
        estado: this.form?.value.estado,
        genero: this.form?.value.genero
      }

      this.registerService.editRegister(updatedData).subscribe({
        next: () => {
          alert('Cadastro editado com sucesso')
          this.router.navigate(['/'])
        },
        error: (err) => {
          console.log('Erro ao atualizar cadastro', err)
        }
      });
    }

  logout() {
    this.userService.logout();
    this.router.navigate(['/login'])
  }

}
