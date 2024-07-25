import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HighChart from '../../components/CategoryVisualizations/HighChart';
import Highcharts from 'highcharts';

jest.mock('highcharts', () => ({
     chart: jest.fn(),
}));

Highcharts.chart = jest.fn();
const mockChart = Highcharts.chart as jest.Mock; // Assign the mock to a variable

describe('Tests for High Chart', () => {
     const mockProductData = [
          { title: 'Product 1', price: 29.99, rating: { rate: 4.5 } },
          { title: 'Product 2', price: 59.99, rating: { rate: 3.8 } },
     ];

     beforeEach(() => {
          jest.clearAllMocks();
     });

     //Basic to check if component is rendered
     test('renders the component and initializes the chart', () => {
          render(<HighChart productData={mockProductData} />);

          expect(screen.getByLabelText('Metric')).toBeInTheDocument();

          const chartContainer = screen.getByTestId('chart-container');
          expect(chartContainer).toBeInTheDocument();

          expect(mockChart).toHaveBeenCalled();
     });

     //Test for when no data exists
     test('does not initialize the chart when productData is empty', () => {
          render(<HighChart productData={[]} />);

          const chartContainer = screen.getByTestId('chart-container');
          expect(chartContainer).toBeInTheDocument();

          expect(mockChart).not.toHaveBeenCalled();
     });
});
