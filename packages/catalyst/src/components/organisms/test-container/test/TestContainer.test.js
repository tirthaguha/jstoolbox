import React from 'react';
import TestContainer from '../TestContainer';

describe('TestContainer suit', ()=>{
  test('renders without error', ()=>{
    render(<TestContainer label={"Hello World"} />)
    const textElement = screen.getByText("Hello World");
    expect(textElement).toBeInTheDocument();
  });
})