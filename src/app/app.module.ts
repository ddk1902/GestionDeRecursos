import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { SharedModulesModule } from './components/shared-modules/shared-modules.module';
//Angular Material


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
   
  ],
  imports: [     // Todos los modulos se importan aqui
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModulesModule
 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
