import React from "react";

const TableBody = ({ currentItem }) => {
  // console.log(currentItem[0]);
  // console.log(currentItem[0].map(cur => cur))
  return (
    <>
      <tbody>
        {currentItem[0].map((i, index) => {
          return (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{i.item}</td>
              <td>#{i.price}</td>
              <td>{i.amount}</td>
              <td>
                <input type='checkbox' checked={ i.isChecked } />
              </td>
            </tr>
          );
        })}
      </tbody>
    </>
  );
};

export default TableBody;
