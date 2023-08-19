import React from 'react';
import Test2 from '../Test2';

describe('Test2 suit', ()=>{
  test('renders without error', ()=>{
    render(<Test2 label={"Hello World"} />)
    const textElement = screen.getByText("Hello World");
    expect(textElement).toBeInTheDocument();
  });
})