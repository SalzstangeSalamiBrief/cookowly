import Head from 'next/head';
import { useRef } from 'react';
import { RecipeOverviewCard } from '../../components/card/wrapper/RecipeOverviewCard';
import { useFetchRecipeOverviews } from '../../hooks/useFetchRecipeOverviews';

import styles from './index.module.css';
/**
 * TODO
 *  1. TEST MULTIPLE IMAGES
 *  2. Loading state
 *  3. Error State
 *  4. Load more data after scrolling
 *  5. Get data from Backend
 */

export default function Recipes() {
  const infiniteScrollTriggerElement = useRef<HTMLDivElement>(null);
  const recipes = useFetchRecipeOverviews(infiniteScrollTriggerElement);

  return (
    <>
      <Head>
        <title>Recipes</title>
      </Head>
      <ul className={styles['recipe-overview-list']}>
        {recipes.map((recipe) => (
          // {/* TODO MAYBE IN THE MIDDLE OF THE RECIPES? */}
          <li className="[&>article]:h-full">
            <RecipeOverviewCard key={recipe.id} recipe={recipe} />
          </li>
        ))}
      </ul>
      <div ref={infiniteScrollTriggerElement} />
    </>
  );
}
