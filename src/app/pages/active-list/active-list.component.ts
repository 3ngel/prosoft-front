import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonModule,NgForOf } from '@angular/common';
import {Active, Active_list} from '../../services/templates'
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-active-list',
  standalone: true,
  imports: [CommonModule, NgForOf, RouterLink, FormsModule],
  templateUrl: './active-list.component.html',
  styleUrl: './active-list.component.scss'
})
export class ActiveListComponent {

  public activites_list = [{} as Active]
  type_objects = []
  constructor(public src:DataService, public router: Router){}
  async ngOnInit(){
    // if (this.src.authorized==false){
    //   this.router.navigate(['/login'])
    // }
    let username=this.src.getCookie("username")
    console.log("Страница автивов "+username)
    console.log(this.src.authorized)
    if(!username){
      this.src.authorized=false
      this.router.navigate(['/login'])
    }
    else{
       this.src.authorized=true
    }
    this.getAllTypeObjects();
    //Получение списка всех активов
    this.reload_list();

  }
  async getAllTypeObjects(){
    let result = {} as any;
    result = await this.src.send_message_get("/get_all_type_object")
    this.type_objects = result.type_object
  }

  //Обновление списка
  async reload_list(){
    let result = {} as any;
    result = await this.src.send_message_get("/get_all_activites")
    // let result = {
      // "activites": [
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
    this.activites_list = result.activites;
  }
  viewActive(name:string){
    return
  }
  userBrowse(name:string){
    this.router.navigate(['/user-browse', name])
    return
  }
}
