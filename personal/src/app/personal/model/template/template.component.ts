import { Component, OnInit } from '@angular/core';
import {ModelService } from './service/model.service';
import { GoogleSearch} from './googleSearch'
@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  constructor( private modelService :ModelService) { }
  gsInput
  AllValue = new GoogleSearch
  ngOnInit(): void {
    // this.modelService.afterCallApi.subscribe((data) =>{
    //   console.log(data)
    // });
  }
  gsInupt(gsInput?){
    console.log(this.AllValue)
  }

}
