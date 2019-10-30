import { Ingredient } from '../Ingredient/ingredient.model';

export interface Recipe {
    name: string;
    description: string;
    imagePath: string;
    ingredients?: Ingredient[];
}
