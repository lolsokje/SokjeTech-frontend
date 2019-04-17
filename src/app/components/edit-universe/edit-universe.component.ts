import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Universe } from 'src/app/models/universe';
import { UniverseService } from 'src/app/universe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-universe',
  templateUrl: './edit-universe.component.html',
  styleUrls: ['./edit-universe.component.css']
})
export class EditUniverseComponent implements OnInit {
  universe: Universe;

  form: FormGroup;

  name = new FormControl('', Validators.required);

  loading = true;
  submitted = false;

  constructor(private universeService: UniverseService, private route: ActivatedRoute, fb: FormBuilder, private router: Router) {
    this.form = fb.group({
      'name': this.name
    });
  }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.universeService.UniversesAsObservable().subscribe((val) => {
      if (val) {
        this.universe = val.find(u => u.id === id);

        if (this.universe) {
          this.name.setValue(this.universe.name);
        }

        this.loading = false;
      }
    });
  }

  async onSubmit() {
    this.submitted = true;
    const value = this.name.value;
    const id = this.universe.id;

    const response = await this.universeService.edit(value, id);

    if (response.success) {
      this.universeService.UniversesAsObservable().subscribe((val) => {
        const universe = val.find(u => u.id === id);
        universe.name = value;
      });
      this.router.navigate(['my-universes']);
    } else {
      this.submitted = false;
      // TODO error handling
    }
  }

}
