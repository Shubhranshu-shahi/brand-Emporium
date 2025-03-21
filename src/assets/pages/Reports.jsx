import React from "react";
import "./sales.css";
import SaleTable from "../../components/SaleTable";
import TestingTable from "../../components/testingTable";
import ReportComponent from "../../components/ReportComponent";
function Reports() {
  console.log("hello");
  return (
    <div className="p-4 mt-16 sm:ml-64">
      {/* <SaleTable /> */}
      
      <ReportComponent/>
    </div>
  );
}

export default Reports;
