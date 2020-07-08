import { Component, OnInit } from '@angular/core';
import {DatabaseService} from '../database.service';
import {trigger, style,transition,animate,keyframes,query,stagger, animation, state} from '@angular/animations';
@Component({
  selector: 'app-particulier',
  templateUrl: './particulier.component.html',
  styleUrls: ['./particulier.component.scss'],
  animations: [
    // the fade-in/fade-out animation.
    trigger('fade', [

      // the "in" style determines the "resting" state of the element when it is visible.
      state('void', style({opacity: 0})),

      // fade in when created. this could also be written as transition('void => *')
      transition('void => *', [
        style({opacity: 0}),
        animate(2000 )
      ]),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition('void => *',
        animate(2000, style({opacity: 0})))
    ])
  ]

})
export class ParticulierComponent implements OnInit {
particulier: any[];
particulierMa: any [];
  constructor( private data:DatabaseService) { }

  ngOnInit() {
this.particulier = this.data.particular;
this.particulierMa = this.data.particularMa;
  }

}
