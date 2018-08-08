import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

  firstname: String;
  lastname: String;
  street: String;
  city: String;
  postalcode: String;

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit() {
    alert('Thanks for submitting! Data: ' + JSON.stringify(this));
  }
}
