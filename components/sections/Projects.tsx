import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../ProjectCard';

type Project = {
  title: string;
  description: string;
  details: string;
  slug: { current: string };
};

type ProjectsProps = {
  projects: Project[];
};

export default function Projects({ projects }: ProjectsProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [nextIndex, setNextIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    if (expandedIndex === idx) {
      setExpandedIndex(null);
    } else if (expandedIndex !== null) {
      setExpandedIndex(null);
      setNextIndex(idx);
      setTimeout(() => {
        setExpandedIndex(idx);
        setNextIndex(null);
      }, 450);
    } else {
      setExpandedIndex(idx);
    }
  };

  const forceColumnLayout = expandedIndex !== null || nextIndex !== null;

  return (
    <motion.section
      id="projects"
      className="pt-24 scroll-mt-24"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="mx-auto max-w-6xl px-4 text-center">
        <>
          <h2 className="text-2xl font-bold text-center mb-6">Projects</h2>
          <hr className="my-8 border-gray-700" />
        </>

        <div
          className={`${
            forceColumnLayout ? 'flex flex-col' : 'grid md:grid-cols-2'
          } gap-6 justify-center items-start transition-all duration-300`}
        >
          {projects.map((proj, idx) => (
            <ProjectCard
              key={proj.slug?.current || idx}
              title={proj.title}
              description={proj.description}
              details={proj.details}
              expanded={expandedIndex === idx}
              onToggle={() => handleToggle(idx)}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}