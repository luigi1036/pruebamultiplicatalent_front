import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorComponent } from './components/color/color.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { DetalleColorComponent } from './components/detalle-color/detalle-color.component';

const routes: Routes = [
  {
    path: "",
    component: ColorComponent
  },
  {
    path: "formulario",
    component: FormularioComponent
  },
  {
    path: "DetalleColor",
    component: DetalleColorComponent
  },{
    path: "formulario/:id",
    component: FormularioComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColorRoutingModule { }
