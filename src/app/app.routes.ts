import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then(m => m.LoginPage),
  },
  {
    path: 'cadastro-usuario',
    loadComponent: () => import('./cadastro-usuario/cadastro-usuario.page').then(m => m.CadastroUsuarioPage),
  },
  {
    path: 'cadastro-produto',
    loadComponent: () => import('./cadastro-livro/cadastro-livro.page').then(m => m.CadastroLivroPage),
  }
];