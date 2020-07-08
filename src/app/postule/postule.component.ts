import { Component, OnInit , ViewEncapsulation} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-postule',
  templateUrl: './postule.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./postule.component.scss']
})
export class PostuleComponent implements OnInit {
  closeResult: string;
  postule= [{Prenom:'Sabine Nina', mobilite:'non'},
  {Prenom:'Tatiana', mobilite:'non'},
  {Prenom:'Margarette', mobilite:'oui'},
  {Prenom:'wilfried', mobilite:'oui'}

]
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }
  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true });
  }

}
