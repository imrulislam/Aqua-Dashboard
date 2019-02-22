import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {



  constructor(
    private http: HttpClient
  ) {
  }

  loadUser() {
    const userUrl = 'https://angular-material-api.azurewebsites.net/users';
    return this.http.get(userUrl)
    .map(result => result);
  }


}
