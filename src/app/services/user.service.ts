import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from "../dto/user";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseURL = "http://localhost:8080/demo/users";

  constructor(private http: HttpClient) {
  }

  saveUser(user: User): Observable<User> {
    console.log("user", user);
    return this.http.post<User>(this.baseURL, user,
      {headers: new HttpHeaders().set("Content-Type", "application/json")});
  }
}
