import React from 'react';

const TableRow = ({ outItems }) => {
  return (
    outItems.map((item) => (
      <tr key={item.id}>
        <td>{item.title}</td>
        <td>
          {`${item.width} x ${item.height}`}
        </td>
        <td>{item.color}</td>
        <td>{item.count}</td>
      </tr>
    ))
  );
};

export default TableRow;
