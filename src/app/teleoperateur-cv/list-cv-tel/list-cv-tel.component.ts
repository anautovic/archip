import { Component, OnInit,Input,Output, EventEmitter  } from '@angular/core';
import { Candidates } from 'src/app/candidates';


@Component({
  selector: 'app-list-cv-tel',
  templateUrl: './list-cv-tel.component.html',
  styleUrls: ['./list-cv-tel.component.scss']
})
export class ListCvTelComponent implements OnInit {
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
