import { NutritionType } from './enums/NutritionType';

export interface IIngredient {
  id: string;
  nutrition: string;
  nutritionType: NutritionType;
  quantity: number;
}
