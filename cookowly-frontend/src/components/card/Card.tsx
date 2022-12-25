import { Text } from '../Text/Text';
import { ICardProps } from './CardProps';

export function Card({ body, footer, title }: ICardProps) {
  return (
    <article className="flex flex-col bg-neutral-800 rounded-md gap-8 p-8">
      <Text asTag="h1">{title}</Text>
      {body}
      {footer && footer}
    </article>
  );
}
