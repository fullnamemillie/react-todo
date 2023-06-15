import React from 'react';
import { BsCheck } from "react-icons/bs";
import style from './Check.module.css';

const Check = ({isCompleted, onClick}) => {
  return (
    <div className={isCompleted ? style.active : style.border} onClick={onClick}>
        {isCompleted && <BsCheck className={style.check} />
}
    </div>
  )
}

export default Check