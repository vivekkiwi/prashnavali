"use client";

export default function TableButtons({ name, value, onClick }) {
  return (
    <td className="p-1 sm:p-1.5 md:p-2">
      <button
        type="submit"
        name={name}
        value={value}
        onClick={onClick}
        className="w-full rounded-lg border border-amber-200 bg-amber-50 px-2 py-2 text-[11px] font-medium leading-tight transition duration-150 hover:-translate-y-0.5 hover:bg-amber-100 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 sm:px-3 sm:text-sm md:px-4 md:py-3 md:text-base"
      >
        {value}
      </button>
    </td>
  );
}
