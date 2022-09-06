import { Component, OnInit, AfterViewInit } from '@angular/core';
declare const TagCanvas: any;

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
})
export class CanvasComponent implements OnInit, AfterViewInit {
  KeyWords = [
    { item: '1', label: '蠟筆小新' },
    { item: '2', label: '櫻桃小丸子' },
    { item: '3', label: '小丸子' },
    { item: '4', label: '大丸子' },
    { item: '5', label: '蠟筆小新' },
    { item: '6', label: '櫻桃小丸子' },
    { item: '7', label: '小丸子' },
    { item: '8', label: '大丸子' },
    { item: '9', label: '蠟筆小新' },
    { item: '10', label: '櫻桃小丸子' },
    { item: '11', label: '小丸子' },
    { item: '12', label: '大丸子' },
    { item: '13', label: '蠟筆小新' },
    { item: '14', label: '櫻桃小丸子' },
    { item: '15', label: '小丸子' },
    { item: '16', label: '大丸子' },
  ];

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initCanvas();
  }
  initCanvas() {
    TagCanvas.Start('myTag', 'tags', {
      textColour: null,
      reverse: true,
      frontSelect: true,
      weight: true,
      weightMode: 'both',
      weightSize: 1,
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
