import { Component, OnInit } from '@angular/core';
import { EspecialidadService } from '../especialidad.service';

@Component({
  selector: 'app-especialidades-index',
  templateUrl: './especialidades-index.component.html',
  styleUrls: ['./especialidades-index.component.css']
})
export class EspecialidadesIndexComponent implements OnInit {
  public hola="hola mundo"
  public listEspecialidades :any=[]
  constructor(private service: EspecialidadService){

  }
  ngOnInit(): void {
   this.getEspecialidades;
  }

  getEspecialidades(){
    this.service.getAll().subscribe(
      result=>{
        this.listEspecialidades=result.data
        console.log(this.listEspecialidades)
      }
    );
  }
  edit(id:any) {

  }
  delete(id:any){

  }
}
