import React from 'react';
import Test2 from './';
import defaultConfig from './Test2.mock';

export default {
  title: '/Test2',
  component: Test2
};

export const Story = () => <Test2 {...defaultConfig} />;