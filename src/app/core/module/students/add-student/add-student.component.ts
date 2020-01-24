import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { StudentService } from 'src/app/core/service/student.service';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  addStudent: FormGroup;

  constructor(
    private studentSvc: StudentService,
    private formBuilder: FormBuilder,
    private location: Location,
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
    this.studentSvc.createNewStudent(addStudentPayload).subscribe(response => {
      this.toastrSvc.success('message', response.message);
      this.location.back();
    });
  }

}
