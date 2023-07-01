import React, {FC} from 'react';
import './Point.scss'

type PointPros = {
  classNames?: string;
}

export const Point:FC<PointPros> = ({classNames}) => {
  return (
    <div className={`point ${classNames}`} data-testid="Point" />
  );
};
