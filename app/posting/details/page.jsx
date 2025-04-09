
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

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-6 bg-white rounded-xl">
      <h2 className="text-lg font-semibold mb-4">Details</h2>

      {/* Job Overview */}
      <div className="mb-4">
        <label className="block text-sm mb-1 font-medium">Job Overview</label>
        <textarea
          placeholder="Description"
          className="w-full p-3 border rounded-md resize-none text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={3}
        />
      </div>

      {/* Compose */}
      <div className="mb-4">
        <label className="block text-sm mb-1 font-medium">Compose</label>
        <textarea
          placeholder="Description"
          className="w-full p-3 border rounded-md resize-none text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
        />
      </div>

      {/* Skills */}
      <div className="mb-4">
        <label className="block text-sm mb-1 font-medium">Skills</label>
        <input
          type="text"
          placeholder="Search Skills"
          className="w-full p-3 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Job Roles */}
      <div className="mb-4">
        <label className="block text-sm mb-1 font-medium">Job roles</label>
        <input
          type="text"
          placeholder="Job roles"
          className="w-full p-3 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Number of Positions */}
      <div className="mb-4">
        <label className="block text-sm mb-1 font-medium">Number of position</label>
        <input
          type="text"
          placeholder="00"
          className="w-full p-3 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Paid or Unpaid */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Paid or unpaid?</label>
        <div className="flex gap-8">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="payment"
              value="Paid"
              checked={paymentType === "Paid"}
              onChange={() => setPaymentType("Paid")}
              className="accent-blue-600"
            />
            <span className="text-sm">Paid</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="payment"
              value="Unpaid"
              checked={paymentType === "Unpaid"}
              onChange={() => setPaymentType("Unpaid")}
              className="accent-blue-600"
            />
            <span className="text-sm">Unpaid</span>
          </label>
        </div>
      </div>

      {/* CTC Range */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">CTC</label>
        <div className="flex justify-between text-xs text-blue-700 font-medium mb-1">
          <span>₹{ctc[0]} Lpa</span>
          <span>₹{ctc[1]} Lpa</span>
        </div>
        <Slider
          value={ctc}
          onChange={handleCtcChange}
          min={0}
          max={40}
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
        <label className="block text-sm mb-1 font-medium">Job location</label>
        <input
          type="text"
          placeholder="Search location"
          className="w-full p-3 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Next Button */}
      <div className="w-full flex justify-end">
        <button
          onClick={() => router.push("/posting/preferences")}
          className="px-8 py-3 bg-[#1A1AFF] text-white rounded-lg font-semibold hover:bg-[#0000cc] transition-all"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DetailsStep;