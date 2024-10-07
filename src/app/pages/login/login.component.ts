import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../core/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required]]
    })
  }

  login() {
    if(this.loginForm.valid) {
      const email = this.loginForm.value.email
      const senha = this.loginForm.value.senha
      
      this.authService.authenticate(email, senha).subscribe({
        next: (value) => {
          console.log('Logado com sucesso', value),
          this.router.navigateByUrl('/')
          this.loginForm.reset()
        },
        error: (err) => {
          console.log('Problema na autenticação', err)
        }
      })
    }

  }
}
