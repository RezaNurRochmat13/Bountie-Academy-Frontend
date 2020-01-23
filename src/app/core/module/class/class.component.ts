import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClassService } from '../../service/class.service';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';

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
    private location: Location,
    private toastrSvc: ToastrService
  ) { }

  ngOnInit() {
    this.getAllClassData();
  }

  private getAllClassData() {
    this.classSvc.getAllClass().subscribe(response => {
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
      this.classSvc.deleteClass(classId).subscribe(response => {
        this.toastrSvc.success('message', response.message);
        this.getAllClassData();
      });
    }
  }


}
