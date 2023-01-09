import { ChartBarSquareIcon, ClockIcon, HandThumbUpIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { NutritionType } from '../../../models/enums/NutritionType';
import { RecipeOverview } from '../../../models/Recipe';
import { CookingPotIcon } from '../../icons/CookingPotIcon';
import { Text } from '../../Text/Text';
import { Card } from '../Card';

import styles from '../Card.module.css';

/**
 * Transforms the nutrition type enum into a string
 *
 * @param nutritionType the type of nutrition
 * @returns the string representation of the nutrition types
 */
const getNutritionTypeString = (nutritionType: NutritionType) => {
  switch (nutritionType) {
    case NutritionType.CARNIVORE:
      return 'carnivore';
    case NutritionType.VEGAN:
      return 'vegan';
    case NutritionType.VEGETARIAN:
      return 'vegetarian';
    default:
      throw new Error(`The nutrition type '${nutritionType}' is not supported`);
  }
};

/**
 * Card wrapper to display data of a recipe
 *
 * @param RecipeOverview
 * @returns a card for recipe overview
 */
export function RecipeOverviewCard({
  recipe: { description, title, imageUrl, nutrition, cookingTime, likes, id, nutritionType },
}: {
  recipe: RecipeOverview;
}) {
  const cardTitle = (
    <h1
      className={`text-primary-50 hover:text-primary-100 text-lg font-title
         font-bold whitespace-nowrap overflow-hidden text-ellipsis`}
    >
      <Link href={`/recipes/${id}`}>{title}</Link>
    </h1>
  );

  const cardBody = (
    <div className="flex flex-col gap-4">
      <div className="relative w-full h-56 ">
        <Image
          src={imageUrl}
          alt={`image of the recipe ${title}`}
          fill
          className="object-contain transition-transform hover:scale-110"
        />
      </div>
      <Text color="text-neutral-200">
        <span className={`block overflow-hidden text-ellipsis ${styles['clamped-description']} `}>{description}</span>
      </Text>
    </div>
  );

  const cardFooter = (
    <dl className="flex justify-center gap-4 flex-wrap text-neutral-200">
      <dt className="flex align-middle" aria-label={`cooking time: ${cookingTime}`}>
        <ClockIcon className="mr-2 w-6 h-6" /> {cookingTime} min
      </dt>
      <dd className="sr-only">{cookingTime} min</dd>
      <dt className="flex align-middle" aria-label={`Nutrition: ${nutrition} kcal`}>
        <ChartBarSquareIcon className="mr-2 w-6 h-6" /> {nutrition} kcal
      </dt>
      <dd className="sr-only">{nutrition} kcal</dd>
      <dt className="flex align-middle" aria-label={`Likes: ${likes}`}>
        <HandThumbUpIcon className="mr-2 w-6 h-6" /> {likes}
      </dt>
      <dd className="sr-only">{likes}</dd>
      <dt className="flex align-middle" aria-label={`Type of nutrition: ${getNutritionTypeString(nutritionType)}`}>
        <span className="block h-6 w-6 mr-2">
          <CookingPotIcon />
        </span>
        {getNutritionTypeString(nutritionType)}
      </dt>
      <dd className="sr-only">{getNutritionTypeString(nutritionType)}</dd>
    </dl>
  );

  return <Card title={cardTitle} body={cardBody} footer={cardFooter} />;
}
