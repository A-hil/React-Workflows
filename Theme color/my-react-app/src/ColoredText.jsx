import React from 'react'

function ColoredText({ color }) {
  return (
    <p style={{ color: color }}>
      Этот текст будет цвета: {color}
    </p>
  );
}

export default ColoredText;