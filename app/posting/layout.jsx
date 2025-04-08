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
    <div className="p-6">
      {/* Progress Bar */}
      <div className="flex items-center justify-between mb-6">
        {steps.map((step, index) => (
          <div key={step.name} className="flex items-center space-x-2">
            <div
              className={clsx(
                "w-4 h-4 rounded-full border-2",
                index <= currentIndex
                  ? "bg-blue-500 border-blue-500"
                  : "bg-white border-gray-300"
              )}
            ></div>
            <Link
              href={step.path}
              className={clsx(
                "text-sm font-medium",
                index <= currentIndex ? "text-blue-600" : "text-gray-500"
              )}
            >
              {step.name}
            </Link>
          </div>
        ))}
      </div>

      {/* Current Step */}
      <div>{children}</div>
    </div>
  );
}
