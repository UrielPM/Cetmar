import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BecasComponent } from './becas/becas.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { ConstruytComponent } from './construyt/construyt.component';
import { HorarioComponent } from './horario/horario.component';
import { ReglamentoComponent } from './reglamento/reglamento.component';
import { TutoriasComponent } from './tutorias/tutorias.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'reglamento', component: ReglamentoComponent}, 
      { path: 'horario', component: HorarioComponent},
      { path: 'becas', component: BecasComponent},
      { path: 'tutoria', component: TutoriasComponent},
      { path: 'construyt', component: ConstruytComponent},
      { path: 'calendario', component: CalendarioComponent},
      { path:'**', redirectTo: 'home'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

})
export class AlumnosRoutingModule { }
