import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  parentDetails;
  constructor() { }

  ngOnInit() {
    this.parentDetails = [{
      id:"1",
      name: "dfcdw",
      email: "fcsd"
    },
    {
      id:"2",
      name: "dfcdw",
      email: "fcsd"
    }]
  }

  childValues($values) {
    console.log($values);
  }

}
