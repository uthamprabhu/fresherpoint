
"use client";
import { useState } from "react";
import { Slider } from "@mui/material";
import { useRouter } from "next/navigation";

const DetailsStep = () => {
  const router = useRouter();
  const [ctc, setCtc] = useState([16, 27]);
  const [paymentType, setPaymentType] = useState("Paid");

  const handleCtcChange = (event, newValue) => {
    setCtc(newValue);
  };

  const handleDraft = () => {
    alert('Draft saved successfully!')
  }

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-6 bg-white rounded-xl">
      <h2 className="text-[18px] font-semibold mb-4 text-heading border-b border-b-placeholder pb-3">Details</h2>

      {/* Job Overview */}
      <div className="mb-4">
        <label className="block mb-1 input-heading">Job Overview</label>
        <textarea
          placeholder="Description"
          className="w-full p-3 input-box resize-none text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
        />
      </div>

      {/* Compose */}
      <div className="mb-4">
        <label className="block mb-1 input-heading">Compose</label>
        <textarea
          placeholder="Description"
          className="w-full p-3 input-box resize-none text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
        />
      </div>

      {/* Skills */}
      <div className="mb-4">
        <label className="block mb-1 input-heading">Skills</label>
        <input
          type="text"
          placeholder="Search Skills"
          className="w-full p-3 input-box text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Job Roles */}
      <div className="mb-4">
        <label className="block mb-1 input-heading">Job roles</label>
        <input
          type="text"
          placeholder="Job roles"
          className="w-full p-3 input-box text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Number of Positions */}
      <div className="mb-4">
        <label className="block mb-1 input-heading">Number of position</label>
        <input
          type="text"
          placeholder="00"
          className="w-full p-3 input-box text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Paid or Unpaid */}
      <div className="mb-4">
        <label className="block input-heading mb-2">Paid or unpaid?</label>
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

      {/* CTC Range */}
      <div className="mb-4">
        <label className="block input-heading mb-1">CTC
          <span className="font-medium text-[14px] text-blueish ml-2">₹{ctc[0]} - {ctc[1]} Lpa</span>
        </label>
        <Slider
          value={ctc}
          onChange={handleCtcChange}
          min={0}
          max={100}
          step={1}
          valueLabelDisplay="off"
          sx={{
            color: "#1A1AFF",
            height: 4,
            "& .MuiSlider-thumb": {
              width: 12,
              height: 12,
            },
          }}
        />
      </div>

      {/* Job Location */}
      <div className="mb-6">
        <label className="block input-heading mb-1">Job location</label>
        <input
          type="text"
          placeholder="Search location"
          className="w-full p-3 input-box text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Job Location */}
      <div className="mb-6">
        <label className="block input-heading mb-1">Interactive JD</label>
        <input
          type="text"
          placeholder="Upload Image or Video"
          className="w-full p-3 input-box text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
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
          onClick={() => router.push("/posting/basic")}
          className="px-15 py-2 bg-transparent border-2 border-sidebar text-sidebar text-[16px] rounded-[6px] font-bold hover:bg-[#f9f9f9cc] transition-all cursor-pointer"
        >
          Back
        </button>
        <button
          onClick={() => router.push("/posting/preferences")}
          className="px-15 py-2 bg-blueish text-secondary text-[16px] rounded-[6px] font-bold hover:bg-[#0000cc] transition-all cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DetailsStep;