import React from 'react';
import { useSelector } from 'react-redux';

const Canvas = ({grillItems}) => {
  const state = useSelector((state) => state)
  const width = state.data.grill.width
  const height = state.data.grill.height

  return (
    <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg">
      <g>
        <title>background</title>
        <rect fill="#F4F4F4" id="canvas_background" height={height} width={width} y="-1" x="-1"/>
      </g>
      {grillItems.map((item, id) => {
        return <g key={id}>
          <title>{item.title}</title>
          <rect id={id} stroke="#000" height={item.height} width={item.width} y={item.y} x={item.x} fill="#729C62" rx="0.3em"/>
        </g>
      })}
    </svg>
  );
};

export default Canvas;