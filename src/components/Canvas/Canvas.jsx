import React from 'react';

import { observer } from 'mobx-react-lite';

import canvasState from '../../store/canvasState';
import toolState from '../../store/toolState';

import Brush from '../../tools/Brush';

import classes from './styles.module.scss';

export const Canvas = observer(() => {
  const canvasRef = React.useRef();

  React.useEffect(() => {
    if (!canvasRef.current) {
      return;
    }

    canvasState.setCanvas(canvasRef.current);
    toolState.setTool(new Brush(canvasRef.current));
  }, []);

  return (
    <div className={classes.canvas}>
      <canvas ref={canvasRef} width={900} height={500}></canvas>
    </div>
  );
});
