import React from 'react';
import Dashboard from './dashboard';
import { render, screen, cleanup } from '@testing-library/react';

test('should render dashboard component', () => {
    render(<Dashboard />);
    const dashboardElement = screen.getByTestId('dashboard-1');
    expect(dashboardElement).toBeInTheDocument();
})
