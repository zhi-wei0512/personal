import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.scss'],
})
export class ComputerComponent implements OnInit {
  /** 儲存字元 */
  formula: string = '';
  /** 最終答案 */
  ansWer: number = 0;

  constructor() {}

  ngOnInit(): void {}

  // 按鈕數字、運算符號
  num(num: string) {
    this.formula += num;
    this.specialTreatment();
  }
  // 計算結果
  ans() {
    this.formula = this.last(this.formula);
    this.ansWer = eval(this.formula);
  }

  // 處理特殊情況
  specialTreatment() {
    // 小數點處理
    this.formula = this.fn(this.formula);
    // 排除開頭一個零以上和開頭零後面接數字的狀況，舉例說像式 00123 + 01235
    this.formula = this.formula
      .replace(/^0[0-9]+/, `0`)
      .replace(/([/*+-])0\d+/g, `$10`);
    // 正常的算式中不會出現相連的運算符號，比如 1+-2
    this.formula = this.formula
      .replace(/^[/*+-]+/, ``)
      .replace(/([/*+-])[/*+-]+/g, `$1`);
  }

  // 排除最後字元是運算符的情況
  last(formula: string) {
    const new_computingNumber = formula.split('');
    if (/[/*+-]/.test(new_computingNumber[new_computingNumber.length - 1])) {
      new_computingNumber.pop();
      return (formula = new_computingNumber.join(''));
    } else {
      return this.formula;
    }
  }

  // 1.算式開頭不能有小數點 .123 + 123
  // 2.不能有相連的小數點 1..23 + 8
  // 3.不會有 00.123 這樣的情況
  // 4.運算符號後面不能出現小數點 123 + .123
  // 5.同一組數字不會出現第二個小數點 123.123.3
  fn(formula: string) {
    const newStr = formula.replace(/^\.*/, ``);
    const _newStr = newStr.replace(/\.+/g, `.`);
    const __newStr = _newStr.replace(/\D00\.(\d+)/g, `0.$1`);
    const ___newStr = __newStr.replace(/([/*+-])\./g, `$1`);
    return ___newStr.replace(/(\d+)\.+(\d+)\.*/g, `$1.$2`);
  }

  //  套用千分位，把運算結果渲染到計算機上，如果數字是 10000 會被轉換成 10,000
  toCurrency(formula: string) {
    let newStr = formula.toString().split('.');
    newStr[0] = newStr[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return newStr.join('.');
  }

  // 刪除最後一個
  del() {
    let toArr = this.formula.split('');
    toArr.pop();
    this.formula = toArr.join('');
  }

  // AC 清除歸零
  clear() {
    this.ansWer = 0;
    this.formula = '';
  }
}
