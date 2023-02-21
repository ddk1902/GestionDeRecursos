import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, _MatTableDataSource } from '@angular/material/table';
import { usuarios } from '../../../interfaces/usuarios';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
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
  displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'sexo','acciones'];
  dataSource = new MatTableDataSource(this.lista_usuarios);


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(){}
   ngOnInit():void{}

   ngAfterViewInit(){
    this.dataSource.paginator=this.paginator;
   }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  

   
  }
  





