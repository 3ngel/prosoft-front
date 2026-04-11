import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  public authorized = false;


  api_url = "https://pro-soft.g-shamkhal.ru/api"
  public fio = "Фамилия имя"

  async send_message_post(path:string, body:{}){
    //Отправка запроса
    console.log("Отправка запроса")
    let result:any
    let response = await fetch(this.api_url+path,{
      method: 'POST',
      credentials:'include',
      headers: { 'Content-Type': 'application/json' },
      // mode: 'no-cors',
      body: JSON.stringify(body)
    })
    result = await response.json();
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
    let result:any;
    const myHeaders = new Headers();
    let cookie = document.cookie
    console.log(cookie)
    myHeaders.append("Cookie", cookie)
    myHeaders.append("Content-Type", "application/json")
    let response = await fetch(this.api_url+path,{
      method: 'GET',
      credentials:'include',
      headers: myHeaders,
      redirect: "follow"
      // mode: 'cors',
    });
    result = await response.json();
    //Установка кук, если их передал сервер
    // let cookie = response.headers.get('Set-cookie')?.toString();
    // if (cookie!= undefined){
    //   document.cookie = cookie;
    // }
    return result
  }


  setCookie(name:string, value:string, days:any, attributes:any){
  let attr = [];
  let name_value = name + "=" + encodeURIComponent(value);
  attr.push(name_value);

  if (typeof days === "number") {
    let expires = new Date(Date.now() + 864e5 * days).toUTCString();
    attr.push("expires=" + expires);
  }
  if (typeof attributes === "object") {
    for (let attribute_name in attributes) {
      if (attribute_name === "path" || attribute_name === "domain") {
        attr.push(attribute_name + "=" + attributes[attribute_name]);
      }
    }
  }
  document.cookie = attr.join("; ")
  return (name_value);
};

  getCookie(key:string){
    let cookies = document.cookie.split("; ");
    let cookies_list_obj = {} as any;

    for (let i = 0; i < cookies.length; i++) {
      let name_value = cookies[i].split("=");
      let name = name_value[0];
      let value = decodeURIComponent(name_value[1]);
      cookies_list_obj[name] = value;

      if (key === name) {
        return value;
      }
    }

    if (key !== undefined) {
      return null;
    } else {
      return cookies_list_obj;
    }
  };

  getAllCookie(){
    let cookies = document.cookie.split("; ");
    let cookies_list =[]
    for (let i = 0; i < cookies.length; i++) {
      let name_value = cookies[i].split("=");
      let name = name_value[0];
      let value = decodeURIComponent(name_value[1]);
      cookies_list.push({name:name, text:value})
    }
    return cookies_list
  };

  removeCookie(name:string, attributes:any){
    attributes = attributes || {};
    attributes.expires = new Date(0).toUTCString();
    this.setCookie(name, "", undefined, attributes);
  };

}
