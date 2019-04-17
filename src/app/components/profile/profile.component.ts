import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { User } from 'src/app/models/user';
import { Universe } from 'src/app/models/universe';
import { UniverseService } from 'src/app/universe.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
  universes: Universe[];

  loading = true;

  constructor(private authService: AuthService, private universeService: UniverseService) {
    this.authService.UserAsObservable().subscribe(user => {
      if (user) {
        this.user = user;

        this.loading = false;
      }
    });

    this.universeService.UniversesAsObservable().subscribe(universes => {
      if (universes) {
        const user_id = parseInt(this.user.id, 10);

        this.universes = universes.filter(u => u.user_id === user_id);
      }
    });
  }

  ngOnInit() {
  }

}
