import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  constructor(public src:DataService, public router: Router){}
    ngOnInit(){
      if (this.src.authorized==false){
        this.router.navigate(['/login'])
      }
    }
}
