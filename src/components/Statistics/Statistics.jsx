import PropTypes from 'prop-types';
import {StatisticsSection, Title, List, Item, Label, Percentage} from './Statistics.styled';

 export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
     {title && <Title>{title}</Title>}

      <List>
        {stats.map(state => (
          <Item
           key={state.id} >
            <Label>{state.label}</Label>
            <Percentage>{state.percentage}</Percentage>
          </Item>
        ))}
      </List>
    </StatisticsSection>
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
  