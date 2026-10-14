import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { MotionStyle } from 'framer-motion';
import FadeIn from './FadeIn';
import LiveProjectButton from './LiveProjectButton';

const img = (file: string) =>
  `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2F${file}&w=1280&q=85`;

interface Project {
  number: string;
  category: string;
  name: string;
  col1: [string, string];
  col2: string;
}

const PROJECTS: Project[] = [
  {
    number: '01',
    category: 'Client',
    name: 'Nextlevel Studio',
    col1: [
      img('hf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png'),
      img('hf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png'),
    ],
    col2: img('hf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png'),
  },
  {
    number: '02',
    category: 'Personal',
    name: 'Aura Brand Identity',
    col1: [
      img('hf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png'),
      img('hf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png'),
    ],
    col2: img('hf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png'),
  },
  {
    number: '03',
    category: 'Client',
    name: 'Solaris Digital',
    col1: [
      img('hf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png'),
      img('hf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png'),
    ],
    col2: img('hf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png'),
  },
];

const RADIUS = 'rounded-[40px] sm:rounded-[50px] md:rounded-[60px]';

function ProjectCard({ project, index, total }: { project: Project; index: number; total: number }) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start'],
  });
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div ref={container} className="h-[85vh]">
      <motion.div
        className={`sticky border-2 border-[#D7E2EA] p-4 sm:p-6 md:p-8 ${RADIUS}`}
        style={
          {
            background: '#0C0C0C',
            scale,
            transformOrigin: 'top center',
            top: `calc(${index * 28}px + 5.5rem)`,
          } as unknown as MotionStyle
        }
      >
        <div className="mb-4 sm:mb-6 flex items-start justify-between gap-4">
          <div className="flex items-start gap-4 sm:gap-8">
            <span
              className="hero-heading font-black leading-none"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col pt-2">
              <span className="text-xs sm:text-sm font-light uppercase tracking-widest text-[#D7E2EA] opacity-60">
                {project.category}
              </span>
              <h3
                className="font-medium uppercase text-[#D7E2EA]"
                style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
              >
                {project.name}
              </h3>
            </div>
          </div>
          <div className="hidden sm:block">
            <LiveProjectButton />
          </div>
        </div>

        <div className="flex gap-3 sm:gap-4">
          <div className="flex w-[40%] flex-col gap-3 sm:gap-4">
            <img
              src={project.col1[0]}
              alt=""
              loading="lazy"
              className={`w-full object-cover ${RADIUS}`}
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            />
            <img
              src={project.col1[1]}
              alt=""
              loading="lazy"
              className={`w-full object-cover ${RADIUS}`}
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            />
          </div>
          <div className="w-[60%]">
            <img
              src={project.col2}
              alt=""
              loading="lazy"
              className={`h-full w-full object-cover ${RADIUS}`}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 sm:-mt-12 md:-mt-14 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn>
        <h2
          className="hero-heading mb-16 sm:mb-20 md:mb-28 text-center font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Project
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-7xl">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.number} project={p} index={i} total={PROJECTS.length} />
        ))}
      </div>

      <div id="contact" className="mt-28 sm:mt-36 md:mt-44 text-center flex flex-col items-center">
        <FadeIn delay={0.1}>
          <p className="text-xs sm:text-sm font-light uppercase tracking-widest text-[#D7E2EA] opacity-60 mb-3">
            Have a project in mind?
          </p>
          <h3
            className="hero-heading font-black uppercase tracking-tight leading-none mb-8 sm:mb-10"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}
          >
            Let&apos;s Build Together
          </h3>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="mb-16 sm:mb-20">
            <LiveProjectButton />
          </div>
        </FadeIn>
        <div className="w-full max-w-7xl border-t border-[#D7E2EA]/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#D7E2EA]/60 uppercase tracking-wider font-light">
          <span>&copy; {new Date().getFullYear()} Pavan Kumar Dasari. All rights reserved.</span>
          <span>3D Creator &bull; Visual Designer</span>
        </div>
      </div>
    </section>
  );
}
