/* tslint:disable:member-ordering */
import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Router, RouterModule ,ActivatedRoute} from '@angular/router'; // CLI imports router

@Directive({
  selector: '[googleSearch]',
  exportAs: 'googleSearch'
})
export class googleSearch {

  constructor(
    private el: ElementRef,
    private router:Router,
    private route: ActivatedRoute) { }

  @Input() defaultColor: string;

  @Input('appHighlight') highlightColor: string;

 search(query){
   query = JSON.stringify(query);
    this.router.navigate(['../','GoogleSearch'],
    {queryParams:{search : query}, relativeTo: this.route });
}

  @HostListener('keyup',['$event']) onChange($event) {
    if($event.keyCode === 13){
      this.search($event.target.value);
      console.log('近來directive')
    }
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
