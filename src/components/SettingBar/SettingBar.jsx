import React from 'react';

import toolState from '../../store/toolState';

import classes from './styles.module.scss';

export const SettingBar = () => {
  const changeLineWidth = e => toolState.setLineWidth(e.target.value);

  return (
    <div className={classes.settingBar}>
      <label htmlFor="line-number" className={classes.label}>
        Толщина линии
      </label>
      <input
        onChange={changeLineWidth}
        id="line-number"
        type="number"
        defaultValue={1}
        min={1}
        max={50}
        className={classes.inputNumber}
      />
    </div>
  );
};
