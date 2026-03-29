import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonModule,NgForOf } from '@angular/common';
import {Active} from '../../services/templates'

@Component({
  selector: 'app-active-list',
  standalone: true,
  imports: [CommonModule, NgForOf],
  templateUrl: './active-list.component.html',
  styleUrl: './active-list.component.scss'
})
export class ActiveListComponent {

  public activites_list = {} as any
  constructor(public src:DataService){}
  async ngOnInit(){
    //Получение списка всех активов
    this.activites_list = this.src.send_message_get("/get_all_activites")
  }
  //Обновление списка
  reload_list(){
    this.activites_list = this.src.send_message_get("/get_all_activites")
  }
  viewActive(name:string){
    return
  }
}
