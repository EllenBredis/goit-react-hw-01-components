import PropTypes from 'prop-types';
import style from './Statistics.module.css';

 export const Statistics = ({ title, stats }) => {
  return (
    <section className={style.statistics}>
      {title && <h2 className={style.title}>{title}</h2>}

      <ul className={style.list}>
        {stats.map(state => (
          <li className={style.item} key={state.id} >
            <span className={style.label}>{state.label}</span>
            <span className={style.percentage}>{state.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
  