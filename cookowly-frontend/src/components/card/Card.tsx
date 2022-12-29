import { ICardProps } from './CardProps';

/**
 * A card that contains a title, body and footer
 *
 * @param ICardProps the content of the card
 * @returns a card
 */
export function Card({ body, footer, title }: ICardProps) {
  return (
    <article className="flex flex-col bg-neutral-800 rounded-md gap-4 p-4">
      {title}
      {body}
      {footer && footer}
    </article>
  );
}
