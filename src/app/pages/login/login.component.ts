import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
// import {Md5} from 'ts-md5/dist/md5';
import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public login = ''
  public password = ''
  md5 = new Md5();
  constructor(public src: DataService){}
  authorization(){
    //Вычисляем хэш от пароля
    let password_hash = this.md5.appendStr(this.password).end();
    // console.log(password_hash)
    //Тело для запроса авторизации пользователя
    let body ={
      login:this.login,
      password: password_hash,
    }
    //Запрос авторизации пользователя
    let result = this.src.send_message_post("/user_verify", body)
    return alert("Не работает")
  }
}
