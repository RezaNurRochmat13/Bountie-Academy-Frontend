import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ClassService } from 'src/app/core/service/class.service';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.css']
})
export class AddClassComponent implements OnInit {
  addClass: FormGroup;

  constructor(
    private classSvc: ClassService,
    private formBuilder: FormBuilder,
    private location: Location,
    private loadingBarSvc: LoadingBarService,
    private toastrSvc: ToastrService
  ) { }

  ngOnInit() {
    this.doInitAddClassForm();
  }

  private doInitAddClassForm() {
    this.addClass = this.formBuilder.group({
      className: [''],
      classQuota: [''],
      classDuration: ['']
    });
  }

  public onFormAddClassSubmit() {
    const objectAddClass = {
      class_name: this.addClass.value.className,
      class_quota: this.addClass.value.classQuota,
      class_duration: this.addClass.value.classDuration
    }
    this.loadingBarSvc.start();
    this.classSvc.createNewClass(objectAddClass).subscribe(response => {
      this.loadingBarSvc.complete();
      this.toastrSvc.success('message', response.message);
      this.location.back();
    });
  }

  public back() {
    this.location.back();
  }

}
