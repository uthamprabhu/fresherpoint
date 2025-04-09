'use client'

import { useRouter } from "next/navigation";

export default function PreferencesStep() {
  const router = useRouter();

  return (
    <div className="bg-white p-6 rounded-lg shadow border max-w-md mx-auto">
      <h2 className="text-[14px] font-semibold text-[#1D1D1F] mb-4">Preferences</h2>

      {/* Graduation Month & Year */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-sm text-[#1D1D1F]">Graduation Month</label>
          <select className="w-full mt-1 border border-gray-300 rounded px-3 py-2 text-sm text-gray-700">
            <option>Month</option>
          </select>
        </div>
        <div>
          <label className="text-sm text-[#1D1D1F]">Graduation Year</label>
          <select className="w-full mt-1 border border-gray-300 rounded px-3 py-2 text-sm text-gray-700">
            <option>Year</option>
          </select>
        </div>
      </div>

      {/* Minimum GAP */}
      <div className="mb-4">
        <label className="text-sm text-[#1D1D1F]">Minimum GAP</label>
        <input
          type="text"
          placeholder="00/10"
          className="w-full mt-1 border border-gray-300 rounded px-3 py-2 text-sm text-gray-700"
        />
      </div>

      {/* Major Category */}
      <div className="mb-4">
        <label className="text-sm text-[#1D1D1F]">Major Category</label>
        <select className="w-full mt-1 border border-gray-300 rounded px-3 py-2 text-sm text-gray-700">
          <option>Job roles</option>
        </select>
      </div>

      {/* Required Documents */}
      <div className="mb-6">
        <label className="text-sm text-[#1D1D1F] block mb-2">Required Documents</label>
        <div className="flex flex-col gap-2 text-sm text-[#1D1D1F]">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="form-checkbox" /> Resume
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="form-checkbox" /> Cover Letter
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="form-checkbox" /> Transcript
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="form-checkbox" /> Other Docs
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="screening" defaultChecked className="form-radio text-blue-600" /> Screening Question
          </label>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between items-center">
        <button className="text-gray-400 border border-gray-200 rounded px-4 py-2 text-sm">
          Save as Draft
        </button>
        <div className="flex gap-2">
          <button className="bg-gray-100 border border-gray-300 text-gray-800 px-4 py-2 rounded text-sm">
            Back
          </button>
          <button
            onClick={() => router.push("/posting/college")}
            className="bg-blue-600 text-white px-6 py-2 rounded text-sm"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
