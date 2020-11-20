import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavegacionComponent } from './Navegacion/navegacion.component';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { AgregaEmpleadosComponent } from './agrega-empleados/agrega-empleados.component';
import { EditarEmpleadosComponent } from './editar-empleados/editar-empleados.component';
import { RouteModule } from './route/route.module';



@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    ListaEmpleadosComponent,
    AgregaEmpleadosComponent,
    EditarEmpleadosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

