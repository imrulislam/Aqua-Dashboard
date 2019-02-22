import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-card',
  templateUrl: 'card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  users: any;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params['id'];
      if (!id) {
        id = 1;
      }
    });

    this.userService.loadUser().subscribe(response => {
      this.users = response;
    });
  }

}
