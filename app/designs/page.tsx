import { LeftIcon } from '@/components/icons/Icons';
import { cn } from '@/lib/utils';
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
    <div className="font-plus-jakarta-sans min-h-screen w-full">
      <main
        className={cn(
          'relative mx-auto max-w-screen-sm pt-14 flex  flex-col gap-4',
          // Before Psuedo Elements
          'before:pointer-events-none before:fixed before:inset-x-0 before:top-0 before:z-10 before:h-24 before:w-full before:backdrop-blur-sm',
          // Gradients
          'before:bg-[linear-gradient(180deg,_rgba(250,250,250,0.9)_0%,_rgba(250,250,250,0.1)_100%)]',

          'dark:before:bg-[linear-gradient(180deg,_rgba(10,10,10,0.9)_0%,_rgba(10,10,10,0.1)_100%)]',
          // Mask
          'before:[mask-image:linear-gradient(180deg,_#ededed_0%,_transparent_100%)]',
          'dark:before:[mask-image:linear-gradient(180deg,_#0a0a0a_0%,_transparent_100%)]'
        )}
      >
        <nav className="flex w-full items-center gap-4">
          <Link href="/">
            <button className="dark:bg-background bg-foreground ring-bg-neutral-300 hover:ring-bg-neutral-400 flex cursor-pointer items-center gap-0.5 rounded-lg py-2 pr-2 pl-1 text-sm text-neutral-400 ring-[1.5px] transition-all duration-200 select-none hover:text-neutral-300 active:scale-99 dark:ring-neutral-700/40 dark:hover:ring-neutral-500">
              <LeftIcon className="size-4" />
              Back
            </button>
          </Link>
          <p className="text-lg">Design Showcase</p>
        </nav>

        <div className="w-full">
          {designs.map((item, index) => (
            <div
              key={index}
              className="relative mb-4 h-full w-full break-inside-avoid overflow-hidden rounded-2xl border border-neutral-800/20 transition-transform duration-200 before:absolute before:inset-0 before:h-full before:w-full before:bg-black before:text-white before:opacity-0 before:transition-opacity before:duration-200 before:content-[''] hover:scale-101 hover:before:opacity-20"
            >
              <img src={item.src} alt={item.alt} className="h-full w-full" />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
