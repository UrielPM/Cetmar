import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NosotrosRoutingModule } from './nosotros-routing.module';
import { MisionComponent } from './mision/mision.component';
import { VisionComponent } from './vision/vision.component';
import { HistoriaComponent } from './historia/historia.component';
import { DirectorioComponent } from './directorio/directorio.component';
import { CroquisComponent } from './croquis/croquis.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MisionComponent,
    VisionComponent,
    HistoriaComponent,
    DirectorioComponent,
    CroquisComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    NosotrosRoutingModule,
    RouterModule,
    SharedModule
  ]
})
export class NosotrosModule { }
