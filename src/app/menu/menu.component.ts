
import { Component, OnInit } from '@angular/core';

import { Dish } from './../shared/dish';
import { DishService } from '../services/dish.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  dishes:Dish[];
  item: Dish;

  onSelect(dish: Dish) {
    this.item = dish;
  }

  constructor(private dishService: DishService) { }

  ngOnInit() {
    this.dishes = this.dishService.returnDishes();
  }
}
