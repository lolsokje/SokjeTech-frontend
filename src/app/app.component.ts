import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { UniverseService } from 'src/app/universe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SokjeTech-frontend';

  constructor(private authService: AuthService, private universeService: UniverseService) {
    const token = sessionStorage.getItem('token');
    const id = sessionStorage.getItem('uid');

    if (token && id) {
      this.authService.IsLoggedIn = true;
      (async () => {
        await this.authService.getUser(parseInt(id, 10));
        await this.universeService.getAll();
      })();
    }
  }
}
