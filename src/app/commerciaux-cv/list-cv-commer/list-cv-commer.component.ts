import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { Candidates } from 'src/app/candidates';


@Component({
  selector: 'app-list-cv-commer',
  templateUrl: './list-cv-commer.component.html',
  styleUrls: ['./list-cv-commer.component.scss']
})
export class ListCvCommerComponent implements OnInit {
  @Input () teleoperateurs:Candidates[]
  @Output () selectedPersonneTel= new EventEmitter();
    constructor() { }
  
    ngOnInit() {
    }
    selectPersonneTel( teleoperateur){
  this.selectedPersonneTel.emit(
    teleoperateur
  )
    }

}
