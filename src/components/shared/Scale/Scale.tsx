import React, {FC} from 'react';

import Point from '../Point/Point';

import {STRENGTH_LEVEL} from '../../../constants/strengthLevel';

import './Scale.scss';

type ScaleProps = {
  strengthLevel: STRENGTH_LEVEL;
}

const Scale: FC<ScaleProps> = ({strengthLevel}) => {
  return (
    <div className={`scale ${strengthLevel}`}>
      <Point classNames="first" />
      <Point classNames="second" />
      <Point classNames="third" />
    </div>
  );
};

export default Scale;