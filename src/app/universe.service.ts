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

  constructor() {
      this.universes = new BehaviorSubject<Universe[]>(null);
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
          id: id,
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
    const token = sessionStorage.getItem('token');
    const uid = sessionStorage.getItem('uid');

    if (token && uid) {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
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
    const token = sessionStorage.getItem('token');
    const id = sessionStorage.getItem('uid');

    if (token && id) {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token} `,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user_id: id
        })
      });

      const json = await response.json();

      this.Universes = json;
    }
  }

  async delete(id: number) {
    const url = environment.baseApiUrl + '/universe/delete';
    const token = sessionStorage.getItem('token');
    const uid = sessionStorage.getItem('uid');

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

      return await response.json();
    } else {
      return {
        success: false,
        message: 'User not logged in.'
      };
    }
  }
}
