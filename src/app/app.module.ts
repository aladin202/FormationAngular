import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
// import { ApplicationModule } from './application/application.module';



@NgModule({
  // metaData
  declarations: [
    // tous les composent graphique (template)
    AppComponent,
    HomeComponent
  ],
  imports: [
    // import des bibliothéque et les nouveau module
    BrowserModule,
    AppRoutingModule,
    
     
    // ApplicationModule
  ],
  // les service
  providers: [],
  // composent mere
  bootstrap: [AppComponent]
})
export class AppModule { }
