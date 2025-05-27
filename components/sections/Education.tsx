import { motion } from 'framer-motion';

type EducationItem = {
  school: string;
  degree: string;
  location?: string;
  startYear?: string;
  endYear?: string;
  notes?: string;
};

type Props = {
  education: EducationItem[];
};

export default function Education({ education }: Props) {
  if (!education || !Array.isArray(education)) return null;

  return (
    <motion.section
      id="education"
      className="pt-24 scroll-mt-24"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="mx-auto max-w-3xl px-4 text-left">
      <>
  <h2 className="text-2xl font-bold text-center mb-6">Education</h2>
  <hr className="my-8 border-gray-700" />
</>

        {education.map((edu, idx) => (
          <div key={idx} className="mb-10">
            <h3 className="text-xl font-semibold text-blue-300">{edu.school}</h3>
            <p className="text-sm text-gray-400 mb-1">{edu.degree}</p>
            <p className="text-sm text-gray-400 mb-3">{edu.startYear} – {edu.endYear}</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {edu.notes?.split('\n').map((note, i) => (
                <li key={i}>{note}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.section>
  );
}