import { motion, MotionValue } from 'framer-motion';

interface ProjectTitleProps {
  title: string;
  expanded: boolean;
  titleSize: MotionValue<string> | string;
}

export function ProjectTitle({ title, expanded, titleSize }: ProjectTitleProps) {
  // Convert MotionValue to string if needed
  const resolvedFontSize =
    typeof titleSize === 'string' ? titleSize : titleSize.get();

  return (
    <motion.h3
      layout
      style={{ fontSize: resolvedFontSize }}
      className="font-bold text-blue-300 mb-2"
    >
      {title}
    </motion.h3>
  );
}