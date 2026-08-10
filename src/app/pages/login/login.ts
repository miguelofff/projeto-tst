import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  usuario = '';
  senha = '';

  constructor(private authService: AuthService, private router: Router) {}

  fazerLogin(): void {
    const sucesso = this.authService.login(this.usuario, this.senha);

    if (sucesso) {
      this.router.navigate(['/sistema']);
    } else {
      alert('Usuário ou senha inválidos');
    }
  }
}