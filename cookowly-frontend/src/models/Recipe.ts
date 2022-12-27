import { NutritionType } from './enums/NutritionType';
import { RecipeScope } from './enums/RecipeScope';
import { IIngredient } from './Ingredient';

export interface IRecipe {
  id: string;
  title: string;
  description: string;
  cookingTime: number;
  imageUrl: string;
  nutrition: number;
  nutritionType: NutritionType;
  likes: number;
  tags: string[];
  author: string;
  scope: RecipeScope;
  preparationSteps: string[];
  ingredients: IIngredient[];
  createdBy: string;
  createdOn: string;
}

export type RecipeOverview = Omit<
  IRecipe,
  'author' | 'tags' | 'scope' | 'preparationSteps' | 'ingredients' | 'createdBy' | 'createdOn'
>;
