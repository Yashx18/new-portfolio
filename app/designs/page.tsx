import { LeftIcon } from '@/components/icons/Icons';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

const designs = [
  {
    src: '/DesignImages/img1.png',
    alt: 'img1.png',
  },
  {
    src: '/DesignImages/img2.png',
    alt: 'img2.png',
  },
  {
    src: '/DesignImages/img3.png',
    alt: 'img3.png',
  },
  {
    src: '/DesignImages/img4.png',
    alt: 'img4.png',
  },
  {
    src: '/DesignImages/img5.png',
    alt: 'img5.png',
  },
  {
    src: '/DesignImages/img6.png',
    alt: 'img6.png',
  },
  {
    src: '/DesignImages/img7.png',
    alt: 'img7.png',
  },
  {
    src: '/DesignImages/img8.png',
    alt: 'img8.png',
  },
  {
    src: '/DesignImages/img9.png',
    alt: 'img9.png',
  },
  {
    src: '/DesignImages/img10.png',
    alt: 'img10.png',
  },
];

export default function DesignsPage() {
  return (
    <div className="font-plus-jakarta-sans bg-background dark:bg-foreground min-h-screen w-full select-none">
      <main
        className={cn(
          'relative mx-auto flex max-w-screen-sm flex-col gap-4 px-6 pt-14 pb-7',
          // Before Psuedo Elements
          'before:pointer-events-none before:fixed before:inset-x-0 before:top-0 before:z-10 before:h-24 before:w-full before:backdrop-blur-sm',
          // Gradients
          // 'before:bg-[linear-gradient(180deg,_rgba(250,250,250,0.9)_0%,_rgba(250,250,250,0.1)_100%)]',

          'dark:before:bg-[linear-gradient(180deg,_rgba(10,10,10,0.9)_0%,_rgba(10,10,10,0.1)_100%)]',
          // Mask
          'before:[mask-image:linear-gradient(180deg,_#ededed_0%,_transparent_100%)]',
          'dark:before:[mask-image:linear-gradient(180deg,_#0a0a0a_0%,_transparent_100%)]'
        )}
      >
        <nav className="fixed top-10 z-10 flex items-center gap-3">
          <Link href="/">
            <button
              className={cn(
                // Light mode
                'bg-background text-neutral-500 ring-2 ring-neutral-200 hover:text-neutral-600 hover:ring-neutral-400',
                // Shared
                'ring-bg-neutral-300 hover:ring-bg-neutral-400 flex cursor-pointer items-center-safe gap-1 rounded-lg py-2 pr-3 pl-2 text-sm font-semibold transition-all duration-200 will-change-transform select-none active:scale-98',
                // Dark mode
                'dark:bg-foreground dark:text-neutral-400 dark:ring-neutral-700/40 dark:hover:text-neutral-100 dark:hover:ring-neutral-500'
              )}
            >
              <LeftIcon className="size-3" />
              Back
            </button>
          </Link>
          <p className="bg-background dark:bg-foreground rounded-lg px-4 py-1.5 text-md font-normal text-neutral-800 ring-2 ring-neutral-200 dark:text-neutral-300 dark:ring-neutral-700/40">
            Design Showcase
          </p>
        </nav>

        <div className="mt-12 grid w-full grid-cols-1 gap-4">
          {designs.map((item, index) => (
            <div
              key={index}
              // onClick={() => setOpen(true)}
              className={cn(
                // Shared classes
                'break-inside-avoid overflow-hidden rounded-xl border transition-all duration-200 will-change-transform hover:scale-101 hover:shadow-lg',
                // Light mode classes
                'border-foreground/20',
                // Dark mode classes
                'dark:shadow-background/5 dark:border-neutral-700/30'
              )}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={0}
                height={0}
                sizes="100vw"
                className={cn('h-auto w-full')}
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
