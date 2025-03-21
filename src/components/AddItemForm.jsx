import React from "react";

function AddItemForm() {
  return (
    <div class="flex-1 p-6">
      {/* <!-- Add Item Section --> */}
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold mb-4">Add Item</h3>

        {/* <!-- Additional Forms from Second Image --> */}
        <div class="grid grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="Item Name *"
            class="w-full p-2 border rounded"
          />
          <div class="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Item HSN"
              class="w-full p-2 border rounded"
            />
            <button class="bg-blue-500 text-white px-3 py-2 rounded">🔍</button>
          </div>
          <select class="w-full p-2 border rounded">
            <option>Category</option>
          </select>
          <div class="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Item Code"
              class="w-full p-2 border rounded"
            />
            <button class="bg-blue-500 text-white px-3 py-2 rounded">
              Assign Code
            </button>
          </div>
        </div>

        {/* <!-- Tracking Options --> */}
        <div class="flex space-x-4 mb-4">
          <label class="flex items-center">
            <input type="radio" name="tracking" class="mr-2" /> Batch Tracking
          </label>
          <label class="flex items-center">
            <input type="radio" name="tracking" class="mr-2" /> Serial No.
            Tracking
          </label>
          <a href="#" class="text-blue-500">
            Clear Tracking
          </a>
        </div>

        {/* <!-- Pricing & Stock Tabs --> */}
        <div class="border-b mb-4">
          <button class="text-red-500 border-b-2 border-red-500 px-4 py-2">
            Pricing
          </button>
          
        </div>

        <div class="grid grid-cols-3 gap-4">
          <div>
            <label class="block text-gray-700">MRP</label>
            <input
              type="text"
              class="w-full p-2 border rounded"
              placeholder="MRP"
            />
          </div>
          <div>
            {/* <div class="flex space-x-2"> */}
            <label class="block text-gray-700">MRP</label>
            <input
              type="text"
              class="w-full p-2 border rounded"
              placeholder="Disc. On MRP For Sale (%)"
            />
          </div>
          <div>
            <input
              type="text"
              class="w-full p-2 border rounded"
              placeholder="Disc. On MRP For Wholesale (%)"
            />
          </div>
          <div>
            <label class="block text-gray-700">Sale Price</label>
            <input
              type="text"
              class="w-full p-2 border rounded"
              placeholder="Sale Price"
            />
          </div>
          <div>
            <label class="block text-gray-700">Wholesale Price</label>
            <input
              type="text"
              class="w-full p-2 border rounded"
              placeholder="Wholesale Price"
            />
          </div>
          <div>
            <label class="block text-gray-700">Purchase Price</label>
            <input
              type="text"
              class="w-full p-2 border rounded"
              placeholder="Purchase Price"
            />
          </div>
          <div>
            <label class="block text-gray-700">Taxes</label>
            <select class="w-full p-2 border rounded">
              <option>None</option>
              <option>5%</option>
              <option>12%</option>
            </select>
          </div>
        </div>

        <div class="mt-4 text-right">
          <button class="bg-gray-500 text-white px-4 py-2 rounded mr-2">
            Save & New
          </button>
          <button class="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
        </div>
      </div>
    </div>
  );
}

export default AddItemForm;
