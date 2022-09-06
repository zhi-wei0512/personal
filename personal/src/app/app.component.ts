import { Component } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'personal';
  code='this a'

  async test() {
    const arr = [{ a: [1, 2, 3] }, { a: [1, 2] }, { a: [1] }];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].a.length; j++) {
        console.log('j', j);
        await this.api().subscribe((v) => {
          console.log('v', v);
        });
      }
    }
  }

  api() {
    // return this.http.get('https://data.gov.tw/datasets/export/csv');
    return from([11]);
  }
}
