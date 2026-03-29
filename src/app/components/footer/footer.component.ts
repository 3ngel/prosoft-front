import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// import { NgForOf } from "../../../../node_modules/@angular/common/index";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  public list = [
    "Гаджиев Шамхал",
    "Коржина Валерия",
    "Крашенинников Александр",
    "Кузнецова Екатерина",
    "Панфилова Ангелина",
    "Фёдоров Александр"
  ]
  
}
