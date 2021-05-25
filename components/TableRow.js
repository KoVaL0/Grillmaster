import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const TableRow = () => {
  const state = useSelector((store) => store.data);
  const { t } = useTranslation();

  return (
    state.outBag.map((item) => (
      <tr key={item.id}>
        <td>{item.title}</td>
        <td>
          { t('Size params', { ...item }) }
        </td>
        <td>{item.color}</td>
        <td>{item.count}</td>
      </tr>
    ))
  );
};

export default TableRow;
