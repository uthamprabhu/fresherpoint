"use client";
import { useRouter } from "next/navigation";

export default function JobPreview() {
  const router = useRouter();

  const handleSuccess = () => {
    alert('Job posted successfully!!!')
    router.push('/')
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-2xl font-semibold">Google</h2>
          <p className="text-lg font-medium text-gray-800">UI/UX Designer</p>
          <p className="text-sm text-gray-500">📍 Jp Nagar, Bangalore, Karnataka, India</p>
        </div>
        <div className="flex gap-3">
          <button className="text-blue-600 text-sm font-medium">💬 Message Employer</button>
          <button className="bg-blue-600 text-white px-4 py-2 text-sm rounded">Apply Now</button>
        </div>
      </div>

      {/* Basic Info & Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-b py-4 mb-6">
        {/* Basic Info */}
        <div className="text-sm space-y-2">
          <p><strong>💰 CTC</strong>: ₹16 - 27 Lpa</p>
          <p><strong>🧑‍💻 Experience</strong>: Fresher</p>
          <p><strong>🏢 Workplace</strong>: WFO</p>
          <p><strong>📅 Apply By</strong>: 30 Sep 2024</p>
        </div>

        {/* Job Details */}
        <div className="text-sm space-y-2">
          <p><strong>🧾 Job Type</strong>: Internship</p>
          <p><strong>📜 Employment Type</strong>: Full-Time</p>
          <p className="text-gray-700 pt-2">
            We are seeking a talented UI/UX Designer to create intuitive, visually appealing, and functional digital experiences...
          </p>
        </div>
      </div>

      {/* Skills Required */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold mb-2">Skills Required</h3>
        <div className="flex flex-wrap gap-2 text-sm">
          {[
            "Figma",
            "Wireframe",
            "Prototype",
            "Design System",
            "Interactive Design",
            "Photoshop",
            "Illustration",
            "Colour theory",
          ].map((skill) => (
            <span
              key={skill}
              className="bg-[#F4F4F5] text-gray-700 px-3 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Key Responsibilities */}
      <div>
        <h3 className="text-sm font-semibold mb-3">Key Responsibilities</h3>
        <ol className="list-decimal list-inside text-sm text-gray-700 space-y-2">
          <li>
            <strong>User Research & Analysis:</strong> Conduct user research, interviews, and surveys...
          </li>
          <li>
            <strong>Wireframing & Prototyping:</strong> Create wireframes, prototypes, and user flows...
          </li>
          <li>
            <strong>UI Design:</strong> Design user interfaces that are aesthetically pleasing and functional...
          </li>
          <li>
            <strong>Interaction Design:</strong> Define how users will interact with the product...
          </li>
          <li>
            <strong>Collaboration:</strong> Work closely with product managers, developers, and marketing teams...
          </li>
          <li>
            <strong>Usability Testing:</strong> Plan and execute usability tests...
          </li>
          <li>
            <strong>Design Systems:</strong> Create and maintain design systems, style guides...
          </li>
          <li>
            <strong>Stay Updated on Trends:</strong> Stay up-to-date with industry trends and best practices...
          </li>
        </ol>
      </div>

      <div className="flex items-center justify-between pt-4 border-t">
        <button className="text-sm underline text-gray-500 hover:text-gray-700">
          Save as Draft
        </button>

        <div className="flex gap-3">
          <button
            onClick={() => router.push("/posting/college")}
            className="px-6 py-2 border border-gray-300 rounded text-sm text-gray-800"
          >
            Back
          </button>
          <button
            onClick={handleSuccess}
            className="px-6 py-2 bg-blue-600 text-white rounded text-sm"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
