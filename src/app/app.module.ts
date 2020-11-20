import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { ListEmployeesComponent } from './lista-employees/list-employees.component';
import { AddEmployeesComponent } from './add-employees/add-employees.component';
import { AditEmployeesComponent } from './edit-employees/adit-employees.component';
import { RouteModule } from './route/route.module';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ListEmployeesComponent,
    AddEmployeesComponent,
    AditEmployeesComponent
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

