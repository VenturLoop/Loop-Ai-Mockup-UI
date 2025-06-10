import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // For extended matchers like .toBeVisible()
import MyBookmarksModal from './MyBookmarksModal.jsx';

// Mock the cn utility if it's not automatically handled by the test environment
// jest.mock('@/lib/utils.js', () => ({
//   cn: (...args) => args.filter(Boolean).join(' '),
// }));

describe('MyBookmarksModal', () => {
  const mockOnClose = jest.fn();

  beforeEach(() => {
    // Clear mock calls before each test
    mockOnClose.mockClear();
  });

  test('renders modal with title and default tab when isOpen is true', () => {
    render(<MyBookmarksModal isOpen={true} onClose={mockOnClose} />);
    expect(screen.getByText('My Bookmarks')).toBeVisible();
    expect(screen.getByRole('button', { name: 'Founder Profiles' })).toBeVisible();
    // Check for default tab content
    expect(screen.getByText('List of bookmarked founder profiles.')).toBeVisible();
  });

  test('does not render modal content when isOpen is false', () => {
    render(<MyBookmarksModal isOpen={false} onClose={mockOnClose} />);
    // The component returns null when isOpen is false
    expect(screen.queryByText('My Bookmarks')).not.toBeInTheDocument();
  });

  test('initially displays "Founder Profiles" tab as active and its content', () => {
    render(<MyBookmarksModal isOpen={true} onClose={mockOnClose} />);
    const founderTabButton = screen.getByRole('button', { name: 'Founder Profiles' });
    // A simple way to check for active might be through its attributes if styled distinctively,
    // or by checking if its content is visible.
    expect(founderTabButton).toBeVisible(); // Implicitly, it's the active one by default
    expect(screen.getByText('List of bookmarked founder profiles.')).toBeVisible();
  });

  test('switches tabs and displays corresponding content when tab buttons are clicked', () => {
    render(<MyBookmarksModal isOpen={true} onClose={mockOnClose} />);

    // Click Investor Profiles tab
    const investorTabButton = screen.getByRole('button', { name: 'Investor Profiles' });
    fireEvent.click(investorTabButton);
    expect(screen.getByText('List of bookmarked investor profiles.')).toBeVisible();
    expect(screen.queryByText('List of bookmarked founder profiles.')).not.toBeInTheDocument();

    // Click Saved Projects tab
    const projectsTabButton = screen.getByRole('button', { name: 'Saved Projects' });
    fireEvent.click(projectsTabButton);
    expect(screen.getByText('List of saved projects.')).toBeVisible();
    expect(screen.queryByText('List of bookmarked investor profiles.')).not.toBeInTheDocument();

    // Click back to Founder Profiles tab
    const founderTabButton = screen.getByRole('button', { name: 'Founder Profiles' });
    fireEvent.click(founderTabButton);
    expect(screen.getByText('List of bookmarked founder profiles.')).toBeVisible();
    expect(screen.queryByText('List of saved projects.')).not.toBeInTheDocument();
  });

  test('calls onClose prop when the Close button is clicked', () => {
    render(<MyBookmarksModal isOpen={true} onClose={mockOnClose} />);
    const closeButton = screen.getByRole('button', { name: 'Close' });
    fireEvent.click(closeButton);
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  // Example for testing animation class (more advanced, might need setup)
  // test('applies animation class to tab content', async () => {
  //   render(<MyBookmarksModal isOpen={true} onClose={mockOnClose} />);
  //   const founderContent = screen.getByText('List of bookmarked founder profiles.').closest('div');
  //   expect(founderContent).toHaveClass('animate-fadeIn');
  // });
});
