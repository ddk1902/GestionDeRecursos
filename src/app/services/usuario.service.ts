import { Injectable } from '@angular/core';
import { usuarios } from '../interfaces/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  lista_usuarios: usuarios[] = [
    {usuario: "admin", nombre: "Diego", apellido: "Gomez", sexo: 'M'},
    {usuario: "admin", nombre: "Diego", apellido: "Gomez", sexo: 'M'},
    {usuario: "admin", nombre: "Diego", apellido: "Gomez", sexo: 'M'},
    {usuario: "admin", nombre: "Diego", apellido: "Gomez", sexo: 'M'},
    {usuario: "admin", nombre: "Diego", apellido: "Gomez", sexo: 'M'},
    {usuario: "admin", nombre: "Diego", apellido: "Gomez", sexo: 'M'},
    {usuario: "admin", nombre: "Diego", apellido: "Gomez", sexo: 'M'},
    {usuario: "admin", nombre: "Diego", apellido: "Gomez", sexo: 'M'},
    {usuario: "admin", nombre: "Diego", apellido: "Gomez", sexo: 'M'},
    {usuario: "admin", nombre: "Diego", apellido: "Gomez", sexo: 'M'},
    {usuario: "admin", nombre: "Diego", apellido: "Gomez", sexo: 'M'},
    {usuario: "admin", nombre: "Diego", apellido: "Gomez", sexo: 'M'},
    {usuario: "admin", nombre: "Diego", apellido: "Gomez", sexo: 'M'},
    {usuario: "admin", nombre: "Diego", apellido: "Gomez", sexo: 'M'},
    {usuario: "admin", nombre: "Diego", apellido: "Gomez", sexo: 'M'},
    {usuario: "admin", nombre: "Diego", apellido: "Gomez", sexo: 'M'},
    {usuario: "admin", nombre: "Diego", apellido: "Gomez", sexo: 'M'},
    {usuario: "admin", nombre: "Diego", apellido: "Gomez", sexo: 'M'},
    {usuario: "admin", nombre: "Diego", apellido: "Gomez", sexo: 'M'},
    {usuario: "admin", nombre: "Diego", apellido: "Gomez", sexo: 'M'},
    {usuario: "admin", nombre: "Diego", apellido: "Gomez", sexo: 'M'},
    {usuario: "admin", nombre: "Diego", apellido: "Gomez", sexo: 'M'},
    {usuario: "admin", nombre: "Diego", apellido: "Gomez", sexo: 'M'},
    {usuario: "admin", nombre: "Diego", apellido: "Gomez", sexo: 'M'},
   
  ];

  constructor() { }

  getUsuario(){

    return this.lista_usuarios.slice();
  }

  eliminarUsuario(index:number){
    this.lista_usuarios.splice(index,1)
  }

  agregarUsuario(usuario:usuarios){
    this.lista_usuarios.unshift(usuario);
  }
}
