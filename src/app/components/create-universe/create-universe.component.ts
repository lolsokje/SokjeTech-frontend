import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UniverseService } from 'src/app/universe.service';

@Component({
  selector: 'app-create-universe',
  templateUrl: './create-universe.component.html',
  styleUrls: ['./create-universe.component.css']
})
export class CreateUniverseComponent implements OnInit {
  submitted = false;

  form: FormGroup;

  name = new FormControl('', Validators.required);

  constructor(fb: FormBuilder, private router: Router, private universeService: UniverseService) {
      this.form = fb.group({
        'name': this.name
      });
  }

  ngOnInit() {
  }

  async onSubmit() {
    this.submitted = true;

    const value = this.name.value;

    const response = await this.universeService.create(value);

    if (response.success) {
      this.router.navigate(['my-universes']);
    } else {
      this.submitted = false;
      // TODO display error
    }
  }

}
