import Image from 'next/image';
import { IRecipe } from '../../../models/recipe';
import { BaseCard } from './BaseCard';

interface IRecipeCardProps {
  recipe: IRecipe;
}

export function RecipeCard({ recipe }: IRecipeCardProps) {
  return (
    <BaseCard>
      <h1 className="font-title font-bold text-lg">{recipe.title}</h1>
      <div className="w-48 h-36 relative mx-auto">
        <Image alt={`The cooked recipe ${recipe.title}`} src={recipe.imageUrl} fill />
      </div>
    </BaseCard>
  );
}
