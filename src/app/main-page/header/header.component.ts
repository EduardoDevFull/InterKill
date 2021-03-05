import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/user/user';
import { UserService } from 'src/app/core/user/user.service';

@Component({
  selector: 'nk-header',
  templateUrl: 'header.component.html',
  styleUrls: ["header.component.css"]
})

export class HeaderComponent {

  user$: Observable<User>;
  user!: User;

  constructor(userService: UserService) {
      this.user$ = userService.getUser();
      this.user$.subscribe(user => this.user = user);
  }
}
