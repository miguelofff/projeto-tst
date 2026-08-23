import { Injectable } from '@angular/core';

export type Perfil = 'admin' | 'colaborador';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarios = [
    {
      usuario: 'admin',
      senha: '1234',
      perfil: 'admin' as Perfil,
      nome: 'Administrador'
    },
    {
      usuario: 'João da Silva',
      senha: '2345',
      perfil: 'colaborador' as Perfil,
      nome: 'João da Silva'
    }
  ];

  login(usuario: string, senha: string): boolean {

    const usuarioEncontrado = this.usuarios.find(
      u => u.usuario.toLowerCase() === usuario.trim().toLowerCase()
        && u.senha === senha
    );

    if (!usuarioEncontrado) {
      return false;
    }

    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('perfil', usuarioEncontrado.perfil);
    localStorage.setItem('nomeUsuario', usuarioEncontrado.nome);

    return true;
  }

  logout(): void {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('perfil');
    localStorage.removeItem('nomeUsuario');
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  getPerfil(): Perfil | null {
    return localStorage.getItem('perfil') as Perfil | null;
  }

  isAdmin(): boolean {
    return this.getPerfil() === 'admin';
  }

  isColaborador(): boolean {
    return this.getPerfil() === 'colaborador';
  }

  getNomeUsuario(): string {
    return localStorage.getItem('nomeUsuario') || '';
  }
 getUsuarioLogado(): { nome: string; role: string } | null {
  const nome = localStorage.getItem('nomeUsuario');
  const perfil = localStorage.getItem('perfil');

  if (!nome || !perfil) {
    return null;
  }

  return {
    nome: nome,
    role: perfil
  };
}
}