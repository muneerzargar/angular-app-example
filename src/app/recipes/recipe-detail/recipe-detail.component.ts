import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/Model/Recipe/Recipe.model';
import { RecipesService } from '../services/recipe-service.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private recipeSrv: RecipesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
      this.recipe = this.recipeSrv.getRecipeById(this.id);
    });
  }
  onListClick(event: Event) {
    event.preventDefault();
    this.recipeSrv.addIngredientsToShoppingList(this.recipe.ingredients);

  }
  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

}
