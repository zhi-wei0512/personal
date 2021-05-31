import { Component, OnInit, Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
// import { environment } from './../../../../environments/environment';
import { timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-backend-menu',
  templateUrl: './backend-menu.component.html',
  styleUrls: ['./backend-menu.component.css']
})
export class BackendMenuComponent implements OnInit {
  data: any;
  // apiHost = environment.apiHost;
  @Input() menuShow: boolean;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
  }
  ngOnInit() {
    timer(300).pipe(
      map(t => {
        return [
          {"name":"帳號管理","level":3,"url":null,"menu":[
            {"name":"網路闖關競賽","level":null,"url":null,"menu":[
              {"name":"國中組學生帳號管理","level":null,"url":"/user/juniorStudent","menu":[]},
              {"name":"高中職五專組學生帳號管理","level":null,"url":"/user/seniorStudent","menu":[]},
            ]},
            {"name":"創意教學競賽","level":null,"url":null,"menu":[
              {"name":"國中組教師帳號管理","level":null,"url":"/user/juniorTeacher","menu":[]},
              {"name":"高中組教師帳號管理","level":null,"url":"/user/seniorTeacher","menu":[]},
            ]},
            {"name":"教育局縣市及評審","level":null,"url":null,"menu":[
              {"name":"教育局處及縣市帳號管理","level":null,"url":"","menu":[]},
              {"name":"教案評審委員帳號管理","level":null,"url":"/user/committee","menu":[]},
            ]},
            {"name":"管理後台帳號","level":null,"url":null,"menu":[
              {"name":"管理後台帳號管理","level":null,"url":"/user","menu":[]},
            ]},
          ]},
          {"name":"題庫管理","level":3,"url":null,"menu":[
            {"name":"試玩題庫","level":null,"url":null,"menu":[
              {"name":"國中組試玩題庫","level":null,"url":"/questionbank/questionbankJuniorTry","menu":[]},
              {"name":"高中組試玩題庫","level":null,"url":"/questionbank/questionbankSeniorTry","menu":[]},
            ]},
            {"name":"初賽題庫","level":null,"url":null,"menu":[
              {"name":"國中組初賽正式題庫","level":null,"url":"/questionbank/questionbankJuniorFirst","menu":[]},
              {"name":"國中組初賽備用題庫","level":null,"url":"/questionbank/questionbankJuniorFirstBackup","menu":[]},
              {"name":"高中職五專組初賽正式題庫","level":null,"url":"/questionbank/questionbankSeniorFirst","menu":[]},
              {"name":"高中職五專組初賽備用題庫","level":null,"url":"/questionbank/questionbankSeniorFirstBackup","menu":[]},
            ]},
            {"name":"決賽題庫","level":null,"url":null,"menu":[
              {"name":"國中組決賽題庫","level":null,"url":"/questionbank/questionbankJuniorFinal","menu":[]},
              {"name":"高中職五專組決賽題庫","level":null,"url":"/questionbank/questionbankSeniorFinal","menu":[]},
            ]},
          ]},
          {"name":"答題管理","level":3,"url":null,"menu":[
            {"name":"試玩答題","level":null,"url":null,"menu":[
              {"name":"試玩答題統計資訊","level":null,"url":"","menu":[]},
            ]},
            {"name":"初賽答題","level":null,"url":null,"menu":[
              {"name":"國中組初賽答題管理","level":null,"url":"/results/juniorFirst","menu":[]},
              {"name":"國中組初賽答題結果","level":null,"url":"/results/juniorFirstRecord","menu":[]},
              {"name":"高中職五專組初賽答題管理","level":null,"url":"/results/seniorFirst","menu":[]},
              {"name":"高中職五專組初賽答題結果","level":null,"url":"/results/seniorFirstRecord","menu":[]},
            ]},
            {"name":"決賽答題","level":null,"url":null,"menu":[
              {"name":"國中組決賽答題管理","level":null,"url":"/results/juniorFinal","menu":[]},
              {"name":"國中組決賽答題結果","level":null,"url":"/results/juniorFinalRecord","menu":[]},
              {"name":"高中職五專組決賽答題管理","level":null,"url":"/results/seniorFinal","menu":[]},
              {"name":"高中職五專組決賽答題結果","level":null,"url":"/results/seniorFinalRecord","menu":[]},
            ]},
          ]},
          // {"name":"答題管理","level":3,"url":null,"menu":[

          // ]},
          {
            name: '排行榜管理', level: 3, url: null, menu: [
              {
                name: '初賽結果', level: null, url: null, menu: [
                  { name: '國中組前25名排行', level: null, url: '/leaderboard/junior/preliminary/top25', menu: [] },
                  { name: '國中組所有排行', level: null, url: '/leaderboard/junior/preliminary', menu: [] },
                  { name: '高中職五專組前25名排行', level: null, url: '/leaderboard/senior/preliminary/top25', menu: [] },
                  { name: '高中職五專組所有排行', level: null, url: '/leaderboard/senior/preliminary', menu: [] }
                ]
              },
              {
                name: '決賽結果', level: null, url: null, menu: [
                  { name: '國中組決賽排行', level: null, url: '/leaderboard/junior/final', menu: [] },
                  { name: '', level: null, url: '/leaderboard/senior/final', menu: [] }
                ]
              },
            ]
          },

          // ]},
          {"name":"教案管理","level":2,"url":null,"menu":[
            {"name":"國中組教案管理","level":null,"url":"/lessonplan/junior","menu":[]},
            {"name":"高中組教案管理","level":null,"url":"/lessonplan/senior","menu":[]},
          ]},
          // {"name":"網站內容管理","level":2,"url":null,"menu":[

          // ]},
          {"name":"意見信箱管理","level":2,"url":null,"menu":[
            {"name":"意見信箱維護列表","level":null,"url":"/contact/contactMail","menu":[]},
          ]},
          // {"name":"學校資料管理","level":2,"url":null,"menu":[

          // ]},
         // {"name":"意見信箱管理","level":2,"url":null,"menu":[

          // ]},
          {"name":"學校資料管理","level":2,"url":null,"menu":[
            {"name":"學校資料維護","level":null,"url":"/schoolInfo/schoolInfo","menu":[]},
            {"name":"縣市分組與人數維護","level":null,"url":"/schoolInfo/cityInfo","menu":[]},
          ]},
          // {"name":"統計分析","level":2,"url":null,"menu":[

          // ]},
          {"name":"參數設定與紀錄","level":3,"url":null,"menu":[
            {"name":"競賽網站管理","level":null,"url":null,"menu":[
              {"name":"網站參數設定","level":null,"url":"/parameters/website","menu":[]},
            ]},
          ]},
        ];
      })
    )
    // this.http.get(`${this.apiHost}/api/menu`)
      .subscribe(data => {
        this.data = data;
        if (localStorage.getItem('menu-redirect') === 'menu-redirect') {
          this.router.navigate([this.getMenuUrl(data)]);
          localStorage.removeItem('menu-redirect');
        }
      },
        (rej) => { console.error('Could not load local data', rej); }
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
