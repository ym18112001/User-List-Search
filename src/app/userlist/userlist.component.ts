import { Component } from '@angular/core';

import { User } from './User';
import users from '../assets/data/users.json';
import { UserlistwrapperComponent } from '../userlistwrapper/userlistwrapper.component';
@Component({
  selector: 'app-userlist',
  standalone: true,
  imports: [UserlistwrapperComponent],
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.css',
})
export class UserlistComponent {
  iconclass: string = '';
  crossicon: string = 'fa-solid fa-xmark';
  tickicon: string = 'fa-solid fa-check';
  users: User[] = users;

  handleReceiveData(emailinput: HTMLInputElement) {
    this.users = this.users.filter((user) => user.email === emailinput.value);
  }

  clearSearch(emailinput: HTMLInputElement) {
    this.users = users;
    emailinput.value = '';
  }

  ClearSearch = (emailinput: HTMLInputElement) => {
    this.clearSearch(emailinput);
  };
}
