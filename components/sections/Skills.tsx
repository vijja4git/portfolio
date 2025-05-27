import { motion } from 'framer-motion';
import VerticalSkillScroller from '../VerticalSkillScroller';

type Skill = {
  category: string;
  items: string[];
};

type SkillsProps = {
  skills: Skill[];
};

export default function Skills({ skills }: SkillsProps) {
  const skillLines = skills.map((s) => s.items.join(', '));

  return (
    <motion.section
      id="skills"
      className="pt-24 scroll-mt-24"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="mx-auto max-w-xl text-center px-4">
        <>
          <h2 className="text-2xl font-bold text-center mb-6">Skills</h2>
          <hr className="my-8 border-gray-700" />
        </>
        <VerticalSkillScroller skillLines={skillLines} />
      </div>
    </motion.section>
  );
}