"use client";

import { usePathname, useRouter } from "next/navigation";
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
  const router = useRouter()

  const currentIndex = steps.findIndex((step) =>
    pathname.includes(step.path)
  );

  const handleCancelJobPosting = () => {
    const confirmed = confirm("Are you sure you want to go home?");
    if (confirmed) {
      router.push('/'); // Redirect to home
    }
    // If "No", do nothing and stay here
  };

  return (
    <div className="p-2">
      {/* Progress Bar */}

      <div className="flex items-center justify-between max-w-6xl mx-auto mb-6 bg-secondary px-6 py-5 rounded-[6px] sticky top-[93px]">
        <span className="text-[24px] font-bold text-heading">New Job</span>

        <div className="flex items-center space-x-[-4px] flex-1 justify-center">
          {steps.map((step, index) => (
            <div key={step.name} className="flex items-center">
              {/* Circle */}
              <div
                className={clsx(
                  "w-5 h-5 rounded-full border-2 flex items-center justify-center",
                  index <= currentIndex
                    ? "border-blueish"
                    : "border-gray-300"
                )}
              >
                <div
                  className={clsx(
                    "w-2.5 h-2.5 rounded-full",
                    index <= currentIndex ? "bg-blueish" : "bg-white"
                  )}
                />
              </div>

              {/* Label */}
              <span
                className={clsx(
                  "ml-2 text-[18px] font-normal",
                  index <= currentIndex ? "text-blueish" : "text-heading"
                )}
              >
                {step.name}
              </span>

              {/* Line */}
              {index < steps.length - 1 && (
                <div
                  className={clsx(
                    "w-10 h-0.5 mx-1",
                    index < currentIndex ? "bg-blueish" : "bg-gray-300"
                  )}
                ></div>
              )}
            </div>
          ))}
        </div>

        <button 
        className="w-6 h-6 flex items-center justify-center bg-gray-200 rounded-full text-white hover:bg-gray-300 cursor-pointer"
        title="cancel job posting"
        onClick={handleCancelJobPosting}
        >
          ✕
        </button>
      </div>


      {/* Current Step */}
      <div>{children}</div>
    </div>
  );
}
