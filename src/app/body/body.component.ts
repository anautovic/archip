import { Component, OnInit } from '@angular/core';
import {NgbPopoverConfig,  NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
  providers: [NgbPopoverConfig, NgbCarouselConfig]
})
export class BodyComponent implements OnInit {

  constructor(config: NgbPopoverConfig, conf:  NgbCarouselConfig) { 
    config.placement = 'bottom';
    config.triggers = 'hover';
    conf.interval = 400000;
  }

  ngOnInit() {
  }
  
    

}
