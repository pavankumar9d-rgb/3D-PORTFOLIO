import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

function Char({
  char,
  index,
  total,
  progress,
}: {
  char: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const start = index / total;
  const end = start + 1 / total;
  const opacity = useTransform(progress, [start, end], [0.2, 1]);
  return (
    <span style={{ position: 'relative' }}>
      <span style={{ opacity: 0 }}>{char}</span>
      <motion.span style={{ opacity, position: 'absolute', left: 0, top: 0 }}>{char}</motion.span>
    </span>
  );
}

export default function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');
  let charIndex = 0;
  const total = text.length;

  return (
    <p ref={ref} className={className} style={style}>
      {words.map((word, wi) => (
        <span key={wi} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
          {word.split('').map((c) => {
            const i = charIndex++;
            return <Char key={i} char={c} index={i} total={total} progress={scrollYProgress} />;
          })}
          {wi < words.length - 1 && (() => {
            const i = charIndex++;
            return <Char key={`s${i}`} char={'\u00A0'} index={i} total={total} progress={scrollYProgress} />;
          })()}
        </span>
      ))}
    </p>
  );
}
