import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Candidates } from 'src/app/candidates';

@Component({
  selector: 'app-item-cv-tel',
  templateUrl: './item-cv-tel.component.html',
  styleUrls: ['./item-cv-tel.component.scss']
})
export class ItemCvTelComponent implements OnInit {
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
