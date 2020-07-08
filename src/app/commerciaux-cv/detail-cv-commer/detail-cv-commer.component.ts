import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Candidates } from 'src/app/candidates';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommerciauxService } from 'src/app/commerciaux.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-cv-commer',
  templateUrl: './detail-cv-commer.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./detail-cv-commer.component.scss']
})
export class DetailCvCommerComponent implements OnInit {
  @Input()teleoperateur:Candidates;
  closeResult: string;
commerciauxArray= [];
id;
  constructor(private modalService: NgbModal, private db:CommerciauxService, private route:ActivatedRoute ) { }

  ngOnInit(){
    this.id= this.route.snapshot.params['id'];
    this.db.getCommerciauxList().subscribe(
      list =>{
        this.commerciauxArray= list.map(
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
