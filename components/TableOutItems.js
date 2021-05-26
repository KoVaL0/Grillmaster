import React from 'react';
import { useTranslation } from 'react-i18next';

import TableRow from '@components/TableRow';
import { useSelector } from 'react-redux';

const TableOutItems = () => {
  const state = useSelector((store) => store.data);
  const { t } = useTranslation();

  const isShow = state.outBag.length !== 0;

  return (
    <div className="border rounded">
      <p className="bg-light p-2 m-0">
        { t('Items out') }
      </p>
      <div className="px-2">
        <table className="table table-sm">
          <thead>
            <tr>
              <th scope="col">{ t('Type item') }</th>
              <th scope="col">{ t('Size item') }</th>
              <th scope="col">{ t('Color item') }</th>
              <th scope="col">{ t('Count item') }</th>
            </tr>
          </thead>
          <tbody>
            {
              isShow ? (
                <TableRow />
              ) : (
                <tr>
                  <th>
                    {t('Empty item')}
                  </th>
                </tr>
              )
          }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableOutItems;
