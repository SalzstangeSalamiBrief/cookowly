import Head from 'next/head';
import { RecipeOverviewCard } from '../../components/card/wrapper/RecipeOverviewCard';
import { NutritionType } from '../../models/enums/NutritionType';
import { RecipeOverview } from '../../models/Recipe';

import styles from './index.module.css';

const recipes: RecipeOverview[] = [
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
    title: 'Creamy Coconut Rice with Spiced Chickpeas',
    nutrition: 200,
  },
  {
    cookingTime: 23,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor architecto mollitia imp',
    id: 'ab',
    imageUrl: `https://images.unsplash.com/photo-1567529854338-fc097b962123?ixlib=rb-4.0.3
        &ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`,
    likes: 300,
    nutritionType: NutritionType.VEGETARIAN,
    title: 'Creamy Coconut Rice with Spiced Chickpeas',
    nutrition: 200,
  },
  {
    cookingTime: 23,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor architecto mollitia imp',
    id: 'ac',
    imageUrl: `https://images.unsplash.com/photo-1567529854338-fc097b962123?ixlib=rb-4.0.3
        &ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`,
    likes: 300,
    nutritionType: NutritionType.VEGAN,
    title: 'Creamy Coconut Rice with Spiced Chickpeas',
    nutrition: 200,
  },
  {
    cookingTime: 23,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor architecto mollitia imp',
    id: 'a',
    imageUrl: `https://images.unsplash.com/photo-1567529854338-fc097b962123?ixlib=rb-4.0.3
        &ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`,
    likes: 300,
    nutritionType: NutritionType.CARNIVORE,
    title: 'Creamy Coconut Rice with Spiced Chickpeas',
    nutrition: 200,
  },
  {
    cookingTime: 23,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor architecto mollitia imp',
    id: 'ab',
    imageUrl: `https://images.unsplash.com/photo-1567529854338-fc097b962123?ixlib=rb-4.0.3
        &ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`,
    likes: 300,
    nutritionType: NutritionType.VEGETARIAN,
    title: 'Creamy Coconut Rice with Spiced Chickpeas',
    nutrition: 200,
  },
  {
    cookingTime: 23,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor architecto mollitia imp',
    id: 'ac',
    imageUrl: `https://images.unsplash.com/photo-1567529854338-fc097b962123?ixlib=rb-4.0.3
        &ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`,
    likes: 300,
    nutritionType: NutritionType.VEGAN,
    title: 'Creamy Coconut Rice with Spiced Chickpeas',
    nutrition: 200,
  },
  {
    cookingTime: 23,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor architecto mollitia imp',
    id: 'sdhsa',
    imageUrl: `https://images.unsplash.com/photo-1567529854338-fc097b962123?ixlib=rb-4.0.3
        &ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`,
    likes: 300,
    nutritionType: NutritionType.CARNIVORE,
    title: 'Creamy Coconut Rice with Spiced Chickpeas',
    nutrition: 200,
  },
  {
    cookingTime: 23,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor architecto mollitia imp',
    id: 'abd',
    imageUrl: `https://images.unsplash.com/photo-1567529854338-fc097b962123?ixlib=rb-4.0.3
        &ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`,
    likes: 300,
    nutritionType: NutritionType.VEGETARIAN,
    title: 'Creamy Coconut Rice with Spiced Chickpeas',
    nutrition: 200,
  },
  {
    cookingTime: 23,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor architecto mollitia imp',
    id: 'acg',
    imageUrl: `https://images.unsplash.com/photo-1567529854338-fc097b962123?ixlib=rb-4.0.3
        &ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`,
    likes: 300,
    nutritionType: NutritionType.VEGAN,
    title: 'Creamy Coconut Rice with Spiced Chickpeas',
    nutrition: 200,
  },
];

export default function Recipes() {
  return (
    <>
      <Head>
        <title>Recipes</title>
      </Head>
      <ul className={styles['recipe-overview-list']}>
        {recipes.map((recipe) => (
          <li className="[&>article]:h-full">
            <RecipeOverviewCard key={recipe.id} recipe={recipe} />
          </li>
        ))}
      </ul>
    </>
  );
}
