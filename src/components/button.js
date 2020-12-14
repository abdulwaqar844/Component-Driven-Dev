import React from 'react';
export default function Button({ value, style, className, onClick }) {
  return (
    <button
      style={style}
      className={className}
      onClick={onClick}>
      {value}
    </button>)
}