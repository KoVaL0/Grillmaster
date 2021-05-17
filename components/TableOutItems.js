import React from 'react';
import { useTranslation } from 'react-i18next';
import TableRow from '@components/TableRow';

const TableOutItems = ({ outItems }) => {
  const { t } = useTranslation();
  return (
    <div className="border rounded">
      <p className="bg-light p-2 m-0">
        {t('Items out')}
      </p>
      <div className="px-2">
        <table className="table table-sm">
          <thead>
            <tr>
              <th scope="col">{t('Type item')}</th>
              <th scope="col">{t('Size item')}</th>
              <th scope="col">{t('Color item')}</th>
              <th scope="col">{t('Count item')}</th>
            </tr>
          </thead>
          <tbody>
            {
            outItems ? (
              <TableRow outItems={outItems} />
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
