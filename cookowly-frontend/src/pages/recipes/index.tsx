/* eslint-disable max-len */
// TODO:
// 1. load data => new hook
// 2. loading spinner
// 3. Error message
// 4. Display recipes

import { RecipeCard } from '../../components/common/card/RecipeCard';
import { LoadingSpinner } from '../../components/common/loading-spinner/LoadingSpinner';
import { IRecipe } from '../../models/recipe';

// TODO REMOVE LATER ON
const recipes: IRecipe[] = [
  {
    id: 'a',
    title: 'Creamy Coconut Rice with Spiced Chickpeas',
    description: `This creamy coconut rice with spiced chickpeas dish is simple and easy to make while having
       the benefit of anti-inflammatory health benefits ! This dish is simple and easy to make, but the 
       flavor will have you coming back for it time and time again!`,
    diet: 0,
    nutrition: 528,
    cookingTime: 30,
    likes: 200,
    imageUrl:
      'https://images.unsplash.com/photo-1567529854338-fc097b962123?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    createdBy: 'Dean Dixon',
    created: new Date('2021-01-01T00:00:00'),
    modifiedBy: 'Dean Dixon',
    modified: new Date('2021-01-01T00:00:00'),
  },
  {
    id: 'b',
    title: 'Copycat Chipotle Sofritas',
    description: `This copycat chipotle sofritas is so good that you may never need to step foot back into a
       Chipotle store again! You will absolutely love this recipe and how easy it is to make.`,
    diet: 1,
    nutrition: 148,
    cookingTime: 25,
    likes: 0,
    imageUrl:
      'https://images.unsplash.com/photo-1668665771757-4d42737d295a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Q2hpcG90bGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    createdBy: 'Dean Dixon',
    created: new Date('2021-01-01T00:00:00'),
    modifiedBy: 'Dean Dixon',
    modified: new Date('2021-01-01T00:00:00'),
  },
  {
    id: 'c',
    title: 'Karaage',
    description: `Karaage (Japanese fried chicken) is easily one of the greatest types of fried chicken in the world. 
        It’s exceptionally flavorful, juicy, ultra-crispy, and absolutely worth hanging out at the stove for! 
        Learn the simple techniques and fry up some glorious chicken at home today.`,
    diet: 2,
    nutrition: 531,
    cookingTime: 60,
    likes: 1298,
    imageUrl:
      'https://images.unsplash.com/photo-1625940629601-8f2570086b06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a2FyYWFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    createdBy: 'Dean Dixon',
    created: new Date('2021-01-01T00:00:00'),
    modifiedBy: 'Dean Dixon',
    modified: new Date('2021-01-01T00:00:00'),
  },
];

export default function Recipes() {
  return (
    <>
      <h1>Recipe</h1>
      <LoadingSpinner text="Recipes getting loaded" />
      <ul className="flex flex-wrap justify-evenly">
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <RecipeCard recipe={recipe} />
          </li>
        ))}
      </ul>
    </>
  );
}
