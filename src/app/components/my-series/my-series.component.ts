import { Component, OnInit } from '@angular/core';
import { Series } from 'src/app/models/series';
import { AuthService } from 'src/app/auth.service';
import { SeriesService } from 'src/app/series.service';

@Component({
  selector: 'app-my-series',
  templateUrl: './my-series.component.html',
  styleUrls: ['./my-series.component.css']
})
export class MySeriesComponent implements OnInit {
  series: Series[];

  constructor(private authService: AuthService, private seriesService: SeriesService) {
    this.seriesService.SeriesAsObservable().subscribe(val => this.series = val);
  }

  ngOnInit() {
    (async () => {
      await this.seriesService.getAll();
    })();
  }

}
