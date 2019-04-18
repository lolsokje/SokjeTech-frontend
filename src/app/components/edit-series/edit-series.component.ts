import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Series } from 'src/app/models/series';
import { SeriesService } from 'src/app/series.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-series',
  templateUrl: './edit-series.component.html',
  styleUrls: ['./edit-series.component.css']
})
export class EditSeriesComponent implements OnInit {
  series: Series;

  form: FormGroup;

  name = new FormControl('', Validators.required);

  loading = true;
  submitted = false;

  constructor(private seriesService: SeriesService, private route: ActivatedRoute, fb: FormBuilder, private router: Router) {
    this.form = fb.group({
      'name': this.name
    });
  }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.seriesService.SeriesAsObservable().subscribe((val) => {
      if (val) {
        this.series = val.find(s => s.id === id);

        if (this.series) {
          this.name.setValue(this.series.name);
        }

        this.loading = false;
      }
    });
  }

  async onSubmit() {
    this.submitted = true;
    const value = this.name.value;
    const id = this.series.id;

    const response = await this.seriesService.edit(value, id);

    if (response.success) {
      this.seriesService.SeriesAsObservable().subscribe((val) => {
        const series = val.find(s => s.id === id);
        series.name = value;
      });
      this.router.navigate(['my-series']);
    } else {
      this.submitted = false;
      // TODO error handling
    }
  }

}
