import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrerasRoutingModule } from './carreras-routing.module';
import { AcuaculturaComponent } from './acuacultura/acuacultura.component';
import { AdministracionComponent } from './administracion/administracion.component';
import { ElectronicaComponent } from './electronica/electronica.component';
import { AlimentosComponent } from './alimentos/alimentos.component';
import { MecanicaComponent } from './mecanica/mecanica.component';
import { PescaComponent } from './pesca/pesca.component';
import { RefrigeracionComponent } from './refrigeracion/refrigeracion.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AcuaculturaComponent,
    AdministracionComponent,
    ElectronicaComponent,
    AlimentosComponent,
    MecanicaComponent,
    PescaComponent,
    RefrigeracionComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    CarrerasRoutingModule,
    RouterModule,
    SharedModule
  ]
})
export class CarrerasModule { }
