import { Component, OnInit, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/Model/Ingredient/ingredient.model';
import { ShoppingListService } from '../services/shoppingList/shoppingList.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: false}) amountInputRef: ElementRef;

  constructor(private shoppingSrv: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem() {
    const newIngredient: Ingredient = {
      name : this.nameInputRef.nativeElement.value,
      amount: this.amountInputRef.nativeElement.value
    };
    this.shoppingSrv.onAddIngredients(newIngredient);
  }

}
