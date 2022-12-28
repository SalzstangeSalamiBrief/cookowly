import Head from 'next/head';
import { useRef } from 'react';
import { RecipeOverviewCard } from '../../components/card/wrapper/RecipeOverviewCard';
import { LoadingSpinner } from '../../components/loading-spinner/LoadingSpinner';
import { useFetchRecipeOverviews } from '../../hooks/useFetchRecipeOverviews';

import styles from './index.module.css';
/**
 * TODO
 *  1. TEST MULTIPLE IMAGES
 *  2. Loading state
 *  3. Error State
 *  5. Get data from Backend
 *  6. Comments
 */

export default function Recipes() {
  const infiniteScrollTriggerElement = useRef<HTMLLIElement>(null);
  const { recipes, isLoading } = useFetchRecipeOverviews(infiniteScrollTriggerElement);

  const scrollThreshold = Math.floor(recipes.length * (2 / 3));

  return (
    <>
      <Head>
        <title>Recipes</title>
      </Head>
      <ul className={styles['recipe-overview-list']}>
        {recipes.map((recipe, index) => {
          const isThreshold = scrollThreshold === index;
          return (
            <li
              className="[&>article]:h-full"
              ref={isThreshold ? infiniteScrollTriggerElement : undefined}
              key={recipe.id}
            >
              <RecipeOverviewCard recipe={recipe} />
            </li>
          );
        })}
      </ul>
      {isLoading && <LoadingSpinner text="Loading more recipes..." />}
    </>
  );
}
