import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cardSpring } from '../animations/projectCard';
import { ProjectTitle } from './ProjectSections/Title';
import { ProjectDescription } from './ProjectSections/Description';
import { ProjectDetails } from './ProjectSections/Details';
import { ProjectToggle } from './ProjectSections/Toggle';

type ProjectCardProps = {
  title: string;
  description: string;
  details?: string;
  expanded: boolean;
  onToggle: () => void;
};

export default function ProjectCard({
  title,
  description,
  details,
  expanded,
  onToggle,
}: ProjectCardProps) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start start', 'end start'],
  });
  const titleSize = useTransform(scrollYProgress, [0, 1], ['1.75rem', '1.25rem']);

  return (
    <motion.div
      ref={cardRef}
      onClick={onToggle}
      initial={{ borderRadius: 16, maxHeight: 140 }}
      animate={{
        scale: expanded ? 1.02 : 1,
        maxHeight: expanded ? 'none' : 140,
      }}
      transition={cardSpring}
      style={{ minHeight: expanded ? 'auto' : 140 }}
      className={`bg-white/10 border border-gray-700 rounded-xl p-4 md:p-6 shadow-xl 
                  backdrop-blur-md cursor-pointer overflow-hidden flex flex-col 
                  justify-start transition-all duration-700 ease-in-out 
                  will-change-transform will-change-max-height w-full max-w-md mx-auto`}
    >
      <ProjectTitle title={title} expanded={expanded} titleSize={titleSize} />
      <ProjectDescription description={description} />
      <ProjectDetails expanded={expanded} details={details} />
      <ProjectToggle expanded={expanded} />
    </motion.div>
  );
}