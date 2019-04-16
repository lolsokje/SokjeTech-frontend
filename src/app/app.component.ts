import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SokjeTech-frontend';

  constructor(private authService: AuthService) {
    const token = sessionStorage.getItem('token');

    if (token) {
      this.authService.IsLoggedIn = true;
      (async () => {
        await this.authService.getUser(parseInt(sessionStorage.getItem('uid'), 10));
      })();
    }
  }
}
