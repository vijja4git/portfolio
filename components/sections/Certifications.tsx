import { motion } from 'framer-motion';

type Certification = {
  title: string;
  issuer?: string;
  issueDate?: string;
  link?: string;
};

type Props = {
  certifications: Certification[];
};

export default function Certifications({ certifications }: Props) {
  if (!Array.isArray(certifications)) return null;

  return (
    <motion.section
      id="certifications"
      className="pt-24 scroll-mt-24"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div className="mx-auto max-w-3xl px-4 text-left">
        <>
          <h2 className="text-2xl font-bold text-center mb-6">Certification</h2>
          <hr className="my-8 border-gray-700" />
        </>
        <ul className="space-y-4">
          {certifications.map((cert, idx) => (
            <li key={idx} className="text-gray-300 leading-relaxed">
              <p className="font-semibold text-lg text-blue-300">{cert.title}</p>
              {cert.issuer && <p>Issued by: {cert.issuer}</p>}
              {cert.issueDate && <p>Date: {cert.issueDate}</p>}
              {cert.link && (
                <p>
                  Certificate:{' '}
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-blue-400 hover:text-blue-300"
                  >
                    View
                  </a>
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}