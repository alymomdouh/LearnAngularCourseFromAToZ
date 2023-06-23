import { Component, OnInit } from '@angular/core';
import { AccountService } from '@app/Auth/Services';
import { first } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  //standalone: true,
  //imports: [RouterLink, NgFor, NgIf]
})
export class ListComponent implements OnInit {
  users?: any[];
  constructor(private accountService: AccountService) { }
  ngOnInit() {
    this.accountService.getAll()
      .pipe(first())
      .subscribe(users => this.users = users);
  }
  deleteUser(id: string) {
    const user = this.users!.find(x => x.id === id);
    user.isDeleting = true;
    this.accountService.delete(id)
      .pipe(first())
      .subscribe(() => this.users = this.users!.filter(x => x.id !== id));
  }
}
