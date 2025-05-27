import { AnimatePresence, motion } from 'framer-motion';

interface ProjectDetailsProps {
  expanded: boolean;
  details?: string;
}

export function ProjectDetails({ expanded, details }: ProjectDetailsProps) {
  return (
    <AnimatePresence initial={false} mode="wait">
      {expanded && details && (
        <motion.div
          key="details"
          initial={{ opacity: 0, height: 0, paddingTop: 0 }}
          animate={{ opacity: 1, height: 'auto', paddingTop: 12 }}
          exit={{ opacity: 0, height: 0, paddingTop: 0 }}
          transition={{
            opacity: { duration: 0.6 },
            height: { duration: 0.7 },
            paddingTop: { duration: 0.7 },
            ease: 'easeInOut'
          }}
          className="text-gray-400 text-sm overflow-hidden"
        >
          <p className="leading-relaxed whitespace-pre-line">
            {details}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}