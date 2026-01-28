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
  save_kid(){
    return alert("Не работает")
  }
  sorting(){
    return alert("Не работает")
  }
  filtr(){
    return alert("Не работает")
  }
  look_archive(){
    return alert("Не работает")
  }
  reload_list(){
    return alert("Не работает")
  }
}
