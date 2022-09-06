import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { Menu } from './menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  constructor(private router: Router) {}
  menu: any;
  data;
  ngOnInit() {
    timer(300)
      .pipe(
        map((t) => {
          return [
            {
              name: '關於本局',
              menus: [
                {
                  name: 'Array練習',
                  path: 'Array',
                  // moduleKey: 'SINGLE',
                },
                {
                  name: 'TagCanvas',
                  path: 'TagCanvas',
                  // moduleKey: 'SINGLE',
                },
                {
                  name: 'Google 翻譯',
                  path: 'GoogleTranslate',
                  // moduleKey: 'SINGLE',
                },
                {
                  name: '計算機',
                  path: 'Computer',
                  // moduleKey: 'SINGLE',
                },
                {
                  name: 'Todo-list',
                  path: 'TodoList',
                  // moduleKey: 'SINGLE',
                },
              ],
              moduleKey: 'EMPTY',
            },
          ];
        })
      )
      // this.http.get(`${this.apiHost}/api/menu`)
      .subscribe(
        (data) => {
          this.data = data;
        },
        (rej) => {
          console.error('Could not load local data', rej);
        }
      );
  }

  getMenuUrl(data): string {
    let url: string;
    if (data[0].menu.length > 0) {
      if (data[0].menu[0].menu.length > 0) {
        url = data[0].menu[0].menu[0].url;
      } else {
        url = data[0].menu[0].url;
      }
    } else {
      url = data[0].url;
    }

    return url;
  }
}
