import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.scss']
})
export class ComputerComponent implements OnInit {

  Ans: number = 0;
  numArray1: any = [];
  numArray2: any = [];
  constructor() { }

  ngOnInit(): void {
  }

  num(num?: number) {
    this.numArray1.push(num);
    console.log('this.numArray1', this.numArray1);
    return this.numArray1;
  }
  opr(opr?: string) {
    if (opr === '+') {
      console.log(this.numArray2);
      if (this.numArray2 == '') {
        this.numArray2 = this.numArray1;
        console.log('this.numArray2', this.numArray2)
        this.numArray1 = [];
        //第一次按鈕
      } else {
        console.log('第二次 ')
        console.log('this.numArray1', this.numArray1);
        console.log('this.numArray2', this.numArray2);
        this.numArray1.forEach((val)=>{
          this.Ans +=val;
        })
        this.numArray2.forEach((val)=>{
          this.Ans +=val;
        })
        console.log(' this.Ans', this.Ans)
        return this.numArray2 + this.numArray1;
        //第二次時 才動作
      }
    }
  }
  clear() {
    this.numArray1 = [];
    this.numArray2 = [];
  }
}
