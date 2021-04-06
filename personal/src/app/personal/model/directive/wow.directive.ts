declare const WOW: any;

import { EnumScrollType } from '../entity/EnumScrollType';
import { Directive, ElementRef, Input, AfterViewInit, OnInit, Renderer2, OnDestroy } from '@angular/core';
import { debounceTime, throttle } from 'rxjs/operators';
import { fromEvent , interval} from 'rxjs';
@Directive({
  selector: '[tmWow]'
})
export class TmWowDirective implements OnInit, AfterViewInit, OnDestroy{
  elementNode = this.ele.nativeElement;         // 取得綁定的元素DOM
  @Input() effectName = 'slideInLeft';          // 運用特效
  @Input() applyScroll = EnumScrollType.Down;   // 應用特效時機
  @Input() replay = false;                      // 是否重複特效
  @Input() iteration: string;                   // 是否重複撥放
  @Input() duration: string;                    // 每次撥放時長
  @Input() offset: string;                      // 距離可視區塊多少開始動畫
  @Input() delay: string;                       // 動畫觸發後的停滯時間
  wow: any;
  @Input() condition = true;
  animateEnd = false;
  scroll$;
  constructor(private ele: ElementRef, private render: Renderer2) { }
  ngOnInit() {
    // 將套件新增原型方法addBox，來重複特效用
    if (this.condition) {
      WOW.prototype.addBox = function (e) {
        this.boxes.push(e);
      }
      // 取得套件實例
      this.wow = new WOW();
    }
  }
  ngAfterViewInit() {
    /**
     * 在viewInit後開始抓取元素
     * 判斷如果自己本身為IMG
     * 或子層元素為IMG
     * 如果自身為IMG，監聽自己的load事件，完成後開始計算宿主元素高度
     * 如果子層元素有IMG，監聽它的load事件，完成後開始計算宿主元素高度
     * 如都沒有，直接開始計算宿主元素高度
     * 觸發wow動畫
    */

    if (this.condition) {
      const isImg = this.elementNode.tagName === 'IMG'
      const haveImg = this.elementNode.querySelector('img');
      if (haveImg) {
        this.render.listen(haveImg, 'load', (evt) => {
          this.wowInitProcess()
        })
      } else if (isImg) {
        this.render.listen(this.elementNode, 'load', (evt) => {
          this.wowInitProcess()
        })
      } else {
        this.wowInitProcess()
      }
    }
  }

  ngOnDestroy() {
    if(this.scroll$) {
      this.scroll$.unsubscribe();
    }
  }

  /** 程式初始化流程 */
  wowInitProcess() {
    this.setElementAttribute();
    this.detecObj(this.elementNode);
    this.wow.init()
  }

  one(dom, event, callback) {
    function handler(e) {
        callback.call(this, e);
        this.removeEventListener(event, handler);
    }
    dom.addEventListener(event, handler);
}

  /** 設定宿主元素屬性 */
  setElementAttribute() {
    /**
     * 以宿主元素傳進的屬性來構成物件
     * 以物件的鍵值跑迴圈
     * 如果此鍵有值
     * 將宿主元素加上屬性 data-wow-${attrKey}=value
     */
    const attrArray = {
      iteration: this.iteration,
      duration: this.duration + 's',
      offset: this.offset,
      delay: this.delay + 's'
    };

    Object.keys(attrArray).forEach((attrKey) => {
      if (attrArray[attrKey]) {
        this.elementNode.setAttribute(`data-wow-${attrKey}`, attrArray[attrKey])
      }
    });
  }

  /** 計算宿主元素高度 */
  detecObj(element: HTMLElement) {
    // 將元素加上class wow、傳入的效果名稱
    element.classList.add('wow', this.effectName);
    // 取得元素本身的高度
    const contentHeight = element.getBoundingClientRect().height;
    // this.one(this.elementNode, 'transitionend', this.detectAnimateFinish)
    if (this.replay) {
      // 如果傳入的replay為true
      // window滾動時，呼叫scrollDetect(元素，元素位置)
      // window.addEventListener('scroll', () =>
      //   this.scrollDetect(element, contentHeight)
      // );

      this.scroll$ = fromEvent(window, 'scroll').pipe(
        debounceTime(50), throttle(ev => interval(50)))
        .subscribe(() => this.scrollDetect(element, contentHeight));
    }
  }

  detectAnimateFinish() {
    this.animateEnd = true
  }

  /** 計算宿主元素是否於可視範圍內 */
  scrollDetect(element: HTMLElement, contentHeight: number) {
    if (!this.animateEnd) {
      // 取得元件距離視窗的位置
      const objPos = element.getBoundingClientRect().top;
      // 如果 objpos 物件對於視窗上方的距離
      const invisible = objPos <= contentHeight * -1;
      // 判斷如果元件超出可視範圍上緣
      const visible = window
        .getComputedStyle(element)
        .getPropertyValue('visibility');
      // 取得元素上的visibility屬性(由wowjs加上)
      if (invisible && visible !== 'hidden' && this.applyScroll !== EnumScrollType.Down) {
        /** 如果元素超出畫面上方
          * 且還未撥放動畫
          * 且設定不是下滾動觸發(上滾動或上下滾動)
          * 初始化該元素的animate狀態
          */
        this.resetAnimateCss(element);
      }
      if (objPos >= window.innerHeight && visible === 'visible' && this.applyScroll !== EnumScrollType.Up) {
        /** 如果元素超出畫面下方
          * 且動畫已經撥放完
          * 且設定不是上滾動觸發(上滾動或上下滾動)
          *  初始化該元素的animate狀態
          */
        this.resetAnimateCss(element);
      }
    }
  }

  /** 重新初始化wow */
  resetAnimateCss(element: HTMLElement) {
    // 元素清空wowjs加上的class或style
    element.classList.remove('animated');
    element.style.cssText = 'visibility: hidden; animation-name: none';
    // 呼叫addBox方法初始化新的動畫
    this.wow.addBox(element);
    this.animateEnd = false
  }
}
