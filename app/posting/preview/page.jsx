"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function JobPreview() {
  const router = useRouter();

  const handleSuccess = () => {
    alert('Job posted successfully!!!')
    router.push('/posting')
  }

  const handleDraft = () => {
    alert('Draft saved successfully!')
  }

  return (
    <div className="w-full max-w-3xl mx-auto px-5 py-6 bg-white rounded-xl">

      {/* Header */}
      <div className="flex items-center justify-between mb-4 pb-3">
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-t-placeholder border-b border-b-placeholder py-4 mb-6">
        {/* Basic Info */}
        <div className="text-sm space-y-2 border-r border-r-placeholder">
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
      <div className="pl-4 border-t border-t-placeholder border-b border-b-placeholder py-5">
        <h3 className="text-sm font-semibold mb-3">Key Responsibilities</h3>
        <ol className="list-decimal list-inside text-sm text-gray-700 space-y-3">
          <li>
            <strong>User Research & Analysis:</strong> Conduct user research, interviews, and surveys to gather insights. Analyse user behaviour and feedback to shape design decisions.
          </li>
          <li>
            <strong>Wireframing & Prototyping:</strong> Create wireframes, prototypes, and user flows that translate business goals into intuitive user experiences.
          </li>
          <li>
            <strong>UI Design:</strong> Design user interfaces that are both aesthetically pleasing and functional, ensuring consistency across all platforms (web, mobile, tablet).
          </li>
          <li>
            <strong>Interaction Design:</strong> Define how users will interact with the product, including animations, transitions and micro-interactions to enhance user experience.
          </li>
          <li>
            <strong>Collaboration:</strong> Work closely with product managers, developers, and marketing teams to ensure design solutions align with business objectives and technical requirements.
          </li>
          <li>
            <strong>Usability Testing:</strong> Plan and execute usability tests to validate design solutions, iterate based on user feedback, and improve overall user satisfaction.
          </li>
          <li>
            <strong>Design Systems:</strong> Create and maintain design systems, style guides, and reusable components to ensure consistency across products and platforms. 
          </li>
          <li>
            <strong>Stay Updated on Trends:</strong> Stay up-to-date with industry trends, emerging technologies, and best practices in UI/UX design, applying them to your work.
          </li>
        </ol>
      </div>

      {/* intercative jd */}

      <div className="pl-4 pt-4 flex flex-col justify-center items-start">
        <div className="font-bold text-[16px] text-heading pb-3">Interactive JD</div>
          <Image
            src='/interactive_jd.png'
            width={670}
            height={320}
            alt="interactive jd"
            title="interactive jd"
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
          onClick={() => router.push("/posting/college")}
          className="px-15 py-2 bg-transparent border-2 border-sidebar text-sidebar text-[16px] rounded-[6px] font-bold hover:bg-[#f9f9f9cc] transition-all cursor-pointer"
        >
          Back
        </button>
        <button
          onClick={handleSuccess}
          className="px-15 py-2 bg-blueish text-secondary text-[16px] rounded-[6px] font-bold hover:bg-[#0000cc] transition-all cursor-pointer"
        >
          Post
        </button>
      </div>
    </div>
  );
}
