import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClassService } from '../../service/class.service';
import { ToastrService } from 'ngx-toastr';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
  classData: [];

  constructor(
    private classSvc: ClassService,
    private router: Router,
    private loadingBarSvc: LoadingBarService,
    private toastrSvc: ToastrService
  ) { }

  ngOnInit() {
    this.getAllClassData();
  }

  private getAllClassData() {
    this.loadingBarSvc.start();
    this.classSvc.getAllClass().subscribe(response => {
      this.loadingBarSvc.complete();
      this.classData = response.data;
    });

  }

  public addNewClass() {
    this.router.navigate(['class/add']);
  }

  public editClass(classId: string) {
    this.router.navigate(['class/edit/', classId]);
  }

  public deleteClass(classId: string) {
    if (confirm("Are sure delete this?")) {
      this.loadingBarSvc.start();
      this.classSvc.deleteClass(classId).subscribe(response => {
        this.loadingBarSvc.complete();
        this.toastrSvc.success('message', response.message);
        this.getAllClassData();
      });
    }
  }


}
