import { Component, OnInit } from '@angular/core';
import { IEmpleo } from '../model/empleos.model';
import { EmpleosService } from '../empleos.service';

@Component({
  selector: 'app-empleos',
  templateUrl: './empleos.component.html',
  styleUrls: ['./empleos.component.css']
})
export class EmpleosComponent implements OnInit {

  empleos: IEmpleo[] = [];


  constructor(protected empleosService: EmpleosService) { }

  ngOnInit() {
    this.empleosService.findAll().subscribe(response => {

      this.empleos = response.body;
    })
  }

}
