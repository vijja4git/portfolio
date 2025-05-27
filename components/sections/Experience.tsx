import { motion } from 'framer-motion';

interface ExperienceItem {
  company: string;
  role: string;
  startDate?: string;
  endDate?: string;
  location?: string;
  responsibilities?: string[];
}

interface ExperienceProps {
  experience: ExperienceItem[];
}

export default function Experience({ experience }: ExperienceProps) {
  return (
    <motion.section
        id="experience"
        className="pt-24 scroll-mt-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        >
        <div className="mx-auto max-w-3xl px-4 text-left">
        <>
  <h2 className="text-2xl font-bold text-center mb-6">Experience</h2>
  <hr className="my-8 border-gray-700" />
</>
            {experience.map((exp, index) => (
            <div key={index} className="mb-10">
                <h3 className="text-xl font-semibold text-blue-300">{exp.company}</h3>
                <p className="text-sm text-gray-400 mb-1">{exp.role}</p>
                <p className="text-sm text-gray-400 mb-1">
                {exp.startDate} – {exp.endDate || 'Present'} | {exp.location}
                </p>
                {exp.responsibilities && (
                <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
                    {exp.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                    ))}
                </ul>
                )}
            </div>
            ))}
        </div>
        </motion.section>
  );
}