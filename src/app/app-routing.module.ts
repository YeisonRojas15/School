import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EspecialidadesIndexComponent } from './Especialidades/especialidades-index/especialidades-index.component';
import { EspecialidadesFormComponent } from './Especialidades/especialidades-form/especialidades-form.component';
import { ProfesoresIndexComponent } from './Profesores/profesores-index/profesores-index.component';
import { ProfesoresFormComponent } from './Profesores/profesores-form/profesores-form.component';


const routes: Routes = [
  {
    path: 'especialidades',
    component: EspecialidadesIndexComponent
  },
  {
    path: 'especialidades/new',
    component: EspecialidadesFormComponent
  },
  {
    path: 'especialidades/edit/:id', 
    component: EspecialidadesFormComponent
  },
  {
    path: 'profesores',
    component: ProfesoresIndexComponent
  },
  {
    path: 'profesores/new',
    component: ProfesoresFormComponent,
  },
  {
    path: 'profesores/edit/:id',
    component: ProfesoresFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
