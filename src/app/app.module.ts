import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ClienteApiService } from './services/cliente-api.service';
import { ClientesComponent } from './components/clientes/clientes.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ClientesComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ClienteApiService]
})
export class AppModule { }
