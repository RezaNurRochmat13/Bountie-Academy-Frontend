import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { StudentService } from 'src/app/core/service/student.service';
import { ToastrService } from 'ngx-toastr';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  addStudent: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private loadingBarSvc: LoadingBarService,
    private studentSvc: StudentService,
    private toastrSvc: ToastrService
  ) { }

  ngOnInit() {
    this.doInitFormAddStudent();
  }

  private doInitFormAddStudent() {
    this.addStudent = this.formBuilder.group({
      studentName: [''],
      studentGender: ['Select gender'],
      studentAddress: ['']
    });
  }

  public onFormAddStudentSubmit() {
    const addStudentPayload = {
      student_name: this.addStudent.value.studentName,
      student_gender: this.addStudent.value.studentGender,
      student_address: this.addStudent.value.studentAddress
    };
    this.loadingBarSvc.start();
    this.studentSvc.createNewStudent(addStudentPayload).subscribe(response => {
      this.loadingBarSvc.complete();
      this.toastrSvc.success('message', response.message);
      this.location.back();
    });
  }

  public back() {
    this.location.back();
  }

}
