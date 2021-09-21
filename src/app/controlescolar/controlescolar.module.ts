import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControlescolarRoutingModule } from './controlescolar-routing.module';
import { ServiciosComponent } from './servicios/servicios.component';
import { TitulacionComponent } from './titulacion/titulacion.component';
import { NormasComponent } from './normas/normas.component';
import { SiseemsComponent } from './siseems/siseems.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ServiciosComponent,
    TitulacionComponent,
    NormasComponent,
    SiseemsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ControlescolarRoutingModule,
    RouterModule,
    SharedModule
  ]
})
export class ControlescolarModule { }
