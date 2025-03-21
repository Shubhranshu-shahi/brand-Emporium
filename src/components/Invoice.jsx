import React from "react";

function Invoice() {
  return (
    <div class="bg-gray-100 p-6 sm:ml-64 text-black">
      <div class="max-w-6xl mt-16 mx-auto bg-white p-6 rounded-lg shadow-md">
        {/*  */}

        {/*  */}
        <div className="grid w-full">
          <div class="bg-gray-800 flex">
            <img src="src\assets\img\logo-transp.png" class="h-16 m-2" />

            <div class=" bg-red-600 w-full text-white h-22 p-4 rounded-l-full flex flex-row justify-between items-center">
              <div class="basis-1/4">
                <p class="font-bold">📞 9519708116</p>
              </div>
              <div class="basis-2/4">
                <p class="basis-1">📧 thebrandemporiumenterprise@gmail.com</p>
              </div>
              <div class="basis-2/4">
                <p class="basic-">📍 L-II/9/F Sector-F Kanpur Road, Lucknow</p>
              </div>
              <div class="flex gap-16"></div>
            </div>
          </div>
        </div>
        <div className="flex-row p-2 w-2xl bg-gray-800 text-gray-100 rounded-r-full">
          <h1 class="text-xl font-bold">The Brand Emporium Enterprise</h1>
          <p>GSTIN: 09AAWFT0842R1Z4</p>
          <p>State: 09 - Uttar Pradesh</p>
        </div>
        <div class="grid grid-cols-6 gap-4">
          <div class="p-4 col-start-1 col-end-3">
            <h3 class="mt-4 font-bold text-red-500">Bill To:</h3>
            <p>
              <strong>Name:</strong> Abhishek
            </p>
            <p>
              <strong>Contact No.:</strong> 8317053678
            </p>
          </div>
          <div class="p-4 col-span-2 col-end-7">
            <h2 class="text-lg font-semibold">Tax Invoice</h2>
            <p>
              <strong>Invoice No:</strong> 392
            </p>
            <p>
              <strong>Date:</strong> 03/01/2025
            </p>
          </div>
        </div>

        <table class="w-full border-collapse border mt-4">
          <thead>
            <tr class="bg-gray-700 text-gray-100">
              <th class="border p-2">#</th>
              <th class="border p-2">Item Name</th>
              <th class="border p-2">HSN/SAC</th>
              <th class="border p-2">MRP</th>
              <th class="border p-2">Quantity</th>
              <th class="border p-2">Price/Unit</th>
              <th class="border p-2">Discount</th>
              <th class="border p-2">GST</th>
              <th class="border p-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border p-2 text-center">1</td>
              <td class="border p-2">Puma Shoe 4063699711455</td>
              <td class="border p-2"></td>
              <td class="border p-2 text-right">₹ 5,499.00</td>
              <td class="border p-2 text-center">1</td>
              <td class="border p-2 text-right">₹ 4,909.82</td>
              <td class="border p-2 text-right">₹ 3,436.87 (70%)</td>
              <td class="border p-2 text-right">₹ 176.75 (12%)</td>
              <td class="border p-2 text-right">₹ 1,649.70</td>
            </tr>
          </tbody>
        </table>

        <div class="mt-4 p-4 border bg-gray-100">
          <p>
            <strong>Sub Total:</strong> ₹ 4,909.82
          </p>
          <p>
            <strong>Discount:</strong> ₹ 3,436.87
          </p>
          <p>
            <strong>SGST @6%:</strong> ₹ 38.38
          </p>
          <p>
            <strong>CGST @6%:</strong> ₹ 38.38
          </p>
          <p>
            <strong>Round Off:</strong> ₹ 0.30
          </p>
          <p class="pt-1 pb-1 text-xl font-bold text-blue-700">
            <strong>Total: ₹ 1,650.00 </strong>
          </p>
          <p>
            <strong>Received:</strong> ₹ 0.00
          </p>
          <p>
            <strong>Balance:</strong> ₹ 1,650.00
          </p>
          <p class="text-green-600 font-bold">
            <strong>You Saved:</strong> ₹ 3,849.30
          </p>
        </div>

        <div class="mt-4 p-4">
          <p>
            <strong className="text-red-600">Invoice Amount In Words:</strong>
          </p>
          <p>One Thousand Six Hundred Fifty Rupees only</p>
        </div>

        <div class="mt-4 p-4 border-t">
          <p class="font-bold text-red-600">Terms And Conditions</p>
          <p>No return nor refund.</p>
        </div>

        <div class="mt-4 text-right">
          <p>For: The Brand Emporium Enterprise</p>
          <p class="font-bold mt-2">Authorized Signatory</p>
        </div>
      </div>
    </div>
  );
}

export default Invoice;
