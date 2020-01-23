import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClassService } from '../../service/class.service';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
  classData: [];

  constructor(
    private classSvc: ClassService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllClassData();
  }

  private getAllClassData() {
    this.classSvc.getAllClass().subscribe(response => {
      this.classData = response.data;
      console.log(response.data);
    });

  }

  public addNewClass() {
    this.router.navigate(['class/add']);
  }

}
