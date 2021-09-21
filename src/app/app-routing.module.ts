import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
 {
   path: 'home', component: HomeComponent
 },
  {
    path:'nosotros',
    loadChildren:() => import('./nosotros/nosotros.module').then(m => m.NosotrosModule)
  },
  { 
    path: 'carreras',
    loadChildren:() => import('./carreras/carreras.module').then(m => m.CarrerasModule)
  },
  {
    path: 'alumnos',
    loadChildren:() => import('./alumnos/alumnos.module').then(m => m.AlumnosModule)
  },
  {
    path: 'personal',
    loadChildren:() => import('./personal/personal.module').then(m => m.PersonalModule)
  },
  {
    path: 'controlescolar',
    loadChildren:() => import('./controlescolar/controlescolar.module').then(m => m.ControlescolarModule)
  },
  {
    path: 'vinculacion',
    loadChildren:() => import('./vinculacion/vinculacion.module').then(m => m.VinculacionModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
