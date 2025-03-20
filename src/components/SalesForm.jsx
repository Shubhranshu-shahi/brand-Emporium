import React, { useState } from "react";
import currentDate from "../assets/helper/Helpers";

function SalesForm() {
  const [itemsCount, setItemsCount] = useState(1);

  const addNewRow = () => {
    setTimeout(() => {
      setItemsCount((itemsCount) => itemsCount + 1);
      const tab = document.querySelector(".salesTableCls");

      var tBody = tab.getElementsByTagName("tbody")[0];
      console.log(itemsCount);
      tBody.innerHTML += `<tr>
      <td class="border p-2">${itemsCount}</td>
                <td class="border p-2">
                  <input type="text" class="w-full outline-none" />
                </td>
                <td class="border p-2">
                  <input type="text" class="w-full outline-none" />
                </td>
                <td class="border p-2">
                  <input type="text" class="w-full outline-none" />
                </td>
                <td class="border p-2">
                  <input type="text" class="w-full outline-none" />
                </td>
                <td class="border p-2">
                  <input type="text" class="w-full outline-none" />
                </td>
                <td class="border p-2">
                  <input type="number" class="w-full outline-none" />
                </td>
                <td class="border p-2">
                  <select class="w-full p-1 border rounded">
                    <option>None</option>
                  </select>
                </td>
                <td class="border p-2"></td>
                <td class="border p-2">
                  <input type="number" class="w-full outline-none" />
                </td>
                <td class="border p-2">
                  <select class="w-full p-1 border rounded">
                    <option>None</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </td>
                <td class="border p-2">0</td>
        </tr>`;
    }, 300);
  };
  return (
    <div className="flex w-full items-center justify-center">
      <div class="p-2 w-full bg-gray-300 rounded-xl">
        <div class="overflow-x-auto min-w-full mx-auto bg-gray-700 p-6 rounded-lg shadow-lg">
          <div class="flex justify-between items-center mb-4">
            <h1 class="font-bold text-3xl">Sales</h1>
            <div>
              {/* <label class="inline-flex items-center cursor-pointer">
                <span class="mr-2">Credit</span>
                <input type="checkbox" class="toggle-checkbox hidden" />
                <span class="w-10 h-5 bg-gray-300 rounded-full shadow-inner flex items-center">
                  <span class="toggle-dot w-4 h-4 bg-white rounded-full shadow inline-block transform transition"></span>
                </span>
                <span class="ml-2">Cash</span>
              </label> */}
            </div>
          </div>
          <div class="grid grid-cols-5 gap-4 mb-4">
            <div>
              <label class="block text-gray-300">Customer</label>
              <input
                class="w-full p-2 border rounded"
                list="ice-cream-flavors"
                id="ice-cream-choice"
                name="ice-cream-choice"
              />

              <datalist id="ice-cream-flavors">
                <option value="Chocolate"></option>
                <option value="Coconut"></option>
                <option value="Mint"></option>
                <option value="Strawberry"></option>
                <option value="Vanilla"></option>
              </datalist>
            </div>
            <div>
              <label class="block text-gray-700">Phone No.</label>
              <input
                type="text"
                class="w-full p-2 border rounded"
                placeholder="Phone No."
              />
            </div>
            <div></div>
            <div></div>
            <div>
              <aside class="bg-gray-100 p-4 rounded-lg mb-4">
                <p class="text-gray-700">
                  <strong>Invoice Number:</strong> 429
                </p>
                <p class="text-gray-700">
                  <strong>Invoice Date:</strong> {currentDate()}
                </p>
              </aside>
            </div>
          </div>

          <table
            class="w-full border-collapse border salesTableCls border-gray-300 mb-4"
            id="myTable"
          >
            <thead>
              <tr class="bg-gray-800">
                <th class="border w-16 p-2">Item</th>
                <th class="border w-50 p-2">Serial No.</th>
                <th class="border w-40 p-2">Batch No.</th>
                <th class="border w-40 p-2">Model No.</th>
                <th class="border w-26 p-2">MRP</th>
                <th class="border w-26 p-2">Size</th>
                <th class="border w-26">Qty</th>
                <th class="border w-26 p-2">Unit</th>
                <th class="border w-32 p-2">Price/Unit</th>
                <th class="border w-32 p-2">Discount</th>
                <th class="border w-32 p-2">Tax</th>
                <th class="border w-36 p-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border p-2">{itemsCount}</td>
                <td class="border p-2">
                  <input type="text" class="w-full outline-none" />
                </td>
                <td class="border p-2">
                  <input type="text" class="w-full outline-none" />
                </td>
                <td class="border p-2">
                  <input type="text" class="w-full outline-none" />
                </td>
                <td class="border p-2">
                  <input type="text" class="w-full outline-none" />
                </td>
                <td class="border p-2">
                  <input type="text" class="w-full outline-none" />
                </td>
                <td class="border p-2">
                  <input type="number" class="w-full outline-none" />
                </td>
                <td class="border p-2">
                  <select class="w-full p-1 border rounded">
                    <option>None</option>
                  </select>
                </td>
                <td class="border p-2"></td>
                <td class="border p-2">
                  <input type="number" class="w-full outline-none" />
                </td>
                <td class="border p-2">
                  <select class="w-full p-1 border rounded">
                    <option>None</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </td>
                <td class="border p-2">0</td>
              </tr>
            </tbody>
          </table>
          <button
            onClick={addNewRow}
            class="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add Row
          </button>
          <div class="flex justify-between mt-4 items-center">
            <label class="inline-flex items-center">
              <input type="checkbox" class="mr-2" /> Round Off
              <input
                type="text"
                class="w-10 mx-1 p-1 border rounded"
                placeholder="0"
              />
            </label>

            <span>Total: 0</span>
          </div>
          <div class="flex justify-end mt-4 space-x-2">
            <button class="bg-gray-300 px-4 py-2 rounded">Share</button>
            <button class="bg-blue-500 text-white px-4 py-2 rounded">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalesForm;
