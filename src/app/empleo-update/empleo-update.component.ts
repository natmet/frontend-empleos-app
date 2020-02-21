import { Component, OnInit } from '@angular/core';
import { IEmpleo } from '../model/empleos.model';
import { EmpleosService } from '../empleos.service';

@Component({
  selector: 'app-empleo-update',
  templateUrl: './empleo-update.component.html',
  styleUrls: ['./empleo-update.component.css']
})
export class EmpleoUpdateComponent implements OnInit {

  empleo:IEmpleo;

  constructor(protected empleoService: EmpleosService) { }

  ngOnInit() {
    this.empleo = {};
  }

  save(){

    this.empleoService.save(this.empleo).subscribe(response=> {

       this.empleo = response.body;
      alert('Empleo guardado con id: ' + this.empleo.id);
    })
  }
  back(){
    window.history.back();
  }

}
