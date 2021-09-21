import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrativosComponent } from './administrativos/administrativos.component';
import { EquipoComponent } from './equipo/equipo.component';
import { MaestrosComponent } from './maestros/maestros.component';
import { ReformaComponent } from './reforma/reforma.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'equipo', component: EquipoComponent}, 
      { path: 'administrativos', component: AdministrativosComponent},
      { path: 'maestros', component: MaestrosComponent},
      { path: 'reforma', component: ReformaComponent},
      { path:'**', redirectTo: 'home'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

})
export class PersonalRoutingModule { }
