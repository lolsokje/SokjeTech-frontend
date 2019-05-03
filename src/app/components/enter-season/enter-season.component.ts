import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enter-season',
  templateUrl: './enter-season.component.html',
  styleUrls: ['./enter-season.component.css']
})
export class EnterSeasonComponent implements OnInit {
  seasons = [];
  selectedSeason = null;

  constructor() { }

  ngOnInit() {
  }

}
