import React from "react";

import { BalanceSheetTableProps } from "../types/balanceSheetTypes";

const BalanceSheetTable: React.FC<BalanceSheetTableProps> = ({ report }) => {
  const { ReportTitles, Rows } = report;

  const headerRow = Rows.find((row) => row.RowType === "Header");
  const section = Rows.find((row) => row.RowType === "Section");
  const sectionRows = section?.Rows || [];

  return (
    <div className=" flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-2xl">
        {/* Display Report Titles */}
        <div className="mb-6 text-center">
          {ReportTitles.map((title, index) => (
            <h2
              key={index}
              className="text-xl font-bold text-gray-800 mb-2 first:mt-0"
            >
              {title}
            </h2>
          ))}
        </div>

        {/* Table */}
        <table className="w-full border border-gray-300 rounded-lg overflow-hidden shadow-lg bg-white">
          <tbody>
            {/* Header Label */}
            <tr>
              <td
                colSpan={headerRow?.Cells?.length || 1}
                className="text-center bg-blue-600 text-white  px-4 py-3 font-semibold"
              >
                Header
              </td>
            </tr>
            {/* Header Row */}
            {headerRow && (
              <tr className="bg-gray-100">
                {headerRow.Cells?.map((cell, index) => (
                  <td
                    key={index}
                    className="border border-gray-300 px-4 py-2 text-center"
                  >
                    {cell.Value || "-"}
                  </td>
                ))}
              </tr>
            )}

            {/* Section Label */}
            <tr>
              <td
                colSpan={sectionRows[0]?.Cells?.length || 1}
                className="text-center bg-blue-600 text-white px-4 py-3 font-semibold"
              >
                Section
              </td>
            </tr>
            {/* Section Rows */}
            {sectionRows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.Cells?.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className="border border-gray-300 px-4 py-2 text-center"
                  >
                    {cell.Value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BalanceSheetTable;
