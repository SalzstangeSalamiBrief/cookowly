import { Diet } from '../enums/diet';
// TODO GENERATE LATER FROM THE API
export interface IRecipe {
  title: string;
  description: string;
  diet: Diet;
  nutrition: number;
  cookingTime: number;
  likes: number;
  image: string;
}
