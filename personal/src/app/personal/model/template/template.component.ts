import { Component, OnInit } from '@angular/core';
import { ModelService } from './service/model.service';
import { GoogleSearch } from './googleSearch'
declare var jquery:any; // 這邊用 var
declare let $:any; // 當然 let 也可以
@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  constructor(private modelService: ModelService) { }
  gsInput
  AllValue = new GoogleSearch
  ngOnInit(): void {
    // this.modelService.afterCallApi.subscribe((data) =>{
    //   console.log(data)
    // });

    $(function () {
      $(".navmenu").mouseover(function () {
        console.log(123);
        // $(this).children("ul").css('display:none');
        $(this).children("ul").toggle();
      })
    })

      //menu-內層
  // $(function () {
  //   $(".List-item").mouseover(function () {
  //     $(this).children("ul").show();
  //   })
  //   $(".List-item").mouseover(function () {
  //     console.log(123);
  //     $(this).children("ul").hide();
  //   })
  // })
  //
  }
  gsInupt(gsInput?) {
    console.log(this.AllValue)

  }

}
