import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Candidates} from '../../candidates';
@Component({
  selector: 'app-item-cv-in',
  templateUrl: './item-cv-in.component.html',
  styleUrls: ['./item-cv-in.component.scss']
})
export class ItemCvInComponent implements OnInit {
  @Input() informaticiens:Candidates;
  @Output() selectedPersonne = new EventEmitter();
  @Input() candidat:Candidates;
  @Output() selectedPersonneIn = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
selectPersonne(){
  this.selectedPersonne.emit(
    this.informaticiens
  );
}
selectPersonneIn(){
  this.selectedPersonneIn.emit(
    this.candidat
  );
}
}
