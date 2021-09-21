import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcuaculturaComponent } from './acuacultura/acuacultura.component';
import { AdministracionComponent } from './administracion/administracion.component';
import { AlimentosComponent } from './alimentos/alimentos.component';
import { ElectronicaComponent } from './electronica/electronica.component';
import { HomeComponent } from './home/home.component';
import { MecanicaComponent } from './mecanica/mecanica.component';
import { PescaComponent } from './pesca/pesca.component';
import { RefrigeracionComponent } from './refrigeracion/refrigeracion.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'acuacultura', component: AcuaculturaComponent}, 
      { path: 'administracion', component: AdministracionComponent}, 
      { path: 'alimentos', component: AlimentosComponent},    
      { path: 'electronica', component: ElectronicaComponent},   
      { path: 'mecanica', component: MecanicaComponent},  
      { path: 'pesca', component: PescaComponent}, 
      { path: 'refrigeracion', component: RefrigeracionComponent}, 
      { path:'**', redirectTo: 'home'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
 
})
export class CarrerasRoutingModule { }
