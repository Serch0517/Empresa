import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-editar-empleados',
  templateUrl: './edit-employees.component.html',
  styleUrls: ['./edit-employees.component.css']
})
export class EditEmployeesComponent implements OnInit {

  public id: string;
  public errors: any;
  usuario: any;
  str: string;

  form = {
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
      id: this.form.id,
      data: {
          nombre: this.form.nombre,
          aPaterno: this.form.lugNac,
          aMaterno: this.form.fecNac,
          email: this.form.telefono,
          cargo: this.form.cargo,
          estado: this.form.estado
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
      this.form.id = this.usuario.id;
      this.form.nombre = this.usuario.data.nombre;
      this.form.lugNac = this.usuario.data.lugNac;
      this.form.fecNac = this.usuario.data.fecNac;
      this.form.telefono = this.usuario.data.telefono;
      this.form.cargo = this.usuario.data.cargo;
      this.form.estado = this.usuario.data.estado;
    });
  }
}
