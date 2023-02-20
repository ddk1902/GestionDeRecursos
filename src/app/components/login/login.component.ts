import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
form: FormGroup;
loading=false;

constructor(private fb: FormBuilder, private snackbar:MatSnackBar, private router:Router){
  this.form= this.fb.group({
    usuario: ['',Validators.required],
    password: ['',Validators.required]
  })
}
  ngOnInit(): void {
  
  }

  Ingresar(){
    //console.log(this.form );
    const usuario= this.form.value.usuario;
    const password= this.form.value.password;
  if(usuario == 'admin' && password== 'admin'){
    this.fakeLoading();
    // Redireccionamos al dashboard
  }else{
   this.error();
   this.form.reset();
  }
  }

  error(){
    this.snackbar.open('El usuario o contraseña ingresados no son correctos..!', '', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
}

fakeLoading(){
  this.loading=true;
 setTimeout(()=>{
  this.router.navigate(['dashboard']);
 }, 1500);
} 
}