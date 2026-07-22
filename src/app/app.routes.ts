import { Routes } from '@angular/router';

import { Layout } from './pages/layout/layout';
import { Dashboard } from './pages/dashboard/dashboard';
import { Usuarios } from './pages/usuarios/usuarios';
import { Treinamentos } from './pages/treinamentos/treinamentos';
import { Epis } from './pages/epis/epis';
import { Riscos } from './pages/riscos/riscos';
import { Relatorios } from './pages/relatorios/relatorios';
import { Login } from './pages/login/login';

// export const routes: Routes = [
//     // Rotas públicas
//     {path: '', redirectTo: 'login', pathMatch: 'full'},
//     {path: 'login', component: Login},
//     // {path: 'unauthorized', component: Unauthorized},

//     // Rotas privadas
//     { path: '', component: Layout, canActivate: [authGuard] },
//     { path: '/dashboard', component: Dashboard, canActivate: [authGuard] },
//     { path: '/usuarios', component: Usuarios, canActivate: [authGuard] },
//     { path: '/treinamentos', component: Treinamentos, canActivate: [authGuard] },
//     { path: '/epis', component: Epis, canActivate: [authGuard] },
//     { path: '/riscos', component: Riscos, canActivate: [authGuard] },
//     { path: '/relatorios', component: Relatorios, canActivate: [authGuard] }
// ];

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    component: Login
  },

  {
    path: 'sistema',
    component: Layout,
    children: [

      {
        path: '',
        component: Dashboard
      },

      {
        path: 'usuarios',
        component: Usuarios
      },

      {
        path: 'treinamentos',
        component: Treinamentos
      },

      {
        path: 'epis',
        component: Epis
      },

      {
        path: 'riscos',
        component: Riscos
      },

      {
        path: 'relatorios',
        component: Relatorios
      }

    ]
  }

];