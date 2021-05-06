import React from 'react';

const TableOutItems = ({ outItems }) => (
  <div className="border rounded">
    <p className="bg-light p-2 m-0">
      Items out of grill
    </p>
    <div className="px-2">
      <table className="table table-sm">
        <thead>
          <tr>
            <th scope="col">Type</th>
            <th scope="col">Size</th>
          </tr>
        </thead>
        <tbody>
          {
<<<<<<< HEAD
          outItems.length > 0 ? (
            outItems.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>
                  {`${item.width} x ${item.height}`}
                </td>
=======
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
>>>>>>> c6167281f87c38b82fc43d0b146773e82d1ea1ad
              </tr>
            ))
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

export default TableOutItems;
