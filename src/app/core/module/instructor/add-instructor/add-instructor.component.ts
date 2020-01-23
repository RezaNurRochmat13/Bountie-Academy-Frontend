import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';
import { InstructorService } from 'src/app/core/service/instructor.service';

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
    private toastrSvc: ToastrService,
    private location: Location
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
    this.instructorSvc.createNewInstructor(addInstructorBody).subscribe(response => {
      this.toastrSvc.success('message', response.message);
      this.location.back();
    });
  }

  public back() {
    this.location.back();
  }

}
