import React from 'react';
import Test from '../Test';

describe('Test suit', ()=>{
  test('renders without error', ()=>{
    render(<Test label={"Hello World"} />)
    const textElement = screen.getByText("Hello World");
    expect(textElement).toBeInTheDocument();
  });
})