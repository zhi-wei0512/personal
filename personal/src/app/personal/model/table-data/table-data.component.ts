import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { bootstrapTable } from 'bootstrap';
declare var $: any;
@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss'],
})
export class TableDataComponent implements OnInit {
  emailsDataSource: any;
  totalCount: number;
  /** 起始車站*/
  startTHSRstationValue: string;
  /** 終點車站*/
  endTHSRstationValue: string;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    $('#table').bootstrapTable({
      // url: 'https://api.github.com/search/issues?q=repo:angular/components&page=1',
      // url:   'https://ptx.transportdata.tw/MOTC/v2/Rail/THSR/Station?$format=JSON',
      url: `https://ptx.transportdata.tw/MOTC/v2/Rail/TRA/DailyTimetable/OD/${this.startTHSRstationValue}/to/${this.endTHSRstationValue}/2021-04-05?$top=30&$format=JSON`,
      sidePagination: 'server',
      // responseHandler: function (res) {
      //   if (res.items.total !== undefined) {
      //     res = {
      //       total: res.items.total,
      //       rows: res.items.rows,
      //     };
      //   }
      //   if (res.items.total === undefined) {
      //     res = {
      //       total: res.items.length,
      //       rows: res.items,
      //     };
      //   }
      //   return res;
      // },
      // columns: [
      //   { field: 'url', title: 'url' },
      //   { field: 'user.login',  title: 'name', },
      //   { field: 'title', title: 'title' },
      //   { field: 'created_at', title: 'created_at' },
      // ],
      columns: [
        { field: 'url', title: 'url' },
        { field: 'user.login', title: 'name' },
        { field: 'title', title: 'title' },
        { field: 'created_at', title: 'created_at' },
      ],
      onClickRow: (row, $element) => {
        if ($element.prevObject[0].classList.value == 'bs-checkbox ') {
          $element.prevObject.find('input').click();
          return;
        }
      },
    });
  }
   getTHSRstationValue(event, bool) {
    if (bool) {
      this.startTHSRstationValue = event;
      console.log(this.startTHSRstationValue);
    } else {
      this.endTHSRstationValue = event;
      console.log(this.endTHSRstationValue);
    }
  }

  test(){
    return this.http.get(`https://ptx.transportdata.tw/MOTC/v2/Rail/TRA/DailyTimetable/OD/${this.startTHSRstationValue}/to/${this.endTHSRstationValue}/2021-04-05?$top=30&$format=JSON`)
  }
}
