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
  currentStep = 1;
  lastStep = 5;

  submitted = false;

  form: FormGroup;

  year = new FormControl('', Validators.required);
  selectedSeries = new FormControl('', Validators.required);
  maxTeams = new FormControl('', Validators.required);
  maxDrivers = new FormControl('', Validators.required);
  minRaceDriverAge = new FormControl('', Validators.required);
  maxRaceDriverAge = new FormControl('', Validators.required);
  minReserveDriverAge = new FormControl('', Validators.required);
  maxReserveDriverAge = new FormControl('', Validators.required);
  maxReserves = new FormControl('', Validators.required);
  qualySessions = new FormControl('', Validators.required);
  qualyRuns = new FormControl('', Validators.required);
  pitStops = new FormControl('', Validators.required);
  minQualyRunRNG = new FormControl('', Validators.required);
  maxQualyRunRNG = new FormControl('', Validators.required);
  minStintRNG = new FormControl('', Validators.required);
  maxStintRNG = new FormControl('', Validators.required);
  minPitstopLoss = new FormControl('', Validators.required);
  maxPitstopLoss = new FormControl('', Validators.required);
  minDnfRng = new FormControl('', Validators.required);
  maxDnfRng = new FormControl('', Validators.required);
  dnfStart = new FormControl('', Validators.required);
  minTeamDevRNG = new FormControl('', Validators.required);
  maxTeamDevRNG = new FormControl('', Validators.required);
  minDriverDevRNG = new FormControl('', Validators.required);
  maxDriverDevRNG = new FormControl('', Validators.required);

  constructor(private seriesService: SeriesService, fb: FormBuilder, private router: Router) {
    this.seriesService.SeriesAsObservable().subscribe(series => this.series = series);

    this.form = fb.group({
      'year': this.year,
      'selectedSeries': this.selectedSeries,
      'max-teams': this.maxTeams,
      'max-drivers': this.maxDrivers,
      'max-reserves': this.maxReserves,
      'min-race-driver-age': this.minRaceDriverAge,
      'max-race-driver-age': this.maxRaceDriverAge,
      'min-reserve-driver-age': this.minReserveDriverAge,
      'max-reserve-driver-age': this.maxReserveDriverAge,
      'qualy-sessions': this.qualySessions,
      'qualy-runs': this.qualyRuns,
      'pitstops': this.pitStops,
      'min-qualy-rng': this.minQualyRunRNG,
      'max-qualy-rng': this.maxQualyRunRNG,
      'min-stint-rng': this.minStintRNG,
      'max-stint-rng': this.maxStintRNG,
      'min-pitstop-loss': this.minPitstopLoss,
      'max-pitstop-loss': this.maxPitstopLoss,
      'min-dnf-rng': this.minDnfRng,
      'max-dnf-rng': this.maxDnfRng,
      'dnf-start': this.dnfStart,
      'min-team-dev-rng': this.minTeamDevRNG,
      'max-team-dev-rng': this.maxTeamDevRNG,
      'min-driver-dev-rng': this.minDriverDevRNG,
      'max-driver-dev-rng': this.maxDriverDevRNG
    });
  }

  ngOnInit() {}

  async onSubmit() {
    this.submitted = true;

    const year = this.year.value;
    const selectedSeries = this.selectedSeries.value;
  }

  nextStep() {
    this.currentStep++;
  }

  previousStep() {
    this.currentStep--;
  }

}
