import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-editar-empleados',
  templateUrl: './edit-employees.component.html',
  styleUrls: ['./adit-employees.component.css']
})
export class AditEmployeesComponent implements OnInit {

  public id: string;
  public errors: any;
  usuario: any;
  str: string;

  formulario = {
    id: '',
    nombre: '',
    lugNac: '',
    fecNac: '',
    telefono: '',
    cargo: '',
    estado: '',
  };

  constructor( private http: HttpClient, private route: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params.id;
    });
  }

  // tslint:disable-next-line:typedef
  editEmployee(){
    let url = 'http://localhost:8071/updateData/';
    let content = ({
      id: this.formulario.id,
      data: {
          nombre: this.formulario.nombre,
          aPaterno: this.formulario.lugNac,
          aMaterno: this.formulario.fecNac,
          email: this.formulario.telefono,
          cargo: this.formulario.cargo,
          estado: this.formulario.estado
    }
});
    this.http.put(url, content, { headers: new HttpHeaders({'content-Type': 'application/json', })})
    .subscribe(
      result => {
       console.log(result);
     },
     error => {
       if (error.status != 200){
       alert(this.errors + `: Hubo un error al borrar el usuario. Intente más tarde.`);
       }
       else{
         alert('Usuario actualizado');
       }
     });
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    const id = this.id;
    const url = `http://localhost:8071/readData/`;
    const paramId = new HttpParams().set('id', id );
    this.http.get( url, { params: paramId } )
    .subscribe( resultado => {
      this.usuario = resultado;
      // console.log(this.usuario);
      this.formulario.id = this.usuario.id;
      this.formulario.nombre = this.usuario.data.nombre;
      this.formulario.lugNac = this.usuario.data.lugNac;
      this.formulario.fecNac = this.usuario.data.fecNac;
      this.formulario.telefono = this.usuario.data.telefono;
      this.formulario.cargo = this.usuario.data.cargo;
      this.formulario.estado = this.usuario.data.estado;
    });
  }
}
