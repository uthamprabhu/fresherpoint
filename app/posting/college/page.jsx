'use client'

import { useRouter } from "next/navigation";

export default function CollegeStep() {
  const router = useRouter();

  const handleDraft = () => {
    alert('draft saved successfully!')
  }

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-6 bg-white rounded-xl">
      <h2 className="text-[18px] font-semibold mb-4 text-heading border-b border-b-placeholder pb-3">College</h2>

      {/* Search College */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <label className="input-heading">
            Search College
          </label>
          <button className="text-blueish font-medium text-[16px] cursor-pointer">
            + Add All College
          </button>
        </div>
        <div className="flex items-center gap-4">
          <select className="w-full input-box px-3 py-3 text-sm text-placeholder outline-none">
            <option>College Name</option>
          </select>
        </div>
      </div>

      {/* Date Pickers */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="input-heading">Application opens on</label>
          <input
            type="date"
            className="w-full mt-1 input-box px-3 py-3 text-sm text-gray-700"
          />
        </div>
        <div>
          <label className="input-heading">Application opens on</label>
          <input
            type="date"
            className="w-full mt-1 input-box px-3 py-3 text-sm text-gray-700"
          />
        </div>
      </div>

      {/* Next Button */}
      <div className="flex justify-end gap-4 mt-20">
        <button
          onClick={handleDraft}
          className="px-2 py-2 bg-transparent border-0 text-sidebar underline text-[16px] rounded-[6px] font-bold hover:text-[#8c8c8ccc] transition-all cursor-pointer"
        >
          Save as Draft
        </button>
        <button
          onClick={() => router.push("/posting/preferences")}
          className="px-15 py-2 bg-transparent border-2 border-sidebar text-sidebar text-[16px] rounded-[6px] font-bold hover:bg-[#f9f9f9cc] transition-all cursor-pointer"
        >
          Back
        </button>
        <button
          onClick={() => router.push("/posting/preview")}
          className="px-15 py-2 bg-blueish text-secondary text-[16px] rounded-[6px] font-bold hover:bg-[#0000cc] transition-all cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
}
