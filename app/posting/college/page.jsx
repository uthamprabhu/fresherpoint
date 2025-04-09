'use client'

import { useRouter } from "next/navigation";

export default function CollegeStep() {
  const router = useRouter();

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-6">Step 4: College</h2>

      {/* Search College */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-800 mb-1">
          Search College
        </label>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="College name"
            className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100 text-gray-700 text-sm"
            disabled
          />
          <button className="text-sm text-blue-600 font-medium">
            + Add All College
          </button>
        </div>
      </div>

      {/* Date Pickers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <div>
          <label className="block text-sm font-medium text-gray-800 mb-1">
            Application open on
          </label>
          <input
            type="text"
            placeholder="DD/MM/YY"
            className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100 text-gray-700 text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-800 mb-1">
            Application close on
          </label>
          <input
            type="text"
            placeholder="DD/MM/YY"
            className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100 text-gray-700 text-sm"
          />
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="flex items-center justify-between pt-4 border-t">
        <button className="text-sm underline text-gray-500 hover:text-gray-700">
          Save as Draft
        </button>

        <div className="flex gap-3">
          <button
            onClick={() => router.push("/posting/preferences")}
            className="px-6 py-2 border border-gray-300 rounded text-sm text-gray-800"
          >
            Back
          </button>
          <button
            onClick={() => router.push("/posting/preview")}
            className="px-6 py-2 bg-blue-600 text-white rounded text-sm"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
