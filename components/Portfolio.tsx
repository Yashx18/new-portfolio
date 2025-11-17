import { GithubIcon, XIcon, MailIcon, TelegramIcon } from './icons/Icons';
import { Section } from './ui/Section';

const skills: String[] = [
  'React',
  'Nextjs',
  'TailwindCSS',
  'Typescript',
  'UI/UX Design',
  'Motion',
  'Figma',
  'Framer',
];

const projects = [
  {
    href: 'https://cobalt-lp.vercel.app/',
    src: '/images/CobaltBanner.png',
    alt: 'Cobalt Banner',
    info: 'React + Tailwindcss',
  },
  {
    href: 'https://finta-landing-page-one.vercel.app/',
    src: '/images/FintaBanner.png',
    alt: 'Finta Banner',
    info: 'React + Tailwindcss',
  },
];

export const Portfolio = () => {
  return (
    <>
      <Header />
      <Contact />
      <Projects />
      <Designs />
      <Skills />
    </>
  );
};

const Header = () => {
  return (
    <header className="select-none">
      <Section className="flex flex-col gap-10">
        <h1 className="flex flex-col items-start">
          <div className="text-xl font-medium">Yash</div>
          <div className="text-md font-normal text-neutral-400">Design Engineer</div>
        </h1>
        <div className="text-md flex flex-col gap-3 text-neutral-400">
          <div>
            I'm a 21 y/o Design Engineer based in India, working on creating websites, software
            interfaces and bridging the gap between design and development.
          </div>
          <div>
            I enjoy designing and building products from 0-to-1, while valuing strong taste and an
            obsession with detail.
          </div>
        </div>
      </Section>
    </header>
  );
};

const Projects = () => {
  return (
    <Section>
      <div className="text-neutral-200">Projects</div>
      <div className="grid grid-cols-2 gap-4">
        {projects.map((item, index) => (
          <a
            href={item.href}
            key={index}
            target="_blank"
            className="relative col-span-1 overflow-hidden rounded-2xl after:absolute after:inset-0 after:h-full after:w-full after:bg-black after:text-white after:opacity-0 after:content-[''] hover:after:opacity-20 after:transition-opacity after:duration-200 hover:scale-101 transition-transform duration-200"
          >
            <img src={item.src} alt={item.alt} />
          </a>
        ))}
      </div>
    </Section>
  );
};

const Contact = () => {
  return (
    <Section>
      <div className="flex flex-wrap items-center justify-start gap-3">
        {/* GITHUB */}
        <a
          href="https://github.com/yashx18"
          target="_blank"
          className="text-neutral-400 transition-colors duration-200 hover:text-neutral-200"
        >
          <GithubIcon className="size-5" />
        </a>
        {/* X */}
        <a
          href="https://x.com/TheKen__"
          target="_blank"
          className="text-neutral-400 transition-colors duration-200 hover:text-neutral-200"
        >
          <XIcon className="size-5" />
        </a>
        {/* TELEGRAM */}
        <a
          href="https://t.me/kenx024"
          target="_blank"
          className="text-neutral-400 transition-colors duration-200 hover:text-neutral-200"
        >
          <TelegramIcon className="size-5.5" />
        </a>
        {/* MAIL */}
        <a
          href="mailto:yashx024@gmail.com"
          target="_blank"
          className="text-neutral-400 transition-colors duration-200 hover:text-neutral-200"
        >
          <MailIcon className="size-5" />
        </a>
      </div>
    </Section>
  );
};

const Skills = () => {
  return (
    <Section>
      <div className="text-neutral-200">Skills</div>
      <div className="flex flex-wrap items-center justify-start gap-1">
        {skills.map((item, index) => (
          <span
            key={index}
            className="text-bg-neutral-400 rounded-full border border-dashed border-neutral-500/30 px-2 py-1 text-xs font-semibold "
          >
            {item}
          </span>
        ))}
      </div>
    </Section>
  );
};

const Designs = () => {
  return (
    <Section>
      <div className="text-neutral-200">Designs</div>
    </Section>
  );
};
