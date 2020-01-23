import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './core/students/students.component';
import { ClassComponent } from './core/class/class.component';
import { InstructorComponent } from './core/instructor/instructor.component';


const routes: Routes = [
  {
    path: '',
    component: StudentsComponent,
  },
  {
    path: 'class',
    component: ClassComponent
  },
  {
    path: 'instructor',
    component: InstructorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
