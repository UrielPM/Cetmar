import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { SliderComponent } from './slider/slider.component';
import { FooterComponent } from './footer/footer.component';
import { OfertaAcademicaComponent } from './oferta-academica/oferta-academica.component';



@NgModule({
  declarations: [
    MenuComponent,
    SliderComponent,
    FooterComponent,
    OfertaAcademicaComponent
  ],
  imports: [
    CommonModule, 
    RouterModule
  ],
  exports:[ 
    MenuComponent,
    SliderComponent,
    FooterComponent,
    OfertaAcademicaComponent
  ]
})
export class SharedModule { }
