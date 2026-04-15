import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { Active, Add_Active } from '../../services/templates';
import { FormsModule } from '@angular/forms';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-add-active',
  standalone: true,
  imports: [FormsModule, NgForOf],
  templateUrl: './add-active.component.html',
  styleUrl: './add-active.component.scss'
})
export class AddActiveComponent {
  public activites_list = [{} as Active]
  type_objects = []
  statuses = []
  public type =''
  public name = ''
  public status = ''
  public inventory_number = ''
  public serial_number = ''
  public description =''
  public address = ''
  public owner = 'Панфилова Ангелина Олеговна'
  constructor(public src:DataService, public router: Router){}
  async ngOnInit(){
    // if (this.src.authorized==false){
    //   this.router.navigate(['/login'])
    // }
    // let username=this.src.getCookie("username")
    // if(!username){
    //   this.src.authorized=false
    //   this.router.navigate(['/login'])
    // }
    // else{
    //    this.src.authorized=true
    // }
    this.getAllTypeObjects();
    let user = this.src.getCookie("username")
    this.owner = user.username || 'Панфилова Ангелина Олеговна'
    
    //Получение списка всех активов
    this.reload_list();

  }
  async getAllTypeObjects(){
    let result = {} as any;
    result = await this.src.send_message_get("/get_all_type_object")
    this.type_objects = result.type_object
  }
  async getAllStatus(type:string){
    let body ={
      type_object: type
    }
    let result = {} as any;
    result = await this.src.send_message_post("/get_all_status", body)
    this.statuses = result.status
  }

  //Обновление списка
  async reload_list(){
    let result = {} as any;
    result = await this.src.send_message_get("/get_all_activites")
    this.activites_list = result.activites;
  }
  changedTypeObject(){
    console.log("Тык смены типа")
    this.getAllStatus(this.type)
    return
  }
  changedStatus(){
    console.log("Тык смены типа")
    return
  }
  async addActive(){
    console.log("Тык добавления актива")
    let body = {} as Add_Active
    body = {
      name:this.name,
      status: this.status,
      address: this.address,
      description: this.description,
      owner: this.owner,
      inventory_number: this.inventory_number,
      serial_number: this.serial_number,
      type_object: this.type
    }
    
    let result = {} as any
    result = await this.src.send_message_post("/add_active", body)
    //Проверяем есть ли ошибка
    if (result?.error){
      alert(result.error)
    }
    else{      
      this.router.navigate(['/active-list'])
    }

  }
} 
