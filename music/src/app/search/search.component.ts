import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {SpotifyService} from "../services";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  query: string;
  results: Object;

  constructor(
    private router:Router,
    private route:ActivatedRoute
  ) {
    this.route.queryParams.subscribe(params=>{
      this.query = params['query'] || '';
    });

  }

  ngOnInit() {
  }

}
