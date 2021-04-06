import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router'; // CLI imports router
import { HttpClient } from '@angular/common/http';
import { GoogleSearch } from '../../model/template/googleSearch'
@Component({
  selector: 'app-googlde-search',
  templateUrl: './googlde-search.component.html',
  styleUrls: ['./googlde-search.component.scss']
})
export class GoogldeSearchComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http: HttpClient) { }
  name
  AllValue = new GoogleSearch
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.name = params['name'];
      console.log(params)
      console.log(params.search);
      this.getSearch(params.search).subscribe((data) => { data })
    })
  }
  getSearch(query) {
    return this.http.get(`http://localhost:8080/api/search?moduleKey=OBJECT_DB&limit=10&query=%7B${query}%7D`)
  }
}
