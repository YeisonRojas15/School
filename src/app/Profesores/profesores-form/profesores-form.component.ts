import { Component, OnInit } from '@angular/core';
import { ProfesorService } from '../profesor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HelperService } from 'src/app/config/sevice/helper.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EspecialidadService } from 'src/app/Especialidades/especialidad.service';
import { ProfesorMateriaGradoService } from '../profesor-materia-grado.service';

@Component({
  selector: 'app-profesores-form',
  templateUrl: './profesores-form.component.html',
  styleUrls: ['./profesores-form.component.css']
})
export class ProfesoresFormComponent implements OnInit {
  public id = 0;
  public frmProfesor: FormGroup;
  public frmProfesorMateriaGrado: FormGroup;
  public listEspecialidades: any = [];
  public ListMaterias: any = [];
  public ListGrado: any = []

  constructor(private service: ProfesorService,
    private activeRoute: ActivatedRoute,
    private helperService: HelperService,
    private serviceEspecialidades: EspecialidadService,
    private serviceGrado: GradoService, 
    private serviceMateria: MateriaService,
    private serviceProfesorMateriaGrado: ProfesorMateriaGradoService) {
    this.id = this.activeRoute.snapshot.params['id'];
    this.frmProfesor = new FormGroup({
      nombre: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      apellido: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      especialidad: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)])
    });
    this.frmProfesorMateriaGrado = new FormGroup({
      materia: new FormControl(null, Validators.required),
      grado: new FormControl(null, Validators.required)
    });
  }
  ngOnInit(): void {

    this.getLists();

    if (this.id != 0 && this.id != undefined) {
      this.service.getById(this.id).subscribe(
        result => {
          this.frmProfesor.controls['nombre'].setValue(result.data.nombre)
          this.frmProfesor.controls['apellido'].setValue(result.data.apellido)
          this.frmProfesor.controls['especialidad'].setValue(result.data.especialidad.id)
        },
        error => {
          console.log(error);
        }
      )
    }
  }
  
  getLists() {
    this.serviceEspecialidades.getAll().subscribe(
      result => {
        this.listEspecialidades = result.data
      }
    )
    this.serviceGrado.getAll().subscribe(
      result => this.ListGrado = result.data
    )
    this.serviceMaterias.getAll().subscribe(
      result => this.ListMaterias = result.data
    )
  }
  guardar() {
    if (this.frmProfesor.invalid) {
      alert("El no cumple con las validaciones")
      return
    }
    let data = {
      "nombre": this.frmProfesor.controls['nombre'].value,
      "apellido": this.frmProfesor.controls['apellido'].value,
      "especialidad": {
        "id": this.frmProfesor.controls['especialidad'].value
      }
    }
    this.service.save(data, this.id).subscribe(
      result => {
        this.helperService.showNotify("success", "Profesor guardado")
      },
      error => {
        this.helperService.showNotify("danger", "Se genero un error al guardar")
      }
    )
  }
}

