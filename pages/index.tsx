import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Education from '../components/sections/Education';
import Experience from '../components/sections/Experience';
import Certifications from '../components/sections/Certifications';
import Footer from '../components/sections/Footer';
import Contact from '../components/sections/Contact';
import { useEffect } from 'react';

import { sanityClient } from '../utils/sanityClient';

// Type Definitions

type Project = {
  title: string;
  description: string;
  details: string;
  slug: { current: string };
};

type Skill = {
  category: string;
  items: string[];
};

type EducationItem = {
  school: string;
  degree: string;
  location?: string;
  startYear?: string;
  endYear?: string;
  notes?: string;
};

type ExperienceItem = {
  company: string;
  role: string;
  startDate?: string;
  endDate?: string;
  location?: string;
  responsibilities?: string[];
};

type Certification = {
  title: string;
  issuer?: string;
  issueDate?: string;
  link?: string;
};

type HeroData = {
  name: string;
  tagline?: string;
};

type ContactData = {
  email: string;
  phone: string;
  linkedin: string;
  location: string;
};

type Props = {
  projects: Project[];
  skills: Skill[];
  education: EducationItem[];
  experience: ExperienceItem[];
  certifications: Certification[];
  about: { bio: string };
  contact: ContactData;
  hero: HeroData;
};

export default function Home({
  projects,
  skills,
  education,
  experience,
  certifications,
  about,
  contact,
  hero,
}: Props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gradient-to-b from-black via-zinc-900 to-black text-white min-h-screen font-sans">
      <Hero hero={hero} />
      <hr className="border-t border-gray-700 my-12 w-3/4 mx-auto" />
      <About about={about} />
      <hr className="border-t border-gray-700 my-12 w-3/4 mx-auto" />
      <Education education={education} />
      <hr className="border-t border-gray-700 my-12 w-3/4 mx-auto" />
      <Experience experience={experience} />
      <hr className="border-t border-gray-700 my-12 w-3/4 mx-auto" />
      <Skills skills={skills} />
      <hr className="border-t border-gray-700 my-12 w-3/4 mx-auto" />
      <Certifications certifications={certifications} />
      <hr className="border-t border-gray-700 my-12 w-3/4 mx-auto" />
      <Projects projects={projects} />
      <hr className="border-t border-gray-700 my-12 w-3/4 mx-auto" />
      <Contact contact={contact} />
      <hr className="border-t border-gray-700 my-12 w-3/4 mx-auto" />
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const projectsQuery = `*[_type == "project"] | order(_createdAt desc){
    title, description, details, slug
  }`;

  const skillsQuery = `*[_type == "skill"] | order(_createdAt asc){
    category, items
  }`;

  const educationQuery = `*[_type == "education"] | order(startYear desc){
    school, degree, location, startYear, endYear, notes
  }`;

  const experienceQuery = `*[_type == "experience"] | order(startDate desc){
    company, role, startDate, endDate, location, responsibilities
  }`;

  const certificationsQuery = `*[_type == "certification"] | order(issueDate desc){
    title, issuer, issueDate, link
  }`;

  const aboutQuery = `*[_type == "about"][0]{ bio }`;
  const contactQuery = `*[_type == "contact"][0]{ email, phone, linkedin, location }`;
  const heroQuery = `*[_type == "hero"][0]{ name, tagline }`;

  const [projects, skills, education, experience, certifications, about, contact, hero] =
    await Promise.all([
      sanityClient.fetch(projectsQuery),
      sanityClient.fetch(skillsQuery),
      sanityClient.fetch(educationQuery),
      sanityClient.fetch(experienceQuery),
      sanityClient.fetch(certificationsQuery),
      sanityClient.fetch(aboutQuery),
      sanityClient.fetch(contactQuery),
      sanityClient.fetch(heroQuery),
    ]);

  return {
    props: {
      projects,
      skills,
      education,
      experience,
      certifications,
      about,
      contact,
      hero,
    },
    revalidate: 60,
  };
}