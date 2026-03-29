import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-active',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './active.component.html',
  styleUrl: './active.component.scss'
})
export class ActiveComponent {
  public activites_list = {} as any
    constructor(public src:DataService){}
    
    //ПЕРЕДЕЛАТЬ МЕТОД НА ПОСТ
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
