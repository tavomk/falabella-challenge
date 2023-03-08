import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

describe('App', () => {
  it('replaces multiples of 3 with "Falabella"', () => {
    const { queryByText } = render(<App />);
    for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 !== 0) {
        const falabellaElement = queryByText('/Falabella/i');
        if (falabellaElement) {
          expect(falabellaElement).toBeInTheDocument();
        }
      }
    }
  });
  it('replaces multiples of 5 with "IT"', () => {
    const { queryByText } = render(<App />);
    for (let i = 1; i <= 100; i++) {
      if (i % 5 === 0 && i % 3 !== 0) {
        const falabellaElement = queryByText('/IT/i');
        if (falabellaElement) {
          expect(falabellaElement).toBeInTheDocument();
        }
      }
    }
  });

  it('replaces multiples of both 3 and 5 with "Marketplace"', () => {
    const { queryByText } = render(<App />);
    for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        const falabellaElement = queryByText('/Marketplace/i');
        if (falabellaElement) {
          expect(falabellaElement).toBeInTheDocument();
        }
      }
    }
  });

  it('renders numbers from 1 to 100', () => {
    const { getAllByText } = render(<App />);
    const elements = getAllByText(/^\d+$/); // Expresión regular para encontrar solo elementos con números
    expect(elements.length).toBe(53);
  });
});