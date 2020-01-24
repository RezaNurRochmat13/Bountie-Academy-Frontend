import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { InstructorService } from 'src/app/core/service/instructor.service';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'app-add-instructor',
  templateUrl: './add-instructor.component.html',
  styleUrls: ['./add-instructor.component.css']
})
export class AddInstructorComponent implements OnInit {
  addInstructor: FormGroup;

  constructor(
    private instructorSvc: InstructorService,
    private formBuilder: FormBuilder,
    private location: Location,
    private loadingBarSvc: LoadingBarService,
    private toastrSvc: ToastrService
  ) { }

  ngOnInit() {
    this.doInitFormAddInstructor();
  }

  private doInitFormAddInstructor() {
    this.addInstructor = this.formBuilder.group({
      instructorName: [''],
      instructorProficiency: ['']
    });
  }

  public onFormAddInstructorSubmit() {
    const addInstructorBody = {
      instructor_name: this.addInstructor.value.instructorName,
      instructor_proficiency: this.addInstructor.value.instructorProficiency
    };
    this.loadingBarSvc.start();
    this.instructorSvc.createNewInstructor(addInstructorBody).subscribe(response => {
      this.loadingBarSvc.complete();
      this.toastrSvc.success('message', response.message);
      this.location.back();
    });
  }

  public back() {
    this.location.back();
  }

}
