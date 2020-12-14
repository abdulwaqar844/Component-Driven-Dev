import React from 'react';
import Button from '../components/button';

export default {
  title: 'Hello Story',
  component: Button
}
export const Btnlarge = () => (
  <Button value={"Large Button"}
    style={{ width: "250px", background :"blue" }}
    onClick={() => alert("clicked")}
  />
)
export const Btnmedium = () => (
  <Button value={"Medium Button"}
    style={{ width: "100px", background :"light blue" }}
    onClick={() => alert("clicked")}
  />
)

