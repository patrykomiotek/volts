import { Equal, Expect } from '../../helpers/type-utils';

/**
 * How do we type onFocusChange?
 */
// type OnFocusChange = { (arg: boolean): void };
type OnFocusChange = (arg: boolean) => void;

const addListener = (onFocusChange: OnFocusChange) => {
  window.addEventListener('focus', () => {
    onFocusChange(true);
  });

  window.addEventListener('blur', () => {
    onFocusChange(false);
  });
};

addListener((isFocused) => {
  console.log({ isFocused });

  type tests = [Expect<Equal<typeof isFocused, boolean>>];
});
