import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import TableRow from '@/components/blocks/local/TableRow';

const OutOfGrillItems = () => {
  const state = useSelector((store) => store.data);
  const { t } = useTranslation();

  const isShow = state.outBag.length !== 0;

  return (
    <div className="border rounded">
      <p className="bg-light p-2 m-0">
        { t('common.table.title') }
      </p>
      <div className="px-2">
        <table className="table table-sm">
          <thead>
            <tr>
              <th scope="col">{ t('common.table.header.type') }</th>
              <th scope="col">{ t('common.table.header.size') }</th>
              <th scope="col">{ t('common.table.header.color') }</th>
              <th scope="col">{ t('common.table.header.count') }</th>
            </tr>
          </thead>
          <tbody>
            {
              isShow ? (
                <TableRow />
              ) : (
                <tr>
                  <th>
                    {t('common.table.item.empty')}
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

export default OutOfGrillItems;
