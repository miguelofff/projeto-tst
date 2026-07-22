import { Routes } from '@angular/router';

export const routes: Routes = [];

import { Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { TreinamentosComponent } from './pages/treinamentos/treinamentos.component';
import { EpisComponent } from './pages/epis/epis.component';
import { RiscosComponent } from './pages/riscos/riscos.component';
import { RelatoriosComponent } from './pages/relatorios/relatorios.component';

export const routes: Routes = [

  {
    path: '',
    component: LoginComponent
  },

  {
    path: 'sistema',
    component: LayoutComponent,

    children: [

      {
        path: '',
        component: DashboardComponent
      },

      {
        path: 'usuarios',
        component: UsuariosComponent
      },

      {
        path: 'treinamentos',
        component: TreinamentosComponent
      },

      {
        path: 'epis',
        component: EpisComponent
      },

      {
        path: 'riscos',
        component: RiscosComponent
      },

      {
        path: 'relatorios',
        component: RelatoriosComponent
      }

    ]
  }

];