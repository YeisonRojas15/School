import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EspecialidadService } from '../especialidad.service';
import { ActivatedRoute } from '@angular/router';
import { HelperService } from 'src/app/config/sevice/helper.service';

@Component({
  selector: 'app-especialidades-form',
  templateUrl: './especialidades-form.component.html',
  styleUrls: ['./especialidades-form.component.css']
})
export class EspecialidadesFormComponent implements OnInit {

  public id = 0;
  public frmEspecialidad: FormGroup;

  constructor(private service: EspecialidadService,
    private activeRoute: ActivatedRoute,
    private helperService: HelperService) {
    this.id = this.activeRoute.snapshot.params['id'];
    this.frmEspecialidad = new FormGroup({
      nombre: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)])
    });
  }
  ngOnInit(): void {

    if (this.id && this.id != 0) {
      this.service.getById(this.id).subscribe(
        result => {
          this.frmEspecialidad.controls['nombre'].setValue(result.data.nombre)
        },
        error => {
          console.log(error);
        }
      )
    }
  }
  guardar() {
    if (this.frmEspecialidad.invalid) {
      alert("El no cumple con las validaciones")
      return
    }
    let data = {
      "nombre": this.frmEspecialidad.controls['nombre'].value
    }
    this.service.save(data, this.id).subscribe(
      result => {
        this.helperService.showNotify("success", "Especialidad guardada")
      },
      error => {
        this.helperService.showNotify("danger", "Se genero un error al guardar")
      }
    )
  }
}
