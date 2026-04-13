import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Active } from '../../services/templates';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-user-browse',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './user-browse.component.html',
  styleUrl: './user-browse.component.scss'
})
export class UserBrowseComponent {
  public name = 'Фамилия Имя Отчество'
  public subscription:any
  public activites = [{} as Active]
  type_objects = []
  constructor(public src:DataService, public router: Router, private acroute:ActivatedRoute){
    this.subscription = this.acroute.params.subscribe(params=>this.name=params['name'])
  }
  ngOnInit(){
    let username=this.src.getCookie("username")
    if(!username){
      this.src.authorized=false
      this.router.navigate(['/login'])
    }
    else{
       this.src.authorized=true
    }
    this.reload_list();
  }
  async getAllTypeObjects(){
    let result = {} as any;
    result = await this.src.send_message_get("/get_all_type_object")
    this.type_objects = result.type_object
    console.log(this.type_objects)
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
  
  async reload_list(){
    let body = {
      owner:this.name
    }
    let response:any
    response = await this.src.send_message_post('/user_browse', body)
    this.activites = response.assets
    console.log(this.activites)
  }

  viewActive(name:string){

  }
}
