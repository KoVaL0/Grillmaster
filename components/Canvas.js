import React from 'react';
import { useSelector } from 'react-redux';

const Canvas = () => {
  const state = useSelector((store) => store.data);
  const { width, height } = state.grill;

  const isShow = state.bag.length !== 0;

  return (
    <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg">
      <g>
        <title>background</title>
        <rect fill="#F4F4F4" id="canvas_background" height={height} width={width} y="-1" x="-1" />
      </g>
      {isShow ? state.bag.map((item) => (
        <g key={item.id}>
          <title>{item.title}</title>
          <rect stroke="#000" {...item} rx="0.3em" />
        </g>
      )) : null}
    </svg>
  );
};

export default Canvas;
