import { Component, OnInit, Input,ViewEncapsulation } from '@angular/core';
import {Candidates} from '../candidates';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./detail-cv.component.scss']
})
export class DetailCvComponent implements OnInit {
@Input ()candidats:Candidates;
closeResult: string;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }
  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true });
  }

}
