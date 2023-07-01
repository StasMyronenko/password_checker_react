import React, {FC} from 'react';
import './Point.scss'

type PointPros = {
  classNames?: string;
}

const Point:FC<PointPros> = ({classNames}) => {
  return (
    <div className={`point ${classNames}`} />
  );
};

export default Point;