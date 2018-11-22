import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public name:String;

  constructor(private router: Router) { }

  dataEntered(name) {
    this.name = name;
  }

  dynamicRouting() {
    this.router.navigate(['profile', this.name])
  }
  ngOnInit() {
  }

}
