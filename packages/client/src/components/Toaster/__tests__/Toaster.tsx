import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { ToasterContainer } from '../ToasterContainer';

import { toaster } from '../toaster';

const HelperComponent = () => {
  const showSuccess = () => {
    toaster.showSuccess('My success message');
  };

  const showError = () => {
    toaster.showSuccess('My error message');
  };
  return (
    <>
      <button onClick={showSuccess}>Show success</button>
      <button onClick={showError}>Show error</button>
      <button onClick={() => toaster.showSuccess()}>Show without message</button>
    </>
  );
};

describe('Toaster', () => {
  const setup = () => {
    return render(
      <ToasterContainer>
        <HelperComponent />
      </ToasterContainer>
    );
  };

  it('should display default message if it is not given as parameter', function () {
    setup();
    fireEvent.click(screen.getByText('Show without message'));
    expect(screen.getByText('Success')).toBeDefined();
  });
  it('should not fail when container is not applied', () => {
    try {
      toaster.showInfo('message');
      toaster.showSuccess('message');
      toaster.showError('message');
    } catch (e) {
      fail('Exception thrown  when container is not created');
    }
  });

  it('shows success message', () => {
    setup();
    fireEvent.click(screen.getByText('Show success'));
    expect(screen.getByText('My success message')).toBeDefined();
  });

  it('shows error message', () => {
    setup();
    fireEvent.click(screen.getByText('Show error'));
    expect(screen.getByText('My error message')).toBeDefined();
  });
});
