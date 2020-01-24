import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ClassService } from 'src/app/core/service/class.service';
import { ToastrService } from 'ngx-toastr';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'app-edit-class',
  templateUrl: './edit-class.component.html',
  styleUrls: ['./edit-class.component.css']
})
export class EditClassComponent implements OnInit {
  detailClass: any;
  classId: string;
  editClass: FormGroup;
  routeSubscription: Subscription;

  constructor(
    private classSvc: ClassService,
    private formBuilder: FormBuilder,
    private location: Location,
    private loadingBarSvc: LoadingBarService,
    private toastrSvc: ToastrService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getSingleClass();
    this.doInitFormEditClass();
  }

  private getSingleClass() {
    this.routeSubscription = this.route.params.subscribe(params => {
      this.classId = params['id'];
      this.classSvc.getSingleClass(this.classId).subscribe(response => {
        this.detailClass = response.data;
      });
    });
  }

  private doInitFormEditClass() {
    this.editClass = this.formBuilder.group({
      className: [''],
      classQuota: [''],
      classDuration: ['']
    });
  }

  public onFormUpdateSubmit() {
    const updateClassPayload = {
      class_name: this.editClass.value.className,
      class_quota: this.editClass.value.classQuota,
      class_duration: this.editClass.value.classDuration
    };
    this.loadingBarSvc.start();
    this.classSvc.updateClass(this.classId, updateClassPayload).subscribe(response => {
      this.loadingBarSvc.complete();
        this.toastrSvc.success('message', response.message);
        this.location.back();
    });
  }

  public back() {
    this.location.back();
  }

}
