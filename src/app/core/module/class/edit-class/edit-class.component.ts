import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-class',
  templateUrl: './edit-class.component.html',
  styleUrls: ['./edit-class.component.css']
})
export class EditClassComponent implements OnInit {

  constructor(
    private location: Location
  ) { }

  ngOnInit() {
  }

  public back() {
    this.location.back();
  }

}
