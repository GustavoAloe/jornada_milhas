import { Component } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  user$ = this.userService.returnUser();

  logout() {
    this.userService.logout();
    this.router.navigate(['/login'])
  }
}