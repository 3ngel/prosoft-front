import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { NgIf } from '@angular/common';
// import { CommonModule } from '@angular/common';  
// import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(public src: DataService){}
  public folder = 'Проект разработан группой РИЗ-330916у'
  public user = 'Фамилия Имя Отчество'
  to_users(){
    return alert("Не работает")
  }
  to_activites(){
    return alert("Не работает")
  }
  exit(){
    return alert("Не работает")
  }
}
