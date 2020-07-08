import { Component, OnInit,Input, ViewEncapsulation } from '@angular/core';
import { Candidates } from 'src/app/candidates';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { TeleoperateurService } from 'src/app/teleoperateur.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-cv-tel',
  templateUrl: './detail-cv-tel.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./detail-cv-tel.component.scss']
})
export class DetailCvTelComponent implements OnInit {
@Input()teleoperateur:Candidates;
  closeResult: string;
  id;
  teleoperateurArray= [];
  constructor(private modalService: NgbModal,private db:TeleoperateurService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.id= this.route.snapshot.params['id'];
    this.db.getTeleoperateurList().subscribe(
      list =>{
        this.teleoperateurArray= list.map(
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
