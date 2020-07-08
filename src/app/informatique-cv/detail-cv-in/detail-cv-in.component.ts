import { Component, OnInit,Input,ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {Candidates} from '../../candidates'
import { InformatiqueService } from 'src/app/informatique.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detail-cv-in',
  templateUrl: './detail-cv-in.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./detail-cv-in.component.scss']
})
export class DetailCvInComponent implements OnInit {
  @Input () informaticiens: Candidates;
  closeResult: string;
  @Input () candidat:Candidates;
  candidatArray=[];
  id;
  constructor(private modalService: NgbModal, private db:InformatiqueService,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.id= this.route.snapshot.params['id'];
    this.db.getInformaticienList().subscribe(
      list =>{
        this.candidatArray= list.map(
        item => {
          return {
            $key:item.key,
            ...item.payload.val()
          }
        }  
        )
      }
    )
  }
  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true });
  }

}
