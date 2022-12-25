import { NutritionType } from './enums/NutritionType';
import { RecipeScope } from './enums/RecipeScope';
import { IIngredient } from './Ingredient';

export interface IRecipeOverview {
  id: string;
  title: string;
  description: string;
  cookingTime: number;
  imageUrl: string;
  nutritionType: NutritionType;
  likes: number;
  tags: string[];
}

export interface IDetailedRecipe extends IRecipeOverview {
  author: string;
  scope: RecipeScope;
  preparationSteps: string[];
  ingredients: IIngredient[];
  createdBy: string;
  createdOn: string;
}
