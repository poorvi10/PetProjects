import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

   public userId;
  constructor(private route: ActivatedRoute) { 
    this.route.params.subscribe( params => {

      console.log(params);
      this.userId = params.id;
    }
  );
  }

  ngOnInit() {

  }

}
