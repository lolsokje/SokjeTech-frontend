import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Series } from 'src/app/models/series';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  series: BehaviorSubject<Series[]>;

  constructor() {
    this.series = new BehaviorSubject<Series[]>(null);
  }

  get Series(): Series[] {
    return this.series.value;
  }

  set Series(value: Series[]) {
    this.series.next(value);
  }

  SeriesAsObservable(): Observable<Series[]> {
    return this.series.asObservable();
  }

  async create(name: string, universe: number) {
    const url = environment.baseApiUrl + '/series/create';
    const token = sessionStorage.getItem('token');
    const id = sessionStorage.getItem('uid');

    if (token && id) {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          uid: id,
          universe: universe
        })
      });

      return await response.json();
    } else {
      return {
        success: false,
        message: 'Not logged in.'
      };
    }
  }

  async getAll() {
    const url = environment.baseApiUrl + '/series/get-all';
    const token = sessionStorage.getItem('token');
    const id = sessionStorage.getItem('uid');

    if (token && id) {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: id
        })
      });

      this.Series = await response.json();
    } else {
      return {
        success: false,
        message: 'Not logged in.'
      };
    }
  }
}
