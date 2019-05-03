import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Series } from 'src/app/models/series';
import { SeriesService } from 'src/app/series.service';

@Component({
  selector: 'app-create-season',
  templateUrl: './create-season.component.html',
  styleUrls: ['./create-season.component.css']
})
export class CreateSeasonComponent implements OnInit {
  series: Series[];

  submitted = false;

  form: FormGroup;

  year = new FormControl('', Validators.required);
  selectedSeries = new FormControl('', Validators.required);

  constructor(private seriesService: SeriesService, fb: FormBuilder, private router: Router) {
    this.seriesService.SeriesAsObservable().subscribe(series => this.series = series);

    this.form = fb.group({
      'year': this.year,
      'selectedSeries': this.selectedSeries
    });
  }

  async ngOnInit() {
    // await this.seriesService.getAll();
  }

}
