import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { StudentService } from 'src/app/core/service/student.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  editStudent: FormGroup;
  detailStudentData: any;
  studentId: string;
  routeSubscription: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private studentSvc: StudentService,
    private location: Location,
    private router: ActivatedRoute,
    private toastrSvc: ToastrService
  ) { }

  ngOnInit() {
    this.getSingleStudent();
    this.doInitFormUpdateStudent();
  }

  private getSingleStudent() {
    this.routeSubscription = this.router.params.subscribe(params => {
      this.studentId = params['id'];
      this.studentSvc.getSingleStudent(this.studentId).subscribe(response => {
        this.detailStudentData = response.data;
      });
    });
  }

  private doInitFormUpdateStudent() {
    this.editStudent = this.formBuilder.group({
      studentName: [''],
      studentGender: [''],
      studentAddress: ['']
    });
  }

  public onFormUpdateStudentSubmit() {
    const updateStudent = {
      student_name: this.editStudent.value.studentName,
      student_gender: this.editStudent.value.studentGender,
      student_address: this.editStudent.value.studentAddress
    };
    this.studentSvc.updateStudent(this.studentId, updateStudent).subscribe(response => {
      this.toastrSvc.success('message', response.message);
      this.location.back();
    });
  }

}
