import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './components/clientes/clientes.component';


const routes: Routes = [
  // Clientes
  {
    path: 'crud/clientes',
    component: ClientesComponent,
    data: {title: 'CRUD de Clientes'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }