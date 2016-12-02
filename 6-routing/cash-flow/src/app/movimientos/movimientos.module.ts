// Importar el servicio DatosService desde el fichero
import { DatosService } from './datos.service';

import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Importa un componente que declara y que luego exporta */
import { MovimientosComponent } from './movimientos.component';
import { ListaComponent } from './lista/lista.component';
import { NuevoComponent } from './nuevo/nuevo.component';

import { MovimientosRoutingModule } from './movimientos-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MovimientosRoutingModule ],// dependencias de otros módulos
  declarations: [
    MovimientosComponent,
    ListaComponent,
    NuevoComponent ],// Componente que el mismo declara
  exports: [
    MovimientosComponent
  ], // exporta los componentes importables desde otros módulos
  providers: [
    DatosService] // registro del servicio como un provvedor del módulo
  
})
export class MovimientosModule { }
