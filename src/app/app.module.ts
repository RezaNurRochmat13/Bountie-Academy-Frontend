// Angular module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

// Component import
import { StudentsComponent } from './core/module/students/students.component';
import { ClassComponent } from './core/module/class/class.component';
import { InstructorComponent } from './core/module/instructor/instructor.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AddClassComponent } from './core/module/class/add-class/add-class.component';
import { EditClassComponent } from './core/module/class/edit-class/edit-class.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ClassComponent,
    AddClassComponent,
    EditClassComponent,
    InstructorComponent,
    StudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
