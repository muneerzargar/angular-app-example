import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/Model/Ingredient/ingredient.model';
import { ShoppingListService } from './services/shoppingList/shoppingList.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private shoppingListSrv: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListSrv.getIngredients();
    this.shoppingListSrv.onIngredientAdded.subscribe((ingredients: Ingredient[]) => this.ingredients = ingredients);
  }

}
