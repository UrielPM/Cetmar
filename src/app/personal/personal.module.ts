import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalRoutingModule } from './personal-routing.module';
import { EquipoComponent } from './equipo/equipo.component';
import { AdministrativosComponent } from './administrativos/administrativos.component';
import { MaestrosComponent } from './maestros/maestros.component';
import { ReformaComponent } from './reforma/reforma.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    EquipoComponent,
    AdministrativosComponent,
    MaestrosComponent,
    ReformaComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    PersonalRoutingModule,
    RouterModule,
    SharedModule
  ]
})
export class PersonalModule { }
