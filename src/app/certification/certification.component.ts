import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.scss']
})
export class CertificationComponent implements OnInit {
monObservable:Observable<string>;
mesImages = ['office.jpg','logo.jpg','Logos.jpg',
];
//startIndex:number;
currentImages:string;
images = ['H1.jpg', 'H3.jpg','cv4.jpg']

  constructor() { }

  ngOnInit() {

    this.monObservable= new Observable (
      observer => {
        let i = this.mesImages.length - 1;
        setTimeout(
          () => {
            observer.next(this.mesImages[i]);
            if (i>0)
            i=i-1;
            else { i=this.mesImages.length - 1;
            observer.next(this.mesImages[i]);}
          }
       , 1000);
      }

    );
    this.monObservable.subscribe(
      (resolve)=>{
        this.currentImages = resolve;
        console.log(resolve)

      }
    );
  }
}  


