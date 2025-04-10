"use client";
import BasicInfo from "@/components/BasicInfo";
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
      <div className="flex justify-between items-center mb-3">
        <div className="flex justify-center items-center">
          <Image
            src='/google_logo_lg.png'
            width={86}
            height={86}
            alt="google"
            title="google logo"
            className="text-blue-600 text-sm font-medium object-contain"
          />
          <div>
            <h2 className="text-2xl font-semibold">Google</h2>
            <p className="text-lg font-medium text-gray-800">UI/UX Designer</p>
            <p className="text-sm text-gray-500">📍 Jp Nagar, Bangalore, Karnataka, India</p>
          </div>
        </div>
        <div className="flex justify-between gap-5">
          <div className="flex justify-center items-center gap-1">
            <Image
              src='/chat.png'
              width={16}
              height={16}
              alt="chat"
              title="message employer"
              className="text-blue-600 text-sm font-medium object-contain"
            />
            <p className="font-medium text-[14px] text-blueish">Message Employer</p>
          </div>
          <div>

            <button
              className="px-6 py-2 bg-blueish text-secondary text-[16px] rounded-[6px] font-bold hover:bg-[#0000cc] transition-all cursor-pointer"
            >
              Apply Now
            </button>
          </div>
          <Image
            src='/share.png'
            width={24}
            height={24}
            alt="share"
            title="share this job"
            className="text-blue-600 text-sm font-medium object-contain"
          />
        </div>
      </div>

      {/* Basic Info & Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-t-placeholder border-b border-b-placeholder py-4 mb-6">
        {/* Basic Info */}
        <div className="text-sm space-y-2 border-r border-r-placeholder">
          <div>Basic Info</div>
          <div className="flex flex-wrap space-y-4">
            <div className="w-1/2">
              <BasicInfo src='/ctc.png' alt='ctc' imageText='ctc' mainText='₹16 - 27 Lpa' />
            </div>
            <div className="w-1/2">
              <BasicInfo src='/job_type.png' alt='job type' imageText='job type' mainText='Internship' />
            </div>
            <div className="w-1/2">
              <BasicInfo src='/exp.png' alt='experience' imageText='experience' mainText='Fresher' />
            </div>
            <div className="w-1/2">
              <BasicInfo src='/emp_type.png' alt='employment type' imageText='employment type' mainText='Full-Time' />
            </div>
            <div className="w-1/2">
              <BasicInfo src='/workplace.png' alt='work place' imageText='work place' mainText='WFO' />
            </div>
            <div className="w-1/2">
              <BasicInfo src='/apply.png' alt='apply by' imageText='apply by' mainText='30 Sep 2024' />
            </div>
          </div>

        </div>

        {/* Job Details */}
        <div className="text-sm space-y-2">
          <p className="text-[16px] font-bold text-heading">Job Overview</p>
          <p className="pt-1 font-normal text-[12px] text-subheading">
            We are seeking a talented UI/UX Designer to create intuitive, visually appealing, and functional digital experiences. The ideal candidate is passionate about user-cantered design, with a keen eye for detail and a deep understanding of modern UI/UX principles. You will collaborate with product managers, developers, and other stakeholders to turn complex ideas into simple, user-friendly solutions.
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
        <h3 className="text-[16px] text-heading font-bold mb-3">Key Responsibilities</h3>
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
      <div className="flex justify-end gap-4 mt-20 px-10">
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
