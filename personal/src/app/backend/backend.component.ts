import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-backend',
  templateUrl: './backend.component.html',
  styleUrls: [
    './backend.component.scss',
  ],
  encapsulation: ViewEncapsulation.None
})
export class BackendComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    // /**
    //  * 畫面轉換時，至頂
    //  */
    // this.route.fragment.subscribe(f => {
    //   const element = document.querySelector('#wrapper');
    //   if (element) element.scrollIntoView();
    // });
  }

}
