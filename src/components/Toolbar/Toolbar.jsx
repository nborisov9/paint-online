import React from 'react';

import { ReactSVG } from 'react-svg';

import canvasState from '../../store/canvasState';
import toolState from '../../store/toolState';

import Brush from '../../tools/Brush';
import Rect from '../../tools/Rect';

import brushSVG from '../../assets/img/brush.svg';
import reactSVG from '../../assets/img/square.svg';
import circleSVG from '../../assets/img/circle.svg';
import eraserSVG from '../../assets/img/eraser.svg';
import lineSVG from '../../assets/img/line.svg';
import undoSVG from '../../assets/img/undo.svg';
import redoSVG from '../../assets/img/redo.svg';
import saveSVG from '../../assets/img/save.svg';

import classes from './styles.module.scss';

export const Toolbar = () => {
  console.log(toolState.tool);

  const initialBrush = () => toolState.setTool(new Brush(canvasState.canvas));
  const initialRect = () => toolState.setTool(new Rect(canvasState.canvas));

  return (
    <div className={classes.toolbar}>
      <div className={classes.tools}>
        <ReactSVG src={brushSVG} onClick={initialBrush} />
        <ReactSVG src={reactSVG} onClick={initialRect} />
        <ReactSVG src={circleSVG} />
        <ReactSVG src={eraserSVG} />
        <ReactSVG src={lineSVG} />
        <input type="color" className={classes.colorInput} />
      </div>
      <div className={classes.actions}>
        <ReactSVG src={undoSVG} />
        <ReactSVG src={redoSVG} />
        <ReactSVG src={saveSVG} />
      </div>
    </div>
  );
};
