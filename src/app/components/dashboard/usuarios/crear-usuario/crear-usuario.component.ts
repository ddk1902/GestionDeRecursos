import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {usuarios} from 'src/app/interfaces/usuarios';
import { UsuarioService } from '../../../../services/usuario.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
interface Sexo {
  value: string;
  viewValue: string;
}




@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent {
  sexos:Sexo[] = [
    {value: 'Masculino', viewValue: 'Masculino'},
    {value: 'Femenino', viewValue: 'Femenino'},
  
  ];
  form: FormGroup;

  constructor(private fb:FormBuilder, private _usuarioService:UsuarioService,
    private router:Router,
    private _snackbar:MatSnackBar){
    this.form=this.fb.group({
      usuario:['',Validators.required],
      nombre:['',Validators.required],
      apellido:['',Validators.required],
      sexo:['',Validators.required]
    })
  }

  agregarUsuario(){

const user: usuarios={
  usuario: this.form.value.usuario,
  nombre: this.form.value.nombre,
  apellido: this.form.value.apellido,
  sexo: this.form.value.sexo,

}
this._snackbar.open('El usuario ha sido agregado con éxito..!', '', {
  duration: 1500,
  horizontalPosition: 'center',
  verticalPosition: 'bottom'
})
this._usuarioService.agregarUsuario(user);
this.router.navigate(['/dashboard/usuarios'])
  }
}
