import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InstructorService } from '../../service/instructor.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.css']
})
export class InstructorComponent implements OnInit {
  allInstructorData: [];

  constructor(
    private instructorSvc: InstructorService,
    private router: Router,
    private toastrSvc: ToastrService
    ) { }

  ngOnInit() {
    this.getAllInstructorData();
  }

  private getAllInstructorData() {
    this.instructorSvc.getAllInstructors().subscribe(response => {
      this.allInstructorData = response.data;
    });
  }

  public addNewInstructor() {
    this.router.navigate(['instructor/add']);
  }

  public updateInstructor(instructorId: string) {
    this.router.navigate(['instructor/edit/', instructorId]);
  }

  public deleteInstructor(instructorId: string) {
    if (confirm("Are sure delete this?")) {
      this.instructorSvc.deleteInstructor(instructorId).subscribe(response => {
        this.toastrSvc.success('message', response.message);
        this.getAllInstructorData();
      });
    }
  }

}
