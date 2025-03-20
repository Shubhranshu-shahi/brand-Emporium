import React, { useEffect, useState } from "react";
import TableRow from "./TableRow";
import json2array from "../assets/helper/jsonToArray";

function Tables({ datas }) {
  const newData = json2array(datas);;
  // console.log(datas);
  const [parties, setParties] = useState(newData);


// useEffect(() => {
//   fetchPartiesData();
// }, []);
//   const fetchPartiesData = () => {
//     // fetch()
//     parties.forEach((request) => {
//       setParties(request);
//     });
//   };
  
  return (
    <div>
      <table className="responsive-table">
        <caption>Transcations</caption>
        <thead>
          <tr>
            <th scope="col">Status</th>
            <th scope="col">Type</th>
            <th scope="col">Number</th>
            <th scope="col">Date</th>
            <th scope="col">Total</th>

            <th scope="col">Balance</th>
          </tr>
        </thead>

        <tbody>
          {parties.map((item, index) => (
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
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tables;
