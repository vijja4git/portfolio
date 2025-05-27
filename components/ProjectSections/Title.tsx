import { motion } from 'framer-motion';
import { MotionValue } from 'framer-motion';

interface ProjectTitleProps {
  title: string;
  expanded: boolean;
  titleSize: MotionValue<string> | string;
}

export function ProjectTitle({ title, expanded, titleSize }: ProjectTitleProps) {
  return (
    <motion.h3
      layout
      style={{ fontSize: expanded ? titleSize : '1.5rem' }}
      className="font-bold text-blue-300 mb-2"
    >
      {title}
    </motion.h3>
  );
}