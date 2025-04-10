"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function BasicStep() {
  const router = useRouter();

  const handleDraft = () => {
    alert('Draft saved successfully!')
  }

  // experience
  const [fresherOrExp, setFresherOrExp] = useState('');
  const [experience, setExperience] = useState(0);

  const incrementExperience = () => {
    setExperience((prev) => prev + 1);
  };

  const decrementExperience = () => {
    setExperience((prev) => prev - 1)
  }

  const formatExperience = () => {
    const years = Math.floor(experience / 12);
    const months = experience % 12;
    return `${years}.${months}`;
  };

  const [selectedType, setSelectedType] = useState('');
  const [employmentType, setEmploymentType] = useState('')
  const [workPlace, setWorkPlace] = useState('');

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-md p-8">
        <h2 className="text-[18px] font-semibold mb-6 text-heading border-b border-b-placeholder pb-3">Basics</h2>

        <div className="mb-4">
          <label htmlFor="jobTitle" className="block input-heading mb-1">
            Job Title
          </label>
          <input
            id="jobTitle"
            name="jobTitle"
            type="text"
            placeholder="Name"
            className="w-full input-box px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Experience */}
        <div className="mb-5 select-none">
          <label className="block input-heading mb-2">Experience</label>
          <div className="grid grid-cols-2 gap-4">
            {/* Fresher Button */}
            <button
              onClick={() => setFresherOrExp('fresher')}
              className={`border rounded-[6px] py-2 transition-colors ${fresherOrExp === 'fresher' ? 'bg-blue-600 text-white border-blue-600' : 'border-[#e5e5e5] text-gray-500'
                }`}
            >
              Fresher
            </button>

            {/* Experienced Button */}
            <div
              onClick={() => setFresherOrExp('experienced')}
              className={`flex items-center justify-between gap-2 border rounded-[6px] px-4 py-2 transition-colors ${fresherOrExp === 'experienced' ? 'bg-blue-600 text-white border-blue-600' : 'border-[#e5e5e5] text-gray-500'
                }`}
            >
              <span className="text-sm font-medium">Experienced</span>
              {/* Minus Button */}
              <Minus
                className="text-xl font-bold px-2 disabled:opacity-50 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  if (experience > 0) decrementExperience();
                }}
              />

              {/* Experience Value */}
              <div className="flex flex-col items-center">
                <span className="text-sm">{formatExperience()} yrs</span>
              </div>

              {/* Plus Button */}
              <Plus
                className="text-xl font-bold px-2 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  incrementExperience();
                }}
              />
            </div>
          </div>
        </div>

        {/* Type */}
        <div className="mb-5 select-none">
          <label className="block input-heading mb-2">Type</label>
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setSelectedType('Job')}
              className={`border rounded-lg py-2 transition-colors ${selectedType === 'Job'
                ? 'bg-blue-600 text-white border-blue-600'
                : 'border-[#e5e5e5] text-gray-500'
                }`}
            >
              Job
            </button>
            <button
              type="button"
              onClick={() => setSelectedType('Internship')}
              className={`border rounded-lg py-2 transition-colors ${selectedType === 'Internship'
                ? 'bg-blue-600 text-white border-blue-600'
                : 'border-[#e5e5e5] text-gray-500'
                }`}
            >
              Internship
            </button>
          </div>
        </div>

        {/* Employment Type */}
        <div className="mb-5">
          <label className="block input-heading mb-2">Employment Type</label>
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setEmploymentType('full')}
              className={`border rounded-lg py-2 transition-colors ${employmentType === 'full'
                ? 'bg-blue-600 text-white border-blue-600'
                : 'border-[#e5e5e5] text-gray-500'
                }`}
            >
              Full-Time
            </button>
            <button
              type="button"
              onClick={() => setEmploymentType('part')}
              className={`border rounded-lg py-2 transition-colors ${employmentType === 'part'
                ? 'bg-blue-600 text-white border-blue-600'
                : 'border-[#e5e5e5] text-gray-500'
                }`}
            >
              Part-Time
            </button>
          </div>
        </div>

        {/* Work Place Type */}
        <div className="mb-5 select-none">
          <label className="block input-heading mb-2">Work place type</label>
          <div className="grid grid-cols-3 gap-4">
            {['On-Site', 'Hybrid', 'Remote'].map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setWorkPlace(type)}
                className={`border rounded-lg py-2 transition-colors ${workPlace === type
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'border-[#e5e5e5] text-gray-500'
                  }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="mb-6">
          <label className="block input-heading mb-2">
            Display your contact information to students?
          </label>
          <div className="flex justify-between mr-10">
            <label className="flex items-center gap-2 font-normal text-[18px] text-heading">
              <input type="radio" name="contact" className="accent-blueish w-5 h-5 border-blueish" />
              Name only
            </label>
            <label className="flex items-center gap-2 font-normal text-[18px] text-heading">
              <input type="radio" name="contact" className="accent-blueish w-5 h-5 border-blueish" />
              Don't show
            </label>
          </div>
        </div>

        {/* Next Button */}
        <div className="flex justify-end gap-2 mt-20">
          <button
            onClick={handleDraft}
            className="px-2 py-2 bg-transparent border-0 text-sidebar underline text-[16px] rounded-[6px] font-bold hover:text-[#8c8c8ccc] transition-all cursor-pointer"
          >
            Save as Draft
          </button>
          <button
            onClick={() => router.push("/posting/details")}
            className="px-15 py-2 bg-blueish text-secondary text-[16px] rounded-[6px] font-bold hover:bg-[#0000cc] transition-all cursor-pointer"
          >
            Next
          </button>
        </div>
      </div>
    </div>

  );
}
