import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import { StatisticsItem } from '../StatisticsItem/StatisticsItem';
import style from './Statistics.module.css';

const Statistics = (
  { stats }
) => {
  const icons = [
    FaRegThumbsUp,
    MdPeople,
    MdOutlineProductionQuantityLimits,
    GiTreeDoor
  ];
  return (
    <div>
      <h3 className={style.title}>Main Statistics</h3>
      <ul className={style.list}>
        {stats.map((stat, index) => (
          <li className={style.item} key={stat.id}>
            <StatisticsItem icon={icons[index]} {...stat} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Statistics;
