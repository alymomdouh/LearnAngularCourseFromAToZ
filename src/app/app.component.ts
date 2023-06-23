import { Component } from '@angular/core';
import { User } from './Auth/Model/user';
import { AccountService } from './Auth/Services';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';
import { AlertComponent } from './Shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //standalone: true,
  //imports: [NgIf, RouterOutlet, RouterLink, RouterLinkActive, AlertComponent]
})
export class AppComponent {
  title = 'LearnAngularCourse';
  user?: User | null;

  constructor(private accountService: AccountService) {
    this.accountService.user.subscribe(x => this.user = x);
  }

  logout() {
    this.accountService.logout();
  }
}
