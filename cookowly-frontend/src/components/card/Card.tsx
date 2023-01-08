import { useEffect, useState } from 'react';
import { ICardProps } from './CardProps';

import styles from './Card.module.css';

/**
 * A card that contains a title, body and footer.
 * The card will be fade in on render
 *
 * @param ICardProps the content of the card
 * @returns a card
 */
export function Card({ body, footer, title }: ICardProps) {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    window.requestAnimationFrame(() => setIsMounted(true));
  }, []);

  return (
    <article
      className={`${styles.card} ${
        isMounted ? styles['card-enter'] : ''
      } flex flex-col bg-neutral-800 rounded-md gap-4 p-4`}
    >
      {title}
      {body}
      {footer && footer}
    </article>
  );
}
