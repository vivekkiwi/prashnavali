"use client";

import cx from "classnames";
import { useState } from "react";
import TableButtons from "../TableButtons";
import Heading from "../Heading";

import Results from "../../config/result-config.json";
import BUTTON_VALUES from "@/config/button-values.config";
import { BUTTONS_PER_ROW } from "@/constants/global-constants";
import { chunkButtons } from "@/utils";
import ResultPopUp from "../ResultPopUp";

export default function Table() {
  const [result, setResult] = useState(null);
  const rows = chunkButtons(BUTTON_VALUES, BUTTONS_PER_ROW);

  const handleButtonClick = ({ row, col, value }) => {
    const label = `${row}_${col}_${value}`;
    const result = Results[`${label}`];
    setResult(result);
  }

  const handlePopUpClose = () => {
    setResult(null);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
      <ResultPopUp result={result} onClose={handlePopUpClose} />
      <div className="mx-auto w-full max-w-6xl">
        <div className="rounded-2xl bg-white/95 p-6 sm:p-8 shadow-2xl ring-1 ring-amber-100 backdrop-blur">
          <Heading />
          <div
            id="chart"
            className="overflow-x-auto rounded-xl border border-amber-100 bg-white shadow-sm sm:overflow-hidden"
          >
            <table className="w-full table-fixed border-collapse text-center text-amber-900 text-[11px] sm:text-sm md:text-base">
              <tbody>
                {rows.map((row, rowIndex) => (
                  <tr
                    key={`row-${rowIndex}`}
                    className="border-b border-amber-100 last:border-0 even:bg-amber-50/30"
                  >
                    {row.map((value, columnIndex) => {
                      const index = rowIndex * BUTTONS_PER_ROW + columnIndex + 1;
                      const name = String(index).padStart(2, "0");
                      const onClick = () => handleButtonClick({ row: rowIndex, col: columnIndex, value });

                      return (
                        <TableButtons key={`cell-${name}`} name={name} value={value} onClick={onClick} />
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
