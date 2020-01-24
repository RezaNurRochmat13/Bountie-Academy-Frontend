import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../../service/student.service';
import { ToastrService } from 'ngx-toastr';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  allStudents: [];

  constructor(
    private loadingBarSvc: LoadingBarService,
    private router: Router,
    private studentSvc: StudentService,
    private toastrSvc: ToastrService
  ) { }

  ngOnInit() {
    this.getAllStudentsData();
  }

  private getAllStudentsData() {
    this.loadingBarSvc.start();
    this.studentSvc.getAllStudents().subscribe(response => {
      this.loadingBarSvc.complete();
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
    if(confirm("Are you delete this?")) {
      this.loadingBarSvc.start();
      this.studentSvc.deleteStudent(studentId).subscribe(response => {
        this.loadingBarSvc.complete();
        this.toastrSvc.success('message', response.message);
        this.getAllStudentsData();
    });
    }
    
  }

}
