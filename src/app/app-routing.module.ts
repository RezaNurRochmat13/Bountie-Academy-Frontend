import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './core/module/students/students.component';
import { ClassComponent } from './core/module/class/class.component';
import { InstructorComponent } from './core/module/instructor/instructor.component';
import { AddClassComponent } from './core/module/class/add-class/add-class.component';
import { EditClassComponent } from './core/module/class/edit-class/edit-class.component';


const routes: Routes = [
  {
    path: '',
    component: StudentsComponent,
  },
  {
    path: 'class',
    children: [
      {
        path: '',
        component: ClassComponent
      },
      {
        path: 'add',
        component: AddClassComponent
      },
      {
        path: 'edit/:id',
        component: EditClassComponent
      }
    ]
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
