import FadeIn from './FadeIn';
import Magnet from './Magnet';
import ContactButton from './ContactButton';

const NAV_LINKS = ['About', 'Price', 'Projects', 'Contact'];

const PORTRAIT =
  'https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png';

export default function HeroSection() {
  return (
    <section
      className="relative flex h-screen flex-col"
      style={{ overflowX: 'clip', background: '#0C0C0C' }}
    >
      <FadeIn delay={0} y={-20}>
        <nav className="flex justify-between px-6 md:px-10 pt-6 md:pt-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm md:text-lg lg:text-[1.4rem] font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70"
            >
              {link}
            </a>
          ))}
        </nav>
      </FadeIn>

      <div className="overflow-hidden mt-4 sm:mt-6 md:mt-8 px-4 text-center">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading inline-block whitespace-nowrap text-center text-[10vw] sm:text-[11vw] md:text-[11.8vw] lg:text-[12.2vw] font-black uppercase leading-none tracking-tight select-none">
            Hi, i&apos;m pavan
          </h1>
        </FadeIn>
      </div>

      <div className="relative z-20 mt-auto flex items-end justify-between px-6 md:px-10 pb-7 sm:pb-8 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p
            className="max-w-[180px] sm:max-w-[240px] md:max-w-[280px] font-light uppercase tracking-wide leading-snug text-[#D7E2EA]"
            style={{ fontSize: 'clamp(0.75rem, 1.3vw, 1.4rem)' }}
          >
            <span className="font-semibold text-white block mb-1">Pavan Kumar Dasari</span>
            a 3d creator driven by crafting striking and unforgettable projects
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>

      <div
        className="absolute left-1/2 -translate-x-1/2 z-10 pointer-events-none"
        style={{
          bottom: 0,
          width: 'clamp(280px, 32vw, 440px)',
        }}
      >
        <FadeIn delay={0.6} y={30}>
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="w-full pointer-events-auto"
          >
            <img src={PORTRAIT} alt="Pavan Kumar Dasari" className="w-full h-auto block" />
          </Magnet>
        </FadeIn>
      </div>
    </section>
  );
}
