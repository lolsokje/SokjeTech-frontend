import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/team.service';
import { CountryListService } from 'src/app/country-list.service';
import { Country } from 'src/app/models/country';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css']
})
export class CreateTeamComponent implements OnInit {
  submitted = false;
  countries = this.countryService.getAllCountries();
  filteredCountries: Country[];

  form: FormGroup;

  name = new FormControl('', Validators.required);
  short_name = new FormControl('', Validators.required);
  country = new FormControl('', Validators.required);
  countryTest = new FormControl('', Validators.required);

  constructor(fb: FormBuilder, private router: Router, private teamService: TeamService, private countryService: CountryListService) {
    this.form = fb.group({
      'name': this.name,
      'short_name': this.short_name,
      'country': this.country
    });
  }

  ngOnInit() {
  }

  async onSubmit() {
    this.submitted = true;

    console.log(await this.teamService.create(this.name.value, this.short_name.value, this.country.value));
  }

  async filterCountry(value: string) {
    if (value.length > 0) {
      this.filteredCountries = this.countryService.filterCountries(value);
    }
  }

  selectCountry(event: any) {
    const value = event.target.value;

    this.country.setValue( value);
    this.filteredCountries = [];
  }

}
