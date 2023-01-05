import PropTypes from 'prop-types';
import {Transaction, TableList, TableHeadItem,TableBodyItem } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Transaction>
      <thead>
        <TableList>
          <TableHeadItem>Type</TableHeadItem>
          <TableHeadItem>Amount</TableHeadItem>
          <TableHeadItem>Currency</TableHeadItem>
        </TableList>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TableList
            key={id}>
            <TableBodyItem>{type}</TableBodyItem>
            <TableBodyItem>{amount}</TableBodyItem>
            <TableBodyItem>{currency}</TableBodyItem>
          </TableList>
        ))}
      </tbody>
    </Transaction>
  );
};

TransactionHistory.propTyes = {
    items: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired,
      })
    ),
  };
  