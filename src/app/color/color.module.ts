import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ColorRoutingModule } from './color-routing.module';
import { FormularioComponent } from './components/formulario/formulario.component';
import { DetalleColorComponent } from './components/detalle-color/detalle-color.component';
import { ColorService } from './services/color.service';
import { ColorComponent } from './components/color/color.component';


@NgModule({
  declarations: [
    ColorComponent,
    FormularioComponent,
    DetalleColorComponent
  ],
  imports: [
    CommonModule,
    ColorRoutingModule,
    FormsModule
  ],
  providers:[
    ColorService
  ]
})
export class ColorModule { }
