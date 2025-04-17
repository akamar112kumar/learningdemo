import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudyRoutingModule } from './study-routing.module';
import { DirectivesPageComponent } from './directives-page/directives-page.component';



@NgModule({
  declarations: [
    DirectivesPageComponent
  ],
  imports: [
    CommonModule,
    StudyRoutingModule
  ]
})
export class StudyModule { }
