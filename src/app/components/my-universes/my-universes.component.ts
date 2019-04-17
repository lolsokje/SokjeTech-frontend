import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { UniverseService } from 'src/app/universe.service';
import { Universe } from 'src/app/models/universe';

@Component({
  selector: 'app-my-universes',
  templateUrl: './my-universes.component.html',
  styleUrls: ['./my-universes.component.css']
})
export class MyUniversesComponent implements OnInit {
  universes: Universe[];

  constructor(private authService: AuthService, private universeService: UniverseService) {
    this.universeService.UniversesAsObservable().subscribe(val => this.universes = val);
  }

  ngOnInit() {
    (async () => {
      await this.universeService.getAll();
    })();
  }

  async delete(id: number, event) {
    event.target.disabled = true;

    const response = await this.universeService.delete(id);

    if (response.success) {
      const index = this.universes.findIndex(u => u.id === id);
      this.universes.splice(index, 1);
    } else {
      event.target.disabled = false;
    }
  }

}
