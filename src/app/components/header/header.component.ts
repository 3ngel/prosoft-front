import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { NgIf } from '@angular/common';
import { Router, RouterLink } from "@angular/router";
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
  constructor(public src: DataService, private router: Router){}
  public folder = 'Проект разработан группой РИЗ-330916у'
  public user = this.src.fio
  to_users(){
    this.router.navigate(['/users'])
  }
  to_activites(){
    this.router.navigate(['/active-list'])
  }
  exit(){
    this.src.authorized=false
    this.src.removeCookie("username", {});
    this.src.removeCookie("user_id", {})
    this.router.navigate(['/login'])
  }
  getName(){
    let cookie = {} as any
    cookie = this.src.getCookie('username')
    this.user = cookie.username
  }
}
