"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from 'clsx'

const steps = [
  { name: "Basic", path: "/posting/basic" },
  { name: "Details", path: "/posting/details" },
  { name: "Preferences", path: "/posting/preferences" },
  { name: "College", path: "/posting/college" },
  { name: "Preview", path: "/posting/preview" },
];

export default function PostingLayout({ children }) {
  const pathname = usePathname();

  const currentIndex = steps.findIndex((step) =>
    pathname.includes(step.path)
  );

  return (
    <div className="p-2">
      {/* Progress Bar */}

      <div className="flex items-center justify-between w-full mb-6 bg-secondary p-6 rounded-[6px]">
        <span className="text-lg font-bold text-black">New Job</span>

        <div className="flex items-center space-x-4 flex-1 justify-center">
          {steps.map((step, index) => (
            <div key={step.name} className="flex items-center">
              {/* Circle */}
              <div
                className={clsx(
                  "w-5 h-5 rounded-full border-2 flex items-center justify-center",
                  index <= currentIndex
                    ? "border-blue-600"
                    : "border-gray-300"
                )}
              >
                <div
                  className={clsx(
                    "w-2.5 h-2.5 rounded-full",
                    index <= currentIndex ? "bg-blue-600" : "bg-white"
                  )}
                />
              </div>

              {/* Label */}
              <span
                className={clsx(
                  "ml-2 text-sm font-medium",
                  index <= currentIndex ? "text-blue-600" : "text-gray-500"
                )}
              >
                {step.name}
              </span>

              {/* Line */}
              {index < steps.length - 1 && (
                <div
                  className={clsx(
                    "w-10 h-0.5 mx-4",
                    index < currentIndex ? "bg-blue-600" : "bg-gray-300"
                  )}
                ></div>
              )}
            </div>
          ))}
        </div>

        <button className="w-6 h-6 flex items-center justify-center bg-gray-200 rounded-full text-gray-500 hover:bg-gray-300">
          ✕
        </button>
      </div>


      {/* Current Step */}
      <div>{children}</div>
    </div>
  );
}
