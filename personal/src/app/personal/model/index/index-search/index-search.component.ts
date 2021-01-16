import { Component, OnInit } from '@angular/core';
import { Router, RouterModule ,ActivatedRoute} from '@angular/router'; // CLI imports router
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-index-search',
  templateUrl: './index-search.component.html',
  styleUrls: ['./index-search.component.scss']
})
export class IndexSearchComponent implements OnInit {

  constructor(private route: ActivatedRoute,private http: HttpClient) { }
 name
  ngOnInit(): void {
    this.route.queryParams.subscribe((params)=>{
      this.name = params['name'];
      console.log(params)
      console.log(params.search);
      this.getSearch(params.search).subscribe((data)=> { data})
    })
  }
  getSearch(query){
   return this.http.get(`http://localhost:8080/api/search?moduleKey=OBJECT_DB&limit=10&query=%7B${query}%7D`)
  }
}
