// components/sections/Contact.tsx
import { motion } from 'framer-motion';

type ContactProps = {
  contact: {
    email: string;
    phone: string;
    linkedin: string;
    location: string;
  };
};

export default function Contact({ contact }: ContactProps) {
  if (!contact) return null;

  return (
    <motion.section
      id="contact"
      className="pt-24 pb-16 scroll-mt-24 border-t border-gray-700 mt-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="mx-auto max-w-3xl text-center px-4">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-400">Contact</h2>
        <p className="text-gray-300 mb-6">
          Feel free to reach out to me via any of the methods below.
        </p>
        <ul className="space-y-3 text-blue-300 font-medium text-lg">
          <li>
            📧 Email:{' '}
            <a
              href={`mailto:${contact.email}`}
              className="underline hover:text-blue-200"
            >
              {contact.email}
            </a>
          </li>
          <li>📱 Phone: {contact.phone}</li>
          <li>
            💼 LinkedIn:{' '}
            <a
              href={contact.linkedin}
              className="underline hover:text-blue-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              {contact.linkedin}
            </a>
          </li>
          <li>📍 Location: {contact.location}</li>
        </ul>
      </div>
    </motion.section>
  );
}