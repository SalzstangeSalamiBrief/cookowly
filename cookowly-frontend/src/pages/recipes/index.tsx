import { RecipeOverviewCard } from '../../components/card/wrapper/RecipeOverviewCard';
import { NutritionType } from '../../models/enums/NutritionType';
import { IRecipeOverview } from '../../models/Recipe';

import styles from './index.module.css';

const recipes: IRecipeOverview[] = [
  {
    cookingTime: 23,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor architecto mollitia imp
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor architecto mollitia imp
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor architecto mollitia imp`,
    id: 'a',
    imageUrl: `https://images.unsplash.com/photo-1567529854338-fc097b962123?ixlib=rb-4.0.3
        &ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`,
    likes: 300,
    nutritionType: NutritionType.CARNIVORE,
    tags: [],
    title: 'Creamy Coconut Rice with Spiced Chickpeas',
  },
  {
    cookingTime: 23,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor architecto mollitia imp',
    id: 'ab',
    imageUrl: `https://images.unsplash.com/photo-1567529854338-fc097b962123?ixlib=rb-4.0.3
        &ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`,
    likes: 300,
    nutritionType: NutritionType.VEGETARIAN,
    tags: [],
    title: 'Creamy Coconut Rice with Spiced Chickpeas',
  },
  {
    cookingTime: 23,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor architecto mollitia imp',
    id: 'ac',
    imageUrl: `https://images.unsplash.com/photo-1567529854338-fc097b962123?ixlib=rb-4.0.3
        &ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`,
    likes: 300,
    nutritionType: NutritionType.VEGAN,
    tags: [],
    title: 'Creamy Coconut Rice with Spiced Chickpeas',
  },
  {
    cookingTime: 23,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor architecto mollitia imp',
    id: 'a',
    imageUrl: `https://images.unsplash.com/photo-1567529854338-fc097b962123?ixlib=rb-4.0.3
        &ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`,
    likes: 300,
    nutritionType: NutritionType.CARNIVORE,
    tags: [],
    title: 'Creamy Coconut Rice with Spiced Chickpeas',
  },
  {
    cookingTime: 23,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor architecto mollitia imp',
    id: 'ab',
    imageUrl: `https://images.unsplash.com/photo-1567529854338-fc097b962123?ixlib=rb-4.0.3
        &ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`,
    likes: 300,
    nutritionType: NutritionType.VEGETARIAN,
    tags: [],
    title: 'Creamy Coconut Rice with Spiced Chickpeas',
  },
  {
    cookingTime: 23,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor architecto mollitia imp',
    id: 'ac',
    imageUrl: `https://images.unsplash.com/photo-1567529854338-fc097b962123?ixlib=rb-4.0.3
        &ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`,
    likes: 300,
    nutritionType: NutritionType.VEGAN,
    tags: [],
    title: 'Creamy Coconut Rice with Spiced Chickpeas',
  },
  {
    cookingTime: 23,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor architecto mollitia imp',
    id: 'sdhsa',
    imageUrl: `https://images.unsplash.com/photo-1567529854338-fc097b962123?ixlib=rb-4.0.3
        &ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`,
    likes: 300,
    nutritionType: NutritionType.CARNIVORE,
    tags: [],
    title: 'Creamy Coconut Rice with Spiced Chickpeas',
  },
  {
    cookingTime: 23,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor architecto mollitia imp',
    id: 'abd',
    imageUrl: `https://images.unsplash.com/photo-1567529854338-fc097b962123?ixlib=rb-4.0.3
        &ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`,
    likes: 300,
    nutritionType: NutritionType.VEGETARIAN,
    tags: [],
    title: 'Creamy Coconut Rice with Spiced Chickpeas',
  },
  {
    cookingTime: 23,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor architecto mollitia imp',
    id: 'acg',
    imageUrl: `https://images.unsplash.com/photo-1567529854338-fc097b962123?ixlib=rb-4.0.3
        &ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`,
    likes: 300,
    nutritionType: NutritionType.VEGAN,
    tags: [],
    title: 'Creamy Coconut Rice with Spiced Chickpeas',
  },
];

export default function Recipes() {
  return (
    <ul className={styles['recipe-overview-list']}>
      {recipes.map((recipe) => (
        <li>
          <RecipeOverviewCard key={recipe.id} recipe={recipe} />
        </li>
      ))}
    </ul>
  );
}
