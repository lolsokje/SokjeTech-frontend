import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  token: string;
  uid: string;

  constructor() {
    this.token = sessionStorage.getItem('token');
    this.uid = sessionStorage.getItem('uid');
  }

  async create(name: string, short_name: string, country: string) {
    const url = environment.baseApiUrl + '/team/create';

    if (this.token && this.uid) {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          short_name: short_name,
          country: country,
          uid: this.uid
        })
      });

      return await response.json();
    } else {
      return {
        success: false,
        message: 'User not logged in'
      }
    }
  }
}
