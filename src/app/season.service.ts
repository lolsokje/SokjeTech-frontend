import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SeasonService {
  token: string;
  uid: string;

  constructor() {
    this.token = sessionStorage.getItem('token');
    this.uid = sessionStorage.getItem('uid');
  }

  async create(year: string, selectedSeries: string) {
    const url = environment.baseApiUrl + '/season/create';

    if (this.token && this.uid) {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          year: year,
          selectedSeries: selectedSeries
        })
      });
    } else {
      return {
        success: false,
        message: 'User not logged in'
      };
    }
  }
}
