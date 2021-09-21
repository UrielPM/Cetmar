import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { ReglamentoComponent } from './reglamento/reglamento.component';
import { HorarioComponent } from './horario/horario.component';
import { BecasComponent } from './becas/becas.component';
import { TutoriasComponent } from './tutorias/tutorias.component';
import { ConstruytComponent } from './construyt/construyt.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ReglamentoComponent,
    HorarioComponent,
    BecasComponent,
    TutoriasComponent,
    ConstruytComponent,
    CalendarioComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    RouterModule,
    SharedModule
  ]
})
export class AlumnosModule { }
