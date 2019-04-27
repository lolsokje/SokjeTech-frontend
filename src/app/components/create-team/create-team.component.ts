import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/team.service';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css']
})
export class CreateTeamComponent implements OnInit {
  submitted = false;

  form: FormGroup;

  name = new FormControl('', Validators.required);
  short_name = new FormControl('', Validators.required);
  country = new FormControl('', Validators.required);

  constructor(fb: FormBuilder, private router: Router, private teamService: TeamService) {
    this.form = fb.group({
      'name': this.name,
      'short_name': this.short_name,
      'country': this.country
    });
  }

  ngOnInit() {
  }

  async onSubmit() {
    console.log(this.name, this.short_name, this.country);
  }

}
