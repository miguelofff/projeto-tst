import { Routes } from '@angular/router';

import { Layout } from './pages/layout/layout';
import { Dashboard } from './pages/dashboard/dashboard';
import { Usuarios } from './pages/usuarios/usuarios';
import { Treinamentos } from './pages/treinamentos/treinamentos';
import { Epis } from './pages/epis/epis';
import { Riscos } from './pages/riscos/riscos';
import { Relatorios } from './pages/relatorios/relatorios';
import { Login } from './pages/login/login';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },

  {
    path: 'sistema',
    component: Layout,
    canActivate: [authGuard],
    children: [
      { path: '', component: Dashboard },
      { path: 'usuarios', component: Usuarios },
      { path: 'treinamentos', component: Treinamentos },
      { path: 'epis', component: Epis },
      { path: 'riscos', component: Riscos },
      { path: 'relatorios', component: Relatorios },
    ],
  },
];