import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
	state = "Left"

  constructor() { }

  ngOnInit() {
  }

  setState(val: string) {
  	this.state = val;
  }

}
