import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, _MatTableDataSource } from '@angular/material/table';
import { usuarios } from '../../../interfaces/usuarios';
import { UsuarioService } from '../../../services/usuario.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  list_usuarios: usuarios[]=[];

  displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'sexo','acciones'];
  dataSource! :MatTableDataSource<any>;


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _usuarioservice: UsuarioService, private snackbar: MatSnackBar){}
  
   ngOnInit():void{
    this.cargarUsuarios();
   }

   cargarUsuarios(){
    this.list_usuarios= this._usuarioservice.getUsuario();
    this.dataSource= new MatTableDataSource(this.list_usuarios);
   }

   ngAfterViewInit(){
    this.dataSource.paginator=this.paginator;
   }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.dataSource.sort= this.sort;
  }
  
  eliminarUsuario(index:number){
  console.log(index);
  this._usuarioservice.eliminarUsuario(index);
  this.cargarUsuarios();

    this.snackbar.open('El usuario ha sido eliminado con éxito..!', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }
   
  }
  





