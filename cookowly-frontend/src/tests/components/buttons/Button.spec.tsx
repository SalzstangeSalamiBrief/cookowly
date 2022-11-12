import { test, expect } from '@playwright/experimental-ct-react';
import { Button } from '../../../components/buttons/Button';
import { ButtonTags, ButtonVariants, Size } from '../../../components/buttons/ButtonProps';
import {
  buttonSizeStyles,
  buttonVariantStyles,
  getButtonStyles,
  getDataPWAttribute,
} from '../../../components/buttons/ButtonUtilities';

const sizes = Object.keys(buttonSizeStyles) as Size[];
const variants = Object.keys(buttonVariantStyles) as ButtonVariants[];

test.use({ viewport: { width: 500, height: 500 } });

test('Should mount default component', async ({ mount, page }) => {
  const classesToExpect = getButtonStyles('md', 'primary');
  const buttonComponent = await mount(<Button text="Lorem Ipsum" />);
  await expect(buttonComponent).toHaveClass(classesToExpect);

  const spawnedButton = await page.locator('button');
  await expect(spawnedButton).toHaveCount(1);

  const expectedPWAttribute = getDataPWAttribute();
  await expect(buttonComponent).toHaveAttribute('data-pw', expectedPWAttribute);

  await expect(buttonComponent).not.toBeDisabled();

  await expect(buttonComponent).toHaveAttribute('type', 'button');
});

// ! CANNOT TEST FOR CHILDREN => will throw react minified error https://github.com/microsoft/playwright/issues/14401
['Lorem Ipsum', 'Dolor', ''].forEach((text) => {
  test(`Should contain text '${text}'`, async ({ mount }) => {
    const buttonComponent = await mount(<Button text={text} />);
    await expect(buttonComponent).toContainText(text);
  });
});

const styleCombinationsToTest = sizes
  .map((size) =>
    variants.map((variant) => [true, false].map((isDisabled) => ({ size, variant, isDisabled })).flat()).flat(),
  )
  .flat();
styleCombinationsToTest.forEach(({ size, variant, isDisabled }) => {
  test(`Should mount component with styles size '${size}', variant '${variant}' isDisabled '${isDisabled}'`, async ({
    mount,
  }) => {
    const buttonComponent = await mount(<Button text="Lorem Ipsum" size={size} variant={variant} />);
    const classesToExpect = getButtonStyles(size, variant, isDisabled);
    await expect(buttonComponent).toHaveClass(classesToExpect);
  });
});

['a', 'button', undefined].forEach((tag) => {
  const expectedTag = tag ?? 'button';
  test(`Should mount button as with tag '${tag}' to '${expectedTag}'`, async ({ mount, page }) => {
    await mount(<Button text="Lorem Ipsum" as={tag as ButtonTags} />);
    const spawnedButton = await page.locator(expectedTag);
    await expect(spawnedButton).toHaveCount(1);
  });
});

['my-pw', undefined].forEach((pwTag) => {
  const expectedPWAttribute = getDataPWAttribute(pwTag);
  test(`Should have pw attribute '${expectedPWAttribute}'`, async ({ mount }) => {
    const buttonComponent = await mount(<Button text="Lorem Ipsum" dataPW={pwTag} />);
    await expect(buttonComponent).toHaveAttribute('data-pw', expectedPWAttribute);
  });
});

[true, false].forEach((isDisabled) => {
  test(`Should ${isDisabled ? 'not' : ''} disable button`, async ({ mount }) => {
    const buttonComponent = await mount(<Button text="Lorem Ipsum" isDisabled={isDisabled} />);
    if (isDisabled) {
      await expect(buttonComponent).toBeDisabled();
    } else {
      await expect(buttonComponent).not.toBeDisabled();
    }
  });
});

[true, false].forEach((isSubmitButton) => {
  const expectedType = isSubmitButton ? 'submit' : 'button';
  test(`Should set isSubmitButton '${expectedType}'`, async ({ mount }) => {
    const buttonComponent = await mount(<Button text="Lorem Ipsum" isSubmitButton={isSubmitButton} />);
    await expect(buttonComponent).toHaveAttribute('type', expectedType);
  });
});

[
  { text: 'loremIpsum', tag: 'a' },
  { text: 'loremIpsum', tag: 'button' },
  { text: 'loremIpsum', tag: undefined },
].forEach(({ text, tag = undefined }) => {
  test(`Should execute onClick handler on '${tag}' tag`, async ({ mount, page }) => {
    // spy for the onClick listener
    let gotSpyExecuted = false;
    const executeSpy = () => {
      gotSpyExecuted = true;
    };

    const buttonComponent = await mount(<Button text={text} onClick={executeSpy} as={tag as ButtonTags} />);
    await expect(buttonComponent).toContainText(text);
    await buttonComponent.click();
    await expect(gotSpyExecuted).toBe(true);

    const spawnedButton = await page.locator(tag ?? 'button');
    await expect(spawnedButton).toHaveCount(1);
  });
});
