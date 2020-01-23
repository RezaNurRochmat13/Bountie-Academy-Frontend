import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './core/students/students.component';
import { ClassComponent } from './core/class/class.component';
import { InstructorComponent } from './core/instructor/instructor.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassComponent,
    InstructorComponent,
    StudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
