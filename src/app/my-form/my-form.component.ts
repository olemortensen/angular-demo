import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";
import {User} from "../dto/user";
import {HttpErrorResponse} from "@angular/common/http";


@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

  email: String;
  firstname: String;
  lastname: String;
  street: String;
  city: String;
  postalcode: String;
  userService

  constructor(userService: UserService) {
    this.userService = userService;
  }

  ngOnInit() {
  }

  onSubmit() {
    const user = new User(this.firstname + " " + this.lastname, this.email);
    this.userService.saveUser(user).subscribe(response => {
      console.log("response", response);
    }, (error: HttpErrorResponse) => {
      console.log("error:", error);
    })
  }
}
