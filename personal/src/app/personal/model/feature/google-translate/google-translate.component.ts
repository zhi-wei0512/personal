import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-google-translate',
  templateUrl: './google-translate.component.html',
  styleUrls: ['./google-translate.component.scss']
})
export class GoogleTranslateComponent implements OnInit, AfterViewInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    var v = document.createElement("script");
    v.type = "text/javascript";
    v.innerHTML = "function googleTranslateElementInit() { new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element'); } ";
    this.elementRef.nativeElement.appendChild(v);
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    this.elementRef.nativeElement.appendChild(s);
  }
}
