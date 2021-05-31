import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RailODDailyTimetable } from '../entity/RailODDailyTimetable ';
declare var $: any;
@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss'],
})
export class TableDataComponent implements OnInit {
  emailsDataSource: any;
  totalCount: number;
  /** 起始車站名稱*/
  startTHSRstationValue: string;
  /** 終點車站名稱*/
  endTHSRstationValue: string;
  /** 起始車站ID*/
  startTHSRstationID: string;
  /** 終點車站ID*/
  endTHSRstationID: string;
  /** 取得指定[日期],[起迄站間]之時刻表資料 */
  RailODDailyTimetable: RailODDailyTimetable[];
  /** 欄位顯示 */
  cols: any[];
  date;
  time;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.cols = [
      { field: 'TrainDate', header: '日期' },
      { field: 'OriginStopTime.DepartureTime', header: '出發時間' },
      { field: 'DestinationStopTime.ArrivalTime', header: '抵達時間' },
    ];
  }
  getdata() {
    this.getRandomData().subscribe((data: RailODDailyTimetable[]) => {
      let RailODDailyTimetable: RailODDailyTimetable[] = [];
      data.forEach((val) => {
        if (val.OriginStopTime.DepartureTime > this.time) {
          RailODDailyTimetable.push(val);
          this.RailODDailyTimetable = [...RailODDailyTimetable];
        }
      });
    });
  }
  getTHSRstationValue(event, bool) {
    if (bool) {
      this.startTHSRstationValue = event;
    } else {
      this.endTHSRstationValue = event;
    }
  }
  getTHSRstationID(event, bool) {
    if (bool) {
      this.startTHSRstationID = event;
    } else {
      this.endTHSRstationID = event;
    }
  }

  getRandomData() {
    return this.http.get(
      `https://ptx.transportdata.tw/MOTC/v2/Rail/TRA/DailyTimetable/OD/${this.startTHSRstationValue}/to/${this.endTHSRstationValue}/${this.date}?$format=JSON`
    );
  }
}
