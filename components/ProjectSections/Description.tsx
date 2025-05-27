import { motion } from 'framer-motion';

interface ProjectDescriptionProps {
  description: string;
}

export function ProjectDescription({ description }: ProjectDescriptionProps) {
  return (
    <motion.p layout className="text-gray-300 mb-2">
      {description}
    </motion.p>
  );
}