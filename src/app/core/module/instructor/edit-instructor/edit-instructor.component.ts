import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { InstructorService } from 'src/app/core/service/instructor.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-instructor',
  templateUrl: './edit-instructor.component.html',
  styleUrls: ['./edit-instructor.component.css']
})
export class EditInstructorComponent implements OnInit {
  routeSubscription: Subscription;
  instructorId: string;
  detailInstructor: any;
  editInstructor: FormGroup;

  constructor(
    private instructorSvc: InstructorService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private location: Location,
    private toastrSvc: ToastrService
  ) { }

  ngOnInit() {
    this.getSingleInstructor();
    this.doInitFormUpdateInstructor();
  }

  private getSingleInstructor() {
    this.routeSubscription = this.route.params.subscribe(params => {
      this.instructorId = params['id'];
      this.instructorSvc.getSingleInstructor(this.instructorId).subscribe(response => {
        this.detailInstructor = response.data;
      });
    });
  }

  private doInitFormUpdateInstructor() {
    this.editInstructor = this.formBuilder.group({
      instructorName: [''],
      instructorProficiency: ['']
    });
  }

  public onFormUpdateInstructorSubmitted() {
    const updateInstructor = {
      instructor_name: this.editInstructor.value.instructorName,
      instructor_proficiency: this.editInstructor.value.instructorProficiency
    };
    this.instructorSvc.updateInstructor(this.instructorId, updateInstructor).subscribe(response => {
      this.toastrSvc.success('message', response.message);
      this.back();
    });
  }

  public back() {
    this.location.back();
  }

}
