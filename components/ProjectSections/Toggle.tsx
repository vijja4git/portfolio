import { motion } from 'framer-motion';

interface ProjectToggleProps {
  expanded: boolean;
}

export function ProjectToggle({ expanded }: ProjectToggleProps) {
  return (
    <motion.p
      className="mt-4 text-sm text-blue-400 underline hover:text-blue-300"
      layout="position"
    >
      {expanded ? 'Click to collapse' : 'Click to read more'}
    </motion.p>
  );
}