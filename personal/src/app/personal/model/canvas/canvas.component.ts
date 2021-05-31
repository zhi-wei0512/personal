import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
declare const TagCanvas: any;

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
})
export class CanvasComponent implements OnInit {
  @ViewChild(' canvas ', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;

  newsKeyWords = [
    { item: '123', label: '蠟筆小新' },
    { item: '456', label: '櫻桃小丸子' },
    { item: '789', label: '小丸子' },
    { item: '102', label: '大丸子' },
  ];
  constructor( private ctx: CanvasRenderingContext2D) {

  }

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
  }
  initCanvas() {
    TagCanvas.Start('myTag', 'tags', {
      textColour: null,
      reverse: true,
      frontSelect: true,
      weight: true,
      weightMode: 'both',
      weightSize: 1,
      weightGradient: {
        0: '測試',
        0.4: '測試1',
        0.8: '測試3',
      },
      textFont: '微軟正黑體',
      outlineColour: '#eeee',
      bgRadius: 5,
      depth: 1,
      initial: [0.1, 0.1],
      maxSpeed: 0.05,
      minSpeed: 0.0,
      wheelZoom: false,
      outlineMethod: 'block',
      outlineRadius: 5,
      pulsateTime: 1,
      pulsateTo: 1.0,
    });
  }
}
