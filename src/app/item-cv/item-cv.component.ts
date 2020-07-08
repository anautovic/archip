import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import {Candidates} from '../candidates';

@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.scss']
})
export class ItemCvComponent implements OnInit {
@Input() candidats:Candidates;
@Output() selectedPersonne = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
selectPersonne(){
  this.selectedPersonne.emit(
    this.candidats
  );
}
  

}
