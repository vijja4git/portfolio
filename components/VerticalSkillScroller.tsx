import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface VerticalSkillScrollerProps {
  skillLines: string[];
  duration?: number;
}

export default function VerticalSkillScroller({
  skillLines = [],
  duration = 2000,
}: VerticalSkillScrollerProps) {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 5;

  useEffect(() => {
    if (skillLines.length <= visibleCount) return;
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % skillLines.length);
    }, duration);
    return () => clearInterval(interval);
  }, [skillLines.length, duration]);

  const visibleLines = [];
  for (let i = 0; i < visibleCount; i++) {
    visibleLines.push(skillLines[(startIndex + i) % skillLines.length]);
  }

  return (
    <div className="h-[10rem] overflow-hidden relative text-lg text-blue-300 font-medium">
      <motion.div
        key={startIndex}
        initial={{ y: 32 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="space-y-2"
      >
        {visibleLines.map((line, i) => (
          <div key={i} className="h-8 flex items-center justify-center">
            {line}
          </div>
        ))}
      </motion.div>
    </div>
  );
}