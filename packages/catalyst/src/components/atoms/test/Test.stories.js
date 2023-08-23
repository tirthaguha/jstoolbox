import React from 'react';
import Test from './';
import defaultConfig from './Test.mock';

export default {
  title: '/Test',
  component: Test
};

export const Story = () => <Test {...defaultConfig} />;