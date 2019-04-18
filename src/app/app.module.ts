import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { MyTeamsComponent } from './components/my-teams/my-teams.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CreateUniverseComponent } from './components/create-universe/create-universe.component';
import { MyUniversesComponent } from './components/my-universes/my-universes.component';
import { EditUniverseComponent } from './components/edit-universe/edit-universe.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CreateSeriesComponent } from './components/create-series/create-series.component';
import { SpinnerComponent } from './partials/spinner/spinner.component';
import { MySeriesComponent } from './components/my-series/my-series.component';
import { EditSeriesComponent } from './components/edit-series/edit-series.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MyTeamsComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NotFoundComponent,
    CreateUniverseComponent,
    MyUniversesComponent,
    EditUniverseComponent,
    ProfileComponent,
    CreateSeriesComponent,
    SpinnerComponent,
    MySeriesComponent,
    EditSeriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
