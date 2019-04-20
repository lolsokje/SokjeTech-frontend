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

  token: string;
  uid: number;

  constructor() {
    this.series = new BehaviorSubject<Series[]>(null);

    this.token = sessionStorage.getItem('token');
    this.uid = parseInt(sessionStorage.getItem('uid'), 10);
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

    if (this.token && this.uid) {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          uid: this.uid,
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

  async edit(name: string, id: number) {
    const url = environment.baseApiUrl + '/series/edit';

    if (this.token && this.uid) {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          id: id,
          user_id: this.uid
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

    if (this.token && this.uid) {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.token}`
        }
      });

      this.Series = await response.json();
    } else {
      return {
        success: false,
        message: 'Not logged in.'
      };
    }
  }

  async delete(id: number) {
    const url = environment.baseApiUrl + '/series/delete';

    if (this.token && this.uid) {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.token} `,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: id
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
}
