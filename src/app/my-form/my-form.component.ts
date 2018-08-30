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
    alert('Submitted Data: ' + JSON.stringify(this));
  }
}
