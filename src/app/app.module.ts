import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ExperienceComponent } from './experience/experience.component';
import { LandingComponent } from './page/landing/landing.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { LearningComponent } from './page/learning/learning.component';
import { AuthServiceService } from './service/auth-service/auth-service.service';
import { LoginComponent } from './shared/components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent,
    ExperienceComponent,
    SidebarComponent,
    LearningComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot([]),
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    DatePipe,
    AuthServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
