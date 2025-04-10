'use client'

import { useRouter } from "next/navigation";

export default function PreferencesStep() {
  const router = useRouter();
  
  const handleDraft = () => {
    alert('Draft saved successfully!')
  }

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-6 bg-white rounded-xl">
      <h2 className="text-[18px] font-semibold mb-4 text-heading border-b border-b-placeholder pb-3">Preferences</h2>

      {/* Graduation Month & Year */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="input-heading">Graduation Month</label>
          <select className="w-full mt-1 input-box px-3 py-3 text-sm text-gray-700">
            <option>Month</option>
          </select>
        </div>
        <div>
          <label className="input-heading">Graduation Year</label>
          <select className="w-full mt-1 input-box  px-3 py-3 text-sm text-gray-700">
            <option>Year</option>
          </select>
        </div>
      </div>

      {/* Minimum GAP */}
      <div className="mb-4">
        <label className="input-heading">Minimum GAP</label>
        <input
          type="text"
          placeholder="00/10"
          className="w-full mt-1 input-box px-3 py-3 text-sm text-gray-700"
        />
      </div>

      {/* Major Category */}
      <div className="mb-4">
        <label className="input-heading">Major Category</label>
        <select className="w-full mt-1 border border-gray-300 rounded px-3 py-3 text-sm text-gray-700">
          <option>Job roles</option>
        </select>
      </div>

      {/* Required Documents */}
      <div className="mb-6">
        <label className="input-heading block mb-2">Required Documents</label>
        <div className="flex flex-col gap-2 font-normal text-heading text-[18px]">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4 accent-blueish" /> Resume
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4 accent-blueish" /> Cover Letter
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4 accent-blueish" /> Transcript
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4 accent-blueish" /> Other Docs
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="screening" className="accent-blueish w-4 h-4" /> Screening Question
          </label>
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
          onClick={() => router.push("/posting/details")}
          className="px-15 py-2 bg-transparent border-2 border-sidebar text-sidebar text-[16px] rounded-[6px] font-bold hover:bg-[#f9f9f9cc] transition-all cursor-pointer"
        >
          Back
        </button>
        <button
          onClick={() => router.push("/posting/college")}
          className="px-15 py-2 bg-blueish text-secondary text-[16px] rounded-[6px] font-bold hover:bg-[#0000cc] transition-all cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
}
