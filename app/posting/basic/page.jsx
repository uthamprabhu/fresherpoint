"use client";
import { useRouter } from "next/navigation";

export default function BasicStep() {
  const router = useRouter();

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-md p-8">
        <h2 className="text-[18px] font-bold mb-6 text-black">Basics</h2>

        <div className="mb-4">
          <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-1">
            Job Title
          </label>
          <input
            id="jobTitle"
            name="jobTitle"
            type="text"
            placeholder="Name"
            className="w-full border border-[#e5e5e5] rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Experience */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-2">Experience</label>
          <div className="grid grid-cols-2 gap-4">
            <button className="border border-[#e5e5e5] rounded-lg py-2 text-gray-500">Fresher</button>
            <div className="flex items-center gap-2 border border-[#e5e5e5] rounded-lg px-4 py-2 text-gray-500">
              <span>Experienced</span>
              <span className="text-sm">- 00 +</span>
            </div>
          </div>
        </div>

        {/* Type */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
          <div className="grid grid-cols-2 gap-4">
            <button className="border border-[#e5e5e5] rounded-lg py-2 text-gray-500">Job</button>
            <button className="border border-[#e5e5e5] rounded-lg py-2 text-gray-500">Internship</button>
          </div>
        </div>

        {/* Employment Type */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-2">Employment Type</label>
          <div className="grid grid-cols-2 gap-4">
            <button className="border border-[#e5e5e5] rounded-lg py-2 text-gray-500">Full-Time</button>
            <button className="border border-[#e5e5e5] rounded-lg py-2 text-gray-500">Part-Time</button>
          </div>
        </div>

        {/* Work Place Type */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-2">Work place type</label>
          <div className="grid grid-cols-3 gap-4">
            <button className="border border-[#e5e5e5] rounded-lg py-2 text-gray-500">On-Site</button>
            <button className="border border-[#e5e5e5] rounded-lg py-2 text-gray-500">Hybrid</button>
            <button className="border border-[#e5e5e5] rounded-lg py-2 text-gray-500">Remote</button>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Display your contact information to students?
          </label>
          <div className="flex gap-6">
            <label className="flex items-center gap-2 text-sm text-gray-700">
              <input type="radio" name="contact" className="accent-blue-500" />
              Name only
            </label>
            <label className="flex items-center gap-2 text-sm text-gray-700">
              <input type="radio" name="contact" className="accent-blue-500" />
              Don’t show
            </label>
          </div>
        </div>

        {/* Next Button */}
        <div className="flex justify-end">
          <button
            onClick={() => router.push("/posting/details")}
            className="px-8 py-3 bg-[#1A1AFF] text-white rounded-lg font-semibold hover:bg-[#0000cc] transition-all"
          >
            Next
          </button>
        </div>
      </div>
    </div>

  );
}
