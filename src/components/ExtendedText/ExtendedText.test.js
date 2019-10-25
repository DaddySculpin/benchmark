import React from 'react';
import { render } from '@testing-library/react';
import ExtendedText from './ExtendedText';
import { axe, toHaveNoViolations } from 'jest-axe';
expect.extend(toHaveNoViolations);

describe('ExtendedText', () => {
  it('renders without crashing', () => {
    render(<ExtendedText label={'test'} />);
  });

  it('should not have basic accessibility issues', async () => {
    const { container } = render(<ExtendedText label={'test'} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
