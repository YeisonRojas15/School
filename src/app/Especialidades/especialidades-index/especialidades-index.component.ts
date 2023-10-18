import { Component, OnInit } from '@angular/core';
import { EspecialidadService } from '../especialidad.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-especialidades-index',
  templateUrl: './especialidades-index.component.html',
  styleUrls: ['./especialidades-index.component.css']
})
export class EspecialidadesIndexComponent implements OnInit {
  public hola="hola mundo"
  public listEspecialidades :any=[]
  constructor(private service: EspecialidadService, private router: Router ) {}


  ngOnInit(): void {
   this.getEspecialidades();
  }

  getEspecialidades(){
    this.service.getAll().subscribe(
      result=>{
        this.listEspecialidades=result.data
        
      }
    );
  }
  new() {
    this.router.navigateByUrl("/especialidades/new")
  }
  edit(id:any) {
    this.router.navigateByUrl("/especialidades/edit/"+id)
  }
  delete(id:any){
    this.service.delete(id).subscribe(
      result => {
        alert("Registro eliminado")
        this.getEspecialidades()
      },
      error => {
        console.log(error)
      }
    )
  }
}
