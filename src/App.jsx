import React, { useState } from "react";
import { Navs } from "./components/Navs";
import { Route, Routes } from "react-router-dom";
import Sales from "./assets/pages/Sales";
import Test from "./assets/pages/test";

import Reports from "./assets/pages/Reports";
import Dashboad from "./assets/pages/Dashboad";

import Items from "./assets/pages/Items";
import Parties from "./assets/pages/Parties";
import SideNavNew from "./assets/pages/SideNavNew";
import TestForm from "./assets/pages/testForm";
import AddItem from "./assets/pages/AddItem";

function App() {
  const [num, setNum] = useState(0);
  const decrement = () => {
    setNum(num - 1);
  };
  return (
    <div>
      {/* <SideNavNew /> */}
      <Navs />
      {/* <Test/> */}
      <Routes>
        <Route path="/" element={<Dashboad />} />
        <Route path="/dashboard" element={<Dashboad />} />
        <Route path="/parties" element={<Parties />} />
        <Route path="/test" element={<Test />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/items" element={<Items />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/testform" element={<TestForm />} />
        <Route path="/items/add-item" element={<AddItem />} />
      </Routes>
    </div>
  );
}

export default App;
