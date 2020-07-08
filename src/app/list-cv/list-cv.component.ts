import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Candidates } from '../candidates';

@Component({
  selector: 'app-list-cv',
  templateUrl: './list-cv.component.html',
  styleUrls: ['./list-cv.component.scss']
})
export class ListCvComponent implements OnInit {
@Input() candidats:Candidates[];
@Output () selectedPersonne = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  selectPersonne(selectedPersonne){
    this.selectedPersonne.emit(selectedPersonne);

  }

}
