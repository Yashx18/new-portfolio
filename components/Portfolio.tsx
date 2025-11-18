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

const designs = [
  {
    src: '/DesignImages/img6.png',
    alt: 'img6.png',
  },
  {
    src: '/DesignImages/img3.png',
    alt: 'img3.png',
  },
  {
    src: '/DesignImages/img9.png',
    alt: 'img9.png',
  },
  {
    src: '/DesignImages/img1.png',
    alt: 'img1.png',
  },
  {
    src: '/DesignImages/img8.png',
    alt: 'img8.png',
  },
  {
    src: '/DesignImages/img10.png',
    alt: 'img10.png',
  },
];

export const Portfolio = () => {
  return (
    <>
      <Header />
      <Contact />
      <Skills />
      <Projects />
      <Designs />
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
            className="hover:after:content-[${item.info}] relative col-span-1 overflow-hidden rounded-2xl transition-transform duration-200 after:absolute after:inset-0 after:h-full after:w-full after:bg-black after:text-white after:opacity-0 after:transition-opacity after:duration-200 hover:scale-101 hover:after:opacity-20"
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
            className="text-bg-neutral-400 rounded-full border border-dashed border-neutral-500/30 px-2 py-1 text-xs font-semibold"
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
      <div className="relative h-full w-full select-none">
        <div className="columns-1 gap-4 mask-b-from-40% mask-b-to-86% lg:columns-2">
          {designs.map((item, index) => (
            <div
              key={index}
              className="relative col-span-1 mb-4 h-full w-full break-inside-avoid overflow-hidden rounded-2xl border border-neutral-800/20 transition-transform duration-200 before:absolute before:inset-0 before:h-full before:w-full before:bg-black before:text-white before:opacity-0 before:transition-opacity before:duration-200 before:content-[''] hover:scale-101 hover:before:opacity-20"
            >
              <img src={item.src} alt={item.alt} className="h-full w-full" />
            </div>
          ))}
        </div>
        <button className="dark:bg-background bg-foreground ring-bg-neutral-300 absolute bottom-9 left-1/2 -translate-x-1/2 cursor-pointer rounded-lg px-4 py-2 text-sm text-neutral-400 ring-[1.5px] transition-all duration-200 select-none hover:-translate-y-[1px] hover:text-neutral-300 dark:hover:ring-neutral-500 hover:ring-bg-neutral-400 active:scale-98 dark:ring-neutral-700/40">
          View more
        </button>
      </div>
    </Section>
  );
};
