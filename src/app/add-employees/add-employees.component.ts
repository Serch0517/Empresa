
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router } from '@angular/router';

@Component({
  selector: 'app-agrega-empleados',
  templateUrl: './add-employees.component.html',
  styleUrls: ['./add-employees.component.css']
})
export class AddEmployeesComponent implements OnInit {

  public errors;
  // tslint:disable-next-line:ban-types
  public estado: String;
  public mensaje = 'Usuario agregado';
  public url = 'http://localhost:8071/createData';

  constructor(private http: HttpClient, private router: Router) {}

  // tslint:disable-next-line:typedef max-line-length
  createEmployee(datos: {  id: string; nombre: string, lugNac: string, fecNac: string, telefono: string, cargo: string, estado: string }) {
   this.estado = datos.estado;
   const content = ({
        id: datos.id,
        data: {
            nombre: datos.nombre,
            apellidoPat: datos.lugNac,
            apellidoMat: datos.fecNac,
            email: datos.telefono,
            cargo: datos.cargo,
            estado: datos.estado
          }
    });
   console.log(content);
   this.http.post(this.url, content, { headers: new HttpHeaders( {'content-Type': 'application/json'} )})
    .subscribe(
      result => {
       console.log(result);
     },
     error => {
       // tslint:disable-next-line:triple-equals
       if (error.status != 200){
       alert(this.errors + `: Error al agregar el usuario. Intente más tarde.`);
       }
       else{
         alert('Usuario agregado');
       }
     });
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {}
}
