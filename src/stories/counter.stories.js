import React from 'react';
import Counter from '../components/counter';

export default {
  title: 'Counter',
  component: Counter
}
export const defaulCounter = () => (
  <Counter />
  ) 
  
export const Counterwith10 = () => (
    <Counter InitialCounter={10}  />
    ) 