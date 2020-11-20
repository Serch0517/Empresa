import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes, Router } from '@angular/router';
import { ListEmployeesComponent } from '../lista-employees/list-employees.component';
import { AddEmployeesComponent } from '../add-employees/add-employees.component';
import { EditEmployeesComponent } from '../edit-employees/edit-employees.component';

const routes: Routes = [
  { path: 'Empleados', component: ListEmployeesComponent },
  { path: 'AgregarEmepleados', component: AddEmployeesComponent },
  { path: 'Editar', component: EditEmployeesComponent }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RouteModule { }
