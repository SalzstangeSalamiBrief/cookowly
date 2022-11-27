import { Diet } from '../enums/diet';
// TODO GENERATE LATER FROM THE API
export interface IRecipe {
  id: string;
  title: string;
  description: string;
  diet: Diet;
  nutrition: number;
  cookingTime: number;
  likes: number;
  imageUrl: string;
  createdBy: string;
  created: Date;
  modifiedBy: string;
  modified: Date;
}
