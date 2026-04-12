import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Md5 } from 'ts-md5';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public login = ""
  public password = ""
  md5 = new Md5();
  constructor(public src: DataService, public router: Router){}
  
  ngOnInit(){
    //Проверяем авторизован ли пользователь, если авторизован, то переводим в авторизованную зону
    if (this.src.authorized==true){
      this.router.navigate(['/active-list'])
    }
    let username=this.src.getCookie("username")
    if(username!=undefined){
      this.router.navigate(['/active-list'])
    }
  }

  //Метод авторизации
  async authorization(){
    //Вычисляем хэш от пароля
    let password_hash = {}
    password_hash = this.md5.appendStr(this.password).end();
    //Тело для запроса авторизации пользователя
    let body ={
      login:this.login,
      password: password_hash,
    }
    //Запрос авторизации пользователя
    let result:any = await this.src.send_message_post("/user_verify", body)
    console.log(result)
    if (result.user){
      this.src.authorized=true
      this.src.fio = result.user
      this.router.navigate(['/active-list'])
    }
    else{
      alert(result.error)
    }
  }
}
