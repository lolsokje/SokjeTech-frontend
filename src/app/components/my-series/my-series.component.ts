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

  async delete(id: number, event) {
    event.target.disabled = true;

    const response = await this.seriesService.delete(id);

    if (response.success) {
      const index = this.series.findIndex(s => s.id === id);
      this.series.splice(index, 1);
    } else {
      event.target.disabled = false;
    }
  }

}
