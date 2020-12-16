import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { HttpClientModule } from '@angular/common/http';
import { GifsComponent } from './gifs/gifs.component';



@NgModule({
  declarations: [
    AppComponent,
    BusquedaComponent,
    GifsComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule 
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
