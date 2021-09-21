import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VinculacionRoutingModule } from './vinculacion-routing.module';
import { ServiciosocialComponent } from './serviciosocial/serviciosocial.component';
import { ConveniosComponent } from './convenios/convenios.component';
import { SeguimientoegresadosComponent } from './seguimientoegresados/seguimientoegresados.component';
import { BolsaComponent } from './bolsa/bolsa.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ServiciosocialComponent,
    ConveniosComponent,
    SeguimientoegresadosComponent,
    BolsaComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    VinculacionRoutingModule,
    RouterModule,
    SharedModule
  ]
})
export class VinculacionModule { }
