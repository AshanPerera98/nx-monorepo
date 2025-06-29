import { render } from '@testing-library/react';

import UiButton from './button';

describe('UiButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiButton />);
    console.log('🚀 ~ it ~ UiButton:', UiButton);
    expect(baseElement).toBeTruthy();
  });
});
