import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-select-option',
  templateUrl: './select-option.component.html',
  styleUrls: ['./select-option.component.scss'],
})
export class SelectOptionComponent implements OnInit {
  /** 標題名稱 */
  @Input() labelName: string;
  /** 車站ID */
  @Output() valueID = new EventEmitter<string>();
  /** 車站名稱 */
  @Output() value = new EventEmitter<string>();
  /** 取得高鐵車站 */
  THSRstation: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getTHSRstation().subscribe((data) => {
      this.THSRstation = data;
    });
  }

  getTHSRstation() {
    return this.http.get(
      'https://ptx.transportdata.tw/MOTC/v2/Rail/THSR/Station?$format=JSON'
    );
  }

  OutputValue(event) {
    this.value.emit(event);
  }
}
