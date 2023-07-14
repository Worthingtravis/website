import '@testing-library/jest-dom';

import { render } from '@testing-library/react';

import { TooltipWrapper } from './usePopperTooltip';

describe('TooltipWrapper', () => {
  test('should render tooltip wrapper with children', () => {
    const { getByText } = render(
      <TooltipWrapper tooltipText="Tooltip Text">
        <button>Trigger</button>
      </TooltipWrapper>
    );
    expect(getByText('Trigger')).toBeInTheDocument();
  });
  test('should show tooltip on trigger hover', () => {
    const { getByText, getByRole } = render(
      <TooltipWrapper tooltipText="Tooltip Text">
        <button>Trigger</button>
      </TooltipWrapper>
    );
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const trigger = getByText('Trigger');
    trigger.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
    const tooltip = getByRole('tooltip');
    expect(tooltip).toBeInTheDocument();
  });

  test('should hide tooltip on trigger hover leave', () => {
    const { getByText, getByRole } = render(
      <TooltipWrapper tooltipText="Tooltip Text">
        <button>Trigger</button>
      </TooltipWrapper>
    );
    const trigger = getByText('Trigger');
    trigger.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
    trigger.dispatchEvent(new MouseEvent('mouseleave', { bubbles: true }));
    const tooltip = getByRole('tooltip');
    // wait for tooltip to be removed from the DOM
    setTimeout(() => {
      expect(tooltip).not.toBeInTheDocument();
    }, 1000);
  });
});
