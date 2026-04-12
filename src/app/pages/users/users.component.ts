import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { Active } from '../../services/templates';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
    // public name = 'Фамилия Имя Отчество'
    public subscription:any
    public activites = [{} as Active]
  constructor(public src:DataService, public router: Router){}
    ngOnInit(){
      if (this.src.authorized==false){
        this.router.navigate(['/login'])
      }
      let username=this.src.getCookie("username")
      if(username==undefined){
        this.router.navigate(['/login'])
      }
    }
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
    // let body = {
    //   owner:this.name
    // }
    // let response:any
    // response = this.src.send_message_post('/user_browse', body)
    // let response = {
    //   "assets": [
    //     {
    //         "date_create": "2025-12-06 09:02:04",
    //         "inventory_number": "INV-0001",
    //         "name": "Монитор Samsung 24\"",
    //         "owner": "Иванов Иван Иванович",
    //         "serial_number": "SN-MON-001",
    //         "status": "Используется",
    //         "type_object": "Монитор"
    //     },
    //     {
    //         "date_create": "2025-12-06 09:02:04",
    //         "inventory_number": "INV-0002",
    //         "name": "Материнская плата ASUS",
    //         "owner": "Иванов Иван Иванович",
    //         "serial_number": "SN-MB-001",
    //         "status": "На складе",
    //         "type_object": "Материнская плата"
    //     },
    //     {
    //         "date_create": "2025-12-06 09:02:09",
    //         "inventory_number": "INV-1000",
    //         "name": "Принтер HP",
    //         "owner": "Иванов Иван Иванович",
    //         "serial_number": "SN-PRN-1000",
    //         "status": "Используется",
    //         "type_object": "Монитор"
    //     }
    // ]
    // }
    // this.activites = response.assets
  }

  viewActive(name:string){

  }
}
