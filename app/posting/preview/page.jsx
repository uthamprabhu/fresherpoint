"use client";
import { useRouter } from "next/navigation";

export default function BasicStep() {
  const router = useRouter();

  const handleSuccess =() => {
    alert('Job posted successfully!!!')
    router.push('/')
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Step 5: Preview</h2>
      <p>Put your form fields here...</p>
      <button
        onClick={handleSuccess}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Submit
      </button>
    </div>
  );
}
