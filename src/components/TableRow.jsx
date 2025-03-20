import React from 'react'

function TableRow(item, index) {
    console.log(item + index);
    return (
        
    <tr key={index}>
      <td data-title="Released">{item.name}</td>
      <td data-title="Released">{item.amount}</td>
      <td data-title="Studio">{item.phone}</td>
      <td data-title="Studio">{item.email}</td>
      <td data-title="Worldwide Gross" data-type="currency">
        {item.Gstin}
      </td>
      <td data-title="Domestic Gross" data-type="currency">
        {item.Gstin}
      </td>
    </tr>
  );
}

export default TableRow