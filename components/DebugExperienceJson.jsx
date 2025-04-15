import useJobStore from "@/store/experience";

export default function DebugExperienceJson() {
    const { fresherOrExp, experience, jobTitle } = useJobStore();

    const formattedExperience = `${Math.floor(experience / 12)}.${experience % 12}`;

    const jobData = {
        jobTitle: jobTitle,
        type: fresherOrExp,
        experience: fresherOrExp === 'experienced' ? formattedExperience : '0.0',
    };

    return (
        <div className="bg-gray-100 p-4 mt-4 rounded-lg">
            <h3 className="font-semibold mb-2">📦 JSON Preview</h3>
            <pre className="text-sm text-gray-800">
                {JSON.stringify(jobData, null, 2)}
            </pre>
        </div>
    );
}