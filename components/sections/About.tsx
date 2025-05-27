import { motion } from 'framer-motion';

interface AboutProps {
  about: {
    bio?: string;
  };
}

export default function About({ about }: AboutProps) {
  if (!about?.bio) return null; // Fallback if bio is missing

  return (
    <motion.section
      id="about"
      className="pt-24 scroll-mt-24"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-gray-300 text-lg leading-relaxed max-w-prose text-justify mx-auto">
          {about.bio}
        </p>
      </div>
    </motion.section>
  );
}