import React from 'react';

const TableOutItems = ({outItems}) => {
  return (
    <div className='border rounded'>
      <p className='bg-light p-2 m-0'>
        Items out of grill
      </p>
      <div className='px-2'>
        <table className='table table-sm'>
          <thead>
          <tr>
            <th scope="col">Type</th>
            <th scope="col">Size</th>
          </tr>
          </thead>
          <tbody>
          {
            outItems.length > 0 ? (
              outItems.map((item, index) => {
                return <tr key={index}>
                  <td>{item.title}</td>
                  <td>{item.width} x {item.height}</td>
                </tr>;
              })
            ) : (
              <tr>
                <th>
                  Empty
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