import Image from 'next/image';
import { GithubIcon, XIcon, MailIcon, TelegramIcon } from './icons/Icons';
import { Section } from './ui/Section';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface projectsProps {
  href: string;
  src: string;
  alt: string;
}

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

const projects: projectsProps[] = [
  {
    href: 'https://cobalt-lp.vercel.app',
    src: '/images/CobaltBanner.png',
    alt: 'Cobalt Banner',
  },
  {
    href: 'https://finta-landing-page-one.vercel.app',
    src: '/images/FintaBanner.png',
    alt: 'Finta Banner',
  },
];

const socialLinks = [
  {
    href: 'https://github.com/yashx18',
    icon: GithubIcon,
  },
  {
    href: 'https://x.com/TheKen__',
    icon: XIcon,
  },
  {
    href: 'https://t.me/kenx024',
    icon: TelegramIcon,
  },
  {
    href: 'mailto:yashx024@gmail.com',
    icon: MailIcon,
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
      <More />
    </>
  );
};

const Header = () => {
  return (
    <header>
      <Section className="flex flex-col gap-10">
        <h1 className="flex flex-col items-start">
          <div className="text-xl font-medium">Yash</div>
          <div className="text-md font-normal text-neutral-600 dark:text-neutral-400">
            Design Engineer
          </div>
        </h1>
        <div className="text-md flex flex-col gap-3 text-neutral-600 dark:text-neutral-400">
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
      <div className="font-semibold text-neutral-800 dark:text-neutral-200">Projects</div>
      <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2">
        {projects.map(({ href, src, alt }: projectsProps, index) => (
          <Link
            href={href}
            key={index}
            target="_blank"
            className={`group relative col-span-1 overflow-hidden rounded-2xl transition-transform duration-200 will-change-transform after:absolute after:inset-0 after:h-full after:w-full after:bg-black after:text-white after:opacity-0 after:transition-opacity after:duration-200 hover:scale-101 hover:after:opacity-20`}
          >
            <Image
              src={src}
              alt={alt}
              width={0}
              height={0}
              sizes="100vw"
              className="h-auto w-full"
            />
            <p className="absolute bottom-2 left-2 z-100 translate-y-10 rounded-lg bg-neutral-100/50 px-2.5 py-1.5 text-sm font-semibold text-neutral-900 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              {href.split('//')[1]}
            </p>
          </Link>
        ))}
      </div>
    </Section>
  );
};

const Contact = () => {
  return (
    <Section>
      <div className="flex flex-wrap items-center justify-start gap-1">
        {socialLinks.map((item, index) => (
          <Link
            href={item.href}
            target="_blank"
            className={cn(
              'rounded-lg p-1.5 transition-colors duration-300',
              'text-neutral-600 hover:bg-neutral-200 hover:text-neutral-700',
              // Dark mode
              'dark:text-neutral-400 dark:hover:bg-neutral-200/10 dark:hover:text-neutral-200'
            )}
            key={index}
          >
            <item.icon className="size-5" />
          </Link>
        ))}
      </div>
    </Section>
  );
};

const Skills = () => {
  return (
    <Section>
      <div className="font-semibold text-neutral-800 dark:text-neutral-300">Skills</div>
      <div className="flex flex-wrap items-center justify-start gap-1">
        {skills.map((item, index) => (
          <span
            key={index}
            className="rounded-full border border-dashed border-neutral-400/70 px-2 py-1 text-xs font-semibold text-neutral-800 dark:border-neutral-500/40 dark:text-neutral-200"
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
      <div className="font-semibold text-neutral-800 dark:text-neutral-300">Designs</div>
      <div className="relative h-full w-full select-none">
        <div className="columns-1 gap-4 mask-b-from-40% mask-b-to-86% lg:columns-2">
          {designs.map((item, index) => (
            <div
              key={index}
              className="relative col-span-1 mb-4 h-full w-full break-inside-avoid overflow-hidden rounded-2xl border border-neutral-800/20 transition-transform duration-200 will-change-transform before:absolute before:inset-0 before:h-full before:w-full before:bg-black before:text-white before:opacity-0 before:transition-opacity before:duration-200 before:content-[''] hover:scale-101 hover:before:opacity-20"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={0}
                height={0}
                sizes="100vw"
                className="h-auto w-full"
              />
            </div>
          ))}
        </div>
        <Link href="/designs">
          <button
            className={cn(
              // Light mode classes
              'bg-background text-neutral-700 ring-[1.5px] ring-neutral-300 hover:text-neutral-600 hover:ring-neutral-400',
              // Shared classes
              'absolute bottom-22 left-1/2 -translate-x-1/2 cursor-pointer rounded-lg px-4 py-2 text-sm transition-all duration-200 will-change-transform select-none active:scale-98 lg:bottom-9',
              // Dark mode classes
              'dark:bg-foreground dark:text-neutral-400 dark:ring-neutral-700/40 dark:hover:text-neutral-300 dark:hover:ring-neutral-500'
            )}
          >
            View more
          </button>
        </Link>
      </div>
    </Section>
  );
};

const More = () => {
  return (
    <Section>
      <div className="font-semibold text-neutral-800 dark:text-neutral-300">More</div>
      <div className="text-neutral-600 dark:text-neutral-400">
        You can see more of my work on
        <Link
          href={'https://x.com/theken__'}
          target="_blank"
          className="transition-colors duration-200 hover:text-neutral-800 dark:hover:text-neutral-200"
        >
          {' '}
          <span className="underline decoration-sky-800 decoration-wavy decoration-1 underline-offset-4">
            Twitter
          </span>{' '}
        </Link>
        and more of my code on
        <Link
          href={'https://github.com/yashx18'}
          target="_blank"
          className="transition-colors duration-200 hover:text-neutral-800 dark:hover:text-neutral-200"
        >
          {' '}
          <span className="underline decoration-sky-800 decoration-wavy decoration-1 underline-offset-4">
            Github
          </span>{' '}
        </Link>
        .
      </div>
    </Section>
  );
};
