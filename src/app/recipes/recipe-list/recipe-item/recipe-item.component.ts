import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/shared/Model/Recipe/Recipe.model';
// import { RecipesService } from '../../services/recipe-service.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input('recipe') recipeItem: Recipe;
  @Input('recipeIndex') id: number;

  // constructor(private recipeSrv: RecipesService) { }\

  constructor() { }

  ngOnInit() {
  }

  // onItemSelected(event: Event) {
  //   event.preventDefault();
  //   this.recipeSrv.recipeSelected.emit( this.recipeItem );

  // }

}
