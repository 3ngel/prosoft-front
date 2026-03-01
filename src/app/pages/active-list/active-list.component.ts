import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-active-list',
  standalone: true,
  imports: [],
  templateUrl: './active-list.component.html',
  styleUrl: './active-list.component.scss'
})
export class ActiveListComponent {

  public activites_list = {}
  constructor(public src:DataService){}
  async ngOnInit(){
    //Получение списка всех активов
    this.activites_list = this.src.send_message_get("/get_all_activites")
  }
}
