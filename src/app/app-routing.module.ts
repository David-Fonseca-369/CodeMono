import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutBaseComponent } from './layout/layout-base/layout-base.component';

const routes: Routes = [
  {
    path: 'start',
    component: LayoutBaseComponent,
    //Para trabajar con rutas hijas
    children:[
      {path: '', loadChildren: ()=> import('./pages/start/start.module').then((m)=> m.StartModule)}
    ]
  },
  //Realizamos importación de módulos con carga perezosa
  {
    path: 'account',
    loadChildren: ()=> import('./pages/authentication/authentication.module').then((m)=> m.AuthenticationModule)
  },
  {
    path: 'account/login',
    redirectTo: 'account/login',
    pathMatch : 'full'
  },
  {
    path: '**',
    redirectTo: 'start',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
