import React from 'react';

import { ReactSVG } from 'react-svg';

import canvasState from '../../store/canvasState';
import toolState from '../../store/toolState';

import Brush from '../../tools/Brush';
import Rect from '../../tools/Rect';
import Circle from '../../tools/Circle';
import Earser from '../../tools/Earser';
import Line from '../../tools/Line';

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
  const initialBrush = () => toolState.setTool(new Brush(canvasState.canvas));
  const initialRect = () => toolState.setTool(new Rect(canvasState.canvas));
  const initCircle = () => toolState.setTool(new Circle(canvasState.canvas));
  const itnitErarser = () => toolState.setTool(new Earser(canvasState.canvas));
  const itnitLine = () => toolState.setTool(new Line(canvasState.canvas));

  const changeColor = e => {
    toolState.setStrokeColor(e.target.value);
    toolState.setFillColor(e.target.value);
  };

  return (
    <div className={classes.toolbar}>
      <div className={classes.tools}>
        <ReactSVG src={brushSVG} onClick={initialBrush} />
        <ReactSVG src={reactSVG} onClick={initialRect} />
        <ReactSVG src={circleSVG} onClick={initCircle} />
        <ReactSVG src={eraserSVG} onClick={itnitErarser} />
        <ReactSVG src={lineSVG} onClick={itnitLine} />
        <input type="color" className={classes.colorInput} onChange={changeColor} />
      </div>
      <div className={classes.actions}>
        <ReactSVG src={undoSVG} />
        <ReactSVG src={redoSVG} />
        <ReactSVG src={saveSVG} />
      </div>
    </div>
  );
};
