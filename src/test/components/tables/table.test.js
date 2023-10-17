import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Table from '@/app/components/table/table';

describe('Table Component', () => {
  const columns = ['Name', 'Age', 'Country'];
  const data = [
    { Name: 'Alice', Age: 28, Country: 'USA' },
    { Name: 'Bob', Age: 32, Country: 'Canada' },
    // Add more data as needed for your tests
  ];

  it('renders table columns and data', () => {
    render(<Table columns={columns} data={data} button="Add" onClick={jest.fn()} />);

    // Check if column headers are rendered
    columns.forEach((column) => {
      expect(screen.getByText(column)).toBeInTheDocument();
    });

    // Check if data rows are rendered
    data.forEach((row) => {
      expect(screen.getByText(row.Name)).toBeInTheDocument();
      expect(screen.getByText(row.Age.toString())).toBeInTheDocument();
      expect(screen.getByText(row.Country)).toBeInTheDocument();
    });
  });

  it('calls onClick function when the button is clicked', () => {
    const onClickMock = jest.fn();
    render(<Table columns={columns} data={data} button="Add" onClick={onClickMock} />);

    const addButton = screen.getByText('Add');
    fireEvent.click(addButton);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
