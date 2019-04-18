import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Universe } from 'src/app/models/universe';
import { UniverseService } from 'src/app/universe.service';
import { SeriesService } from 'src/app/series.service';

@Component({
  selector: 'app-create-series',
  templateUrl: './create-series.component.html',
  styleUrls: ['./create-series.component.css']
})
export class CreateSeriesComponent implements OnInit {
  form: FormGroup;

  submitted = false;

  universes: Universe[];

  loading = true;

  name = new FormControl('', Validators.required);
  universe = new FormControl(null);

  constructor(private universeService: UniverseService, private seriesService: SeriesService, fb: FormBuilder, private router: Router) {
    this.form = fb.group({
      'name': this.name,
      'universe': this.universe
    });
  }

  ngOnInit() {
    this.universeService.UniversesAsObservable().subscribe(universes => {
      if (universes) {
        this.universes = universes;
        this.loading = false;
      }
    });
  }

  async onSubmit() {
    this.submitted = true;
    const name = this.name.value;
    const universe = this.universe.value;

    const response = await this.seriesService.create(name, universe);

    if (response.success) {
      this.router.navigate(['my-series']);
    } else {
      this.submitted = false;
      // TODO error handling
    }
  }

}
