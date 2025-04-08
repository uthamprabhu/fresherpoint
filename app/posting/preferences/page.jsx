"use client";
import { useRouter } from "next/navigation";

export default function BasicStep() {
  const router = useRouter();

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Step 3: Preferences</h2>
      <p>Put your form fields here...</p>
      <button
        onClick={() => router.push("/posting/college")}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Next
      </button>
    </div>
  );
}
