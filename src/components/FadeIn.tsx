import { motion } from 'framer-motion';
import type { ElementType, ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  as?: ElementType;
}

const cache = new Map<ElementType, ElementType>();

function getMotionComponent(as: ElementType): ElementType {
  let c = cache.get(as);
  if (!c) {
    c = motion.create(as) as ElementType;
    cache.set(as, c);
  }
  return c;
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className,
  as = 'div',
}: FadeInProps) {
  const Component = getMotionComponent(as);
  return (
    <Component
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </Component>
  );
}
