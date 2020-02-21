import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpleoDetalleComponent } from './empleo-detalle/empleo-detalle.component';
import { EmpleosComponent } from './empleos/empleos.component';
import { EmpleoUpdateComponent } from './empleo-update/empleo-update.component';


const routes: Routes = [

  {
    path: '',
    component: EmpleosComponent
  },
  {
    path:'empleos/new',
    component: EmpleoUpdateComponent
  },
  {
    path: 'empleos/:id',
    component: EmpleoDetalleComponent
  },
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
