import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MissionService } from './mission.service';
import { ChildComponent } from './child/child.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'child', component: ChildComponent },
      { path: 'experience', component: ExperienceComponent },
      { path: 'education', component: EducationComponent },
    ])
  ],
  declarations: [
    AppComponent,
    ExperienceComponent,
    EducationComponent,
    HomeComponent,
    ChildComponent,
    
  ],
  providers:[
    MissionService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/