import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

type HeroProps = {
  hero: {
    name: string;
    tagline?: string;
  };
};

export default function Hero({ hero }: HeroProps) {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Smooth fading effects
  const imageOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {/* Background image with fade-out effect */}
      <motion.div
        style={{ opacity: imageOpacity }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/hero-photo.jpg"
          alt="Cherish Vijjagiri"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div> {/* optional overlay */}
      </motion.div>

      {/* Hero content with text fade */}
      <motion.div style={{ opacity: textOpacity }} className="z-10 px-6">
        <h1 className="text-6xl md:text-7xl font-extrabold text-blue-400 mb-4">
          {hero.name}
        </h1>
        {hero.tagline && (
          <p className="text-gray-400 text-lg mb-6">{hero.tagline}</p>
        )}

        <div className="flex flex-wrap justify-center gap-6 text-lg">
          {['about', 'education', 'experience', 'skills', 'certifications', 'projects', 'contact'].map((sec) => (
            <a
              key={sec}
              href={`#${sec}`}
              className="cursor-pointer hover:text-blue-300 transition-colors"
            >
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </a>
          ))}
        </div>

        {/* Simple down arrow using Unicode */}
        <p className="mt-12 text-gray-400 animate-bounce text-xl">↓</p>
      </motion.div>
    </section>
  );
}