import { Component } from '@angular/core';
import { User } from '@app/Auth/Model/user';
import { AccountService } from '@app/Auth/Services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  user: User | null;

  constructor(private accountService: AccountService) {
    this.user = this.accountService.userValue;
  }
}
