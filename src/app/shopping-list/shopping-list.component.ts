import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/Model/Ingredient/ingredient.model';
import { ShoppingListService } from './services/shoppingList/shoppingList.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private ingredientSub: Subscription;

  constructor(private shoppingListSrv: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListSrv.getIngredients();
    this.ingredientSub = this.shoppingListSrv.onIngredientAdded.subscribe((ingredients: Ingredient[]) => this.ingredients = ingredients);
  }

  ngOnDestroy() {
    this.ingredientSub.unsubscribe();
  }

}
