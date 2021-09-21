import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NormasComponent } from './normas/normas.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { TitulacionComponent } from './titulacion/titulacion.component';
import { SiseemsComponent } from './siseems/siseems.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'servicios', component: ServiciosComponent},
      { path: 'titulacion', component: TitulacionComponent},
      { path: 'normas', component: NormasComponent},
      { path: 'siseems', component: SiseemsComponent},
      
      { path:'**', redirectTo: 'home'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

})
export class ControlescolarRoutingModule { }
