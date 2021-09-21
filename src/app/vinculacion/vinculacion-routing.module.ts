import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BolsaComponent } from './bolsa/bolsa.component';
import { ConveniosComponent } from './convenios/convenios.component';
import { SeguimientoegresadosComponent } from './seguimientoegresados/seguimientoegresados.component';
import { ServiciosocialComponent } from './serviciosocial/serviciosocial.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'serviciosocial', component: ServiciosocialComponent},
      { path: 'convenios', component: ConveniosComponent},
      { path: 'seguimientoegresados', component: SeguimientoegresadosComponent},
      { path: 'bolsa', component: BolsaComponent},
      
      
      { path:'**', redirectTo: 'home'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
 
})
export class VinculacionRoutingModule { }
