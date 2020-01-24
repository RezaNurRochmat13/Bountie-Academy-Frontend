import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../../service/student.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  allStudents: [];

  constructor(
    private router: Router,
    private studentSvc: StudentService,
    private toastrSvc: ToastrService
  ) { }

  ngOnInit() {
    this.getAllStudentsData();
  }

  private getAllStudentsData() {
    this.studentSvc.getAllStudents().subscribe(response => {
      this.allStudents = response.data;
    });
  }

  public addNewStudent() {
    this.router.navigate(['/add']);
  }

  public editStudent(studentId: string) {
    this.router.navigate(['/edit/', studentId]);
  }

  public deleteStudents(studentId: string) {
    this.studentSvc.deleteStudent(studentId).subscribe(response => {
      this.toastrSvc.success('message', response.message);
      this.getAllStudentsData();
    });
  }

}
