import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-teams',
  templateUrl: './my-teams.component.html',
  styleUrls: ['./my-teams.component.css']
})
export class MyTeamsComponent implements OnInit {
  teams = [
    {
      id: 0,
      name: 'Mercedes AMG Petronas F1',
      rating: this.randomRating(45, 60),
      primary: '#D5D5D5',
      secondary: '#56FFFD',
      drivers: [
        {
          id: 0,
          number: 44,
          firstName: 'Lewis',
          lastName: 'Hamilton',
          rating: this.randomRating(35, 50)
        },
        {
          id: 1,
          firstName: 'Valtteri',
          lastName: 'Bottas',
          number: 77,
          rating: this.randomRating(35, 50)
        }
      ]
    },
    {
      id: 1,
      name: 'Scuderia Ferrari Mission Winnow',
      rating: this.randomRating(45, 60),
      primary: '#FF0000',
      secondary: '#000000',
      drivers: [
        {
          id: 2,
          firstName: 'Sebastian',
          lastName: 'Vettel',
          number: 5,
          rating: this.randomRating(35, 50)
        },
        {
          id: 3,
          firstName: 'Charles',
          lastName: 'Leclerc',
          number: 16,
          rating: this.randomRating(35, 50)
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  randomRating(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
