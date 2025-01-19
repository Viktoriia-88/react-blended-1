import style from './StatisticsItem.module.css'
import { IconContext } from 'react-icons';

const StatisticsItem = ({
  total,
  title,
  icon: Icon
}) => {
  return (
    <>
      <Icon />
      <span className={style.counter}>{total}</span>
      <p className={style.text}>{title}</p>
    </>
  );
};

export default StatisticsItem;
