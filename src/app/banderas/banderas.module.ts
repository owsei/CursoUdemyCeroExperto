import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoPaisesComponent } from './listado-paises/listado-paises.component';
import { BuscarPaisComponent } from './buscar-pais/buscar-pais.component';


@NgModule({
  declarations: [
    ListadoPaisesComponent,
    BuscarPaisComponent
  ],
  exports:[
    ListadoPaisesComponent,
    BuscarPaisComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BanderasModule { }
