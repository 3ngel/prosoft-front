import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  public authorized = true;


  api_url = "http://localhost:8080/api"

  async send_message_post(path:string, body:{}){
    //Отправка запроса
    console.log("Отправка запроса")
    let response = await fetch(this.api_url+path,{
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(body)
    });
    let result = await response.json();
    //Установка кук, если их передал сервер
    let cookie = response.headers.get('Set-cookie')?.toString();
    if (cookie!= undefined){
      document.cookie = cookie;
    }
    return result
  }

  async send_message_get(path:string,){
    //Отправка запроса
    console.log("Отправка запроса")
    let response = await fetch(this.api_url+path,{
      method: 'POST',
      mode: 'cors',
    });
    let result = await response.json();
    //Установка кук, если их передал сервер
    let cookie = response.headers.get('Set-cookie')?.toString();
    if (cookie!= undefined){
      document.cookie = cookie;
    }
    return result
  }
  
}
