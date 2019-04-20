import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Universe } from 'src/app/models/universe';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UniverseService {
  universes: BehaviorSubject<Universe[]>;

  token: string;
  uid: number;

  constructor() {
      this.universes = new BehaviorSubject<Universe[]>(null);
      this.token = sessionStorage.getItem('token');
      this.uid = parseInt(sessionStorage.getItem('uid'), 10);
  }

  get Universes(): Universe[] {
    return this.universes.value;
  }

  set Universes(value: Universe[]) {
    this.universes.next(value);
  }

  UniversesAsObservable(): Observable<Universe[]> {
    return this.universes.asObservable();
  }

  async create(name: string) {
    const url = environment.baseApiUrl + '/universe/create';

    if (this.token && this.uid) {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: this.uid,
          name: name
        })
      });

      return await response.json();
    } else {
      return {
        success: false,
        message: 'User not logged in'
      };
    }
  }

  async edit(name: string, id: number) {
    const url = environment.baseApiUrl + '/universe/edit';

    if (this.token && this.uid) {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: id,
          name: name
        })
      });

      const json = await response.json();

      return json;
    } else {
      return {
        success: false,
        message: 'User not logged in.'
      };
    }
  }

  async getAll() {
    const url = environment.baseApiUrl + '/universe/get-all';

    if (this.token && this.uid) {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.token} `
        }
      });

      const json = await response.json();

      this.Universes = json;
    }
  }

  async delete(id: number) {
    const url = environment.baseApiUrl + '/universe/delete';

    if (this.token && this.uid) {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.token}`,
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
        message: 'User not logged in.'
      };
    }
  }
}
