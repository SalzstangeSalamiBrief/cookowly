import { test, expect } from '@playwright/experimental-ct-react';
import { Button } from '../../../components/buttons/Button';
import {
  buttonSizeStyles,
  ButtonVariants,
  buttonVariantStyles,
  getButtonStyles,
  Size,
} from '../../../components/buttons/ButtonProps';

test.use({ viewport: { width: 500, height: 500 } });

const sizes = Object.keys(buttonSizeStyles) as Size[];
const variants = Object.keys(buttonVariantStyles) as ButtonVariants[];

const testCombinations = sizes.reduce((previous, size) => {
  const variantCombinations = variants.map((variant) => ({
    size,
    variant,
    text: 'Lorem Ipsum',
  }));
  return [...previous, ...variantCombinations];
}, [] as { size: Size; variant: ButtonVariants; text: string; icon?: React.ReactElement }[]);

// TODO CANNOT TEST FOR CHILDREN?
testCombinations.forEach(({ size, variant, text, icon = null }) => {
  test(`Should mount component with text '${text}', size '${size}', variant '${variant}'`, async ({ mount }) => {
    const buttonComponent = await mount(<Button text={text} size={size} variant={variant} />);
    await expect(buttonComponent).toContainText(text);
    const classesToExpect = getButtonStyles(size, variant);
    await expect(buttonComponent).toHaveClass(classesToExpect);
    await expect(buttonComponent).toHaveAttribute('data-pw', 'button'); // TODO
    const iconOfTheButton = await buttonComponent.locator('span svg');
    await expect(iconOfTheButton).toHaveLength(icon ? 0 : 1);
  });
});

// TODO COVERAGE
