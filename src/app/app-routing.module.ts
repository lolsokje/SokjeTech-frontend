import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyTeamsComponent } from 'src/app/components/my-teams/my-teams.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { RegisterComponent } from 'src/app/components/register/register.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { NotFoundComponent } from 'src/app/components/not-found/not-found.component';
import { CreateUniverseComponent } from 'src/app/components/create-universe/create-universe.component';
import { MyUniversesComponent } from 'src/app/components/my-universes/my-universes.component';
import { EditUniverseComponent } from 'src/app/components/edit-universe/edit-universe.component';
import { ProfileComponent } from 'src/app/components/profile/profile.component';
import { CreateSeriesComponent } from 'src/app/components/create-series/create-series.component';
import { MySeriesComponent } from 'src/app/components/my-series/my-series.component';
import { EditSeriesComponent } from 'src/app/components/edit-series/edit-series.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'my-teams', component: MyTeamsComponent },
  { path: 'my-universes', component: MyUniversesComponent },
  { path: 'edit-universe/:id', component: EditUniverseComponent },
  { path: 'create-universe', component: CreateUniverseComponent },
  { path: 'my-series', component: MySeriesComponent },
  { path: 'edit-series/:id', component: EditSeriesComponent },
  { path: 'create-series', component: CreateSeriesComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
