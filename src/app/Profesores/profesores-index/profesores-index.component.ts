import { Component, OnInit } from '@angular/core';
import { ProfesorService } from '../profesor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profesores-index',
  templateUrl: './profesores-index.component.html',
  styleUrls: ['./profesores-index.component.css']
})
export class ProfesoresIndexComponent implements OnInit {
  public hola="hola mundo"
  public listProfesores :any=[]
  constructor(private service: ProfesorService, private router: Router ) {}


  ngOnInit(): void {
   this.getProfesores();
  }

  getProfesores(){
    this.service.getAll().subscribe(
      result=>{
        this.listProfesores=result.data
        console.log(result.data)
        
      }
    );
  }
  new() {
    this.router.navigateByUrl("/profesores/new")
  }
  edit(id:any) {
    this.router.navigateByUrl("/profesores/edit/"+id)
  }
  delete(id:any){
    this.service.delete(id).subscribe(
      result => {
        alert("Registro eliminado")
        this.getProfesores()
      },
      error => {
        console.log(error)
      }
    )
  }
}
