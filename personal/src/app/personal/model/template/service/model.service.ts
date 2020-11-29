import { Injectable } from '@angular/core';
import { Observable, Subject, interval, merge } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ModelService {


  constructor() { }
  aSubject = new Subject();
  source = interval(5000);
  btn = document.querySelector('#btn');
  api = merge(this.aSubject, this.source);
  afterCallApi =
    this.api.pipe(
      map(val => console.log('getdata'))
    )
  clickAdd() {
    this.aSubject.next('hello');
  }

}
