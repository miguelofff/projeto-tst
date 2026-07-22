import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

  usuario = '';
  senha = '';

  constructor(private router: Router) {}

  login() {
    if (this.usuario === 'admin' && this.senha === '123') {
      this.router.navigate(['/sistema/usuarios']);
    } else {
      alert('Usuário ou senha inválidos');
    }
  }
}