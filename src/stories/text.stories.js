import React from 'react';
import Text from '../components/button';

export default {
  title: 'Hello Story',
  component: Text
}
export const TextLarge = () => (
  <Text value={"This is Sample paragraph for storybook . Compnent testing developing best approch to use in Software Engeering "}
    style={{ color:"grey" ,fontSize:28, background:"black" }}
    
  />
)
export const Textsmall = () => (
    <Text value={"This is Sample paragraph for storybook . Compnent testing developing best approch to use in Software Engeering "}
      style={{ color:"grey" , fontSize:18, background:"black" }}
      
    />
  ) 