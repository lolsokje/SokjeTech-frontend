import { Injectable } from '@angular/core';
import * as countries from './country.json';
import { Country } from './models/country';

@Injectable({
  providedIn: 'root'
})
export class CountryListService {
  allCountries: Country[];

  constructor() {
    this.allCountries = (<any>countries).map((country) => {
      return {
        'country': country.country
      };
    });
  }

  getAllCountries() {
    return this.allCountries;
  }

  filterCountries(value: string) {
    return this.allCountries.filter(c => c.country.toLowerCase().includes(value.toLowerCase()));
  }
}
