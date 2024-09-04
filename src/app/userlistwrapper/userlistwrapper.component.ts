import {
  Component,
  ViewChild,
  EventEmitter,
  ElementRef,
  Output,
  Input,
} from '@angular/core';
import { UserlistComponent } from '../userlist/userlist.component';

@Component({
  selector: 'app-userlistwrapper',
  standalone: true,
  imports: [UserlistComponent],
  templateUrl: './userlistwrapper.component.html',
  styleUrl: './userlistwrapper.component.css',
})
export class UserlistwrapperComponent {
  @ViewChild('search') search!: ElementRef<HTMLInputElement>;

  @Output() handleSearchData = new EventEmitter<HTMLInputElement>();

  @Input() ClearSearch!: (emailinput: HTMLInputElement) => void;

  searchUser(emailinput: HTMLInputElement) {
    if (emailinput.value !== '') this.handleSearchData.emit(emailinput);
  }
}
