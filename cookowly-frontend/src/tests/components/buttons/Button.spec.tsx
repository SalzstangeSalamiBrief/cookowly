import { test, expect } from '@playwright/experimental-ct-react';
import { Button } from '../../../components/buttons/Button';
import {
  buttonSizeStyles,
  ButtonVariants,
  buttonVariantStyles,
  getButtonStyles,
  getDataPWAttribute,
  Size,
} from '../../../components/buttons/ButtonProps';

test.use({ viewport: { width: 500, height: 500 } });

const sizes = Object.keys(buttonSizeStyles) as Size[];
const variants = Object.keys(buttonVariantStyles) as ButtonVariants[];

const testCombinations = sizes.reduce((previous, size) => {
  const variantCombinations = variants
    .map((variant) => [
      {
        size,
        variant,
        text: 'Lorem Ipsum',
        dataPW: 'my-pw',
      },
      {
        size,
        variant,
        text: 'Lorem Ipsum',
      },
    ])
    .flat();
  return [...previous, ...variantCombinations];
}, [] as { size: Size; variant: ButtonVariants; text: string; dataPW?: string }[]);

// TODO CANNOT TEST FOR CHILDREN?
testCombinations.forEach(({ size, variant, text, dataPW = '' }) => {
  test(`Should mount component with text '${text}', size '${size}', variant '${variant}', dataPW '${dataPW}'`, async ({
    mount,
  }) => {
    // spy for the onClick listener
    let gotSpyExecuted = false;
    const executeSpy = () => {
      gotSpyExecuted = true;
    };

    const buttonComponent = await mount(
      <Button text={text} size={size} variant={variant} onClick={executeSpy} dataPW={dataPW} />,
    );
    await expect(buttonComponent).toContainText(text);
    const classesToExpect = getButtonStyles(size, variant);
    await expect(buttonComponent).toHaveClass(classesToExpect);
    const expectedPWAttribute = getDataPWAttribute(dataPW);
    await expect(buttonComponent).toHaveAttribute('data-pw', expectedPWAttribute);
    await buttonComponent.click();
    await expect(gotSpyExecuted).toBe(true);
  });
});
