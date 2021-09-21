import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CroquisComponent } from './croquis/croquis.component';
import { DirectorioComponent } from './directorio/directorio.component';
import { HistoriaComponent } from './historia/historia.component';
import { HomeComponent } from './home/home.component';
import { MisionComponent } from './mision/mision.component';
import { VisionComponent } from './vision/vision.component';

const routes: Routes = [
{
  path: '',
  component: HomeComponent,
  children: [
    { path: 'mision', component: MisionComponent}, 
    { path: 'vision', component: VisionComponent}, 
    { path: 'historia', component: HistoriaComponent},
    { path: 'directorio', component: DirectorioComponent},
    { path: 'croquis', component: CroquisComponent},
    { path:'**', redirectTo: 'home'}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class NosotrosRoutingModule { }
