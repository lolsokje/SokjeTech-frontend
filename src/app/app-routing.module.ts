import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyTeamsComponent } from 'src/app/components/my-teams/my-teams.component';

const routes: Routes = [
  { path: 'my-teams', component: MyTeamsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
