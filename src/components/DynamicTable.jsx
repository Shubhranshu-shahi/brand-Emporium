import { useState } from "react";

export default function DynamicTable() {
  const [rows, setRows] = useState([
    { id: 1, serial: "", batch: "", model: "", mrp: "" },
  ]);

  const addRow = () => {
    setRows([
      ...rows,
      { id: rows.length + 1, serial: "", batch: "", model: "", mrp: "" },
    ]);
  };

  const handleSubmit = () => {
    const jsonData = JSON.stringify(rows, null, 2);
    console.log("Submitted Data:", jsonData);
    alert("Data saved! Check the console.");
  };

  return (
    <div className="p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Item</th>
              <th className="border px-4 py-2">Serial No.</th>
              <th className="border px-4 py-2">Batch No.</th>
              <th className="border px-4 py-2">Model No.</th>
              <th className="border px-4 py-2">MRP</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={row.id} className="border">
                <td className="border px-4 py-2 text-center">{row.id}</td>
                <td className="border px-4 py-2">
                  <input
                    type="text"
                    className="w-full p-1 border rounded"
                    value={row.serial}
                    onChange={(e) => {
                      const newRows = [...rows];
                      newRows[index].serial = e.target.value;
                      setRows(newRows);
                    }}
                  />
                </td>
                <td className="border px-4 py-2">
                  <input
                    type="text"
                    className="w-full p-1 border rounded"
                    value={row.batch}
                    onChange={(e) => {
                      const newRows = [...rows];
                      newRows[index].batch = e.target.value;
                      setRows(newRows);
                    }}
                  />
                </td>
                <td className="border px-4 py-2">
                  <input
                    type="text"
                    className="w-full p-1 border rounded"
                    value={row.model}
                    onChange={(e) => {
                      const newRows = [...rows];
                      newRows[index].model = e.target.value;
                      setRows(newRows);
                    }}
                  />
                </td>
                <td className="border px-4 py-2">
                  <input
                    type="text"
                    className="w-full p-1 border rounded"
                    value={row.mrp}
                    onChange={(e) => {
                      const newRows = [...rows];
                      newRows[index].mrp = e.target.value;
                      setRows(newRows);
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex space-x-4 mt-4">
        <button
          onClick={addRow}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add Row
        </button>
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
