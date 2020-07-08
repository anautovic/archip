import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { Candidates } from 'src/app/candidates';

@Component({
  selector: 'app-item-cv-commer',
  templateUrl: './item-cv-commer.component.html',
  styleUrls: ['./item-cv-commer.component.scss']
})
export class ItemCvCommerComponent implements OnInit {
  @Input () teleoperateur:Candidates;
  @Output() selectedPersonneTel = new EventEmitter();
    constructor() { }
  
    ngOnInit() {
    }
    selectPersonneTel(){
      this.selectedPersonneTel.emit(
        this.teleoperateur
      );
  
    }

}
