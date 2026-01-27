import { Component } from '@angular/core';

@Component({
  selector: 'app-user-browse',
  standalone: true,
  imports: [],
  templateUrl: './user-browse.component.html',
  styleUrl: './user-browse.component.scss'
})
export class UserBrowseComponent {
public name = 'Фамилия Имя Отчество'
}
