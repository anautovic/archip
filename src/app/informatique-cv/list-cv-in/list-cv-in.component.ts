import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Candidates} from '../../candidates';

@Component({
  selector: 'app-list-cv-in',
  templateUrl: './list-cv-in.component.html',
  styleUrls: ['./list-cv-in.component.scss']
})
export class ListCvInComponent implements OnInit {
  @Input() informaticiens:Candidates[];
  @Input () candidats: Candidates[];
  //@Output () selectedPersonne = new EventEmitter();
  @Output () selectedPersonneIn = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
 /* selectPersonne(){
    this.selectedPersonne.emit(
      this.informaticiens
    );
  }*/
  selectPersonneIn(inf){
    this.selectedPersonneIn.emit(
    inf
    )
    
  }
}

