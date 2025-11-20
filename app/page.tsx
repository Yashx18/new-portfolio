import { Portfolio } from '@/components/Portfolio';
import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <div className="font-plus-jakarta-sans min-h-screen w-full bg-white dark:bg-black">
      <main
        className={cn(
          'relative mx-auto max-w-screen-sm pt-36 pb-12',
          // Before Psuedo elements
          'before:pointer-events-none before:fixed before:inset-x-0 before:top-0 before:z-10 before:h-24 before:w-full before:backdrop-blur-sm',
          // Gradients
          'before:bg-[linear-gradient(180deg,_rgba(250,250,250,0.9)_0%,_rgba(250,250,250,0.1)_100%)]',

          'dark:before:bg-[linear-gradient(180deg,_rgba(10,10,10,0.9)_0%,_rgba(10,10,10,0.1)_100%)]',
          // Mask
          'before:[mask-image:linear-gradient(180deg,_#ededed_0%,_transparent_100%)]',
          'dark:before:[mask-image:linear-gradient(180deg,_#0a0a0a_0%,_transparent_100%)]'
        )}
      >
        <Portfolio />
      </main>
    </div>
  );
}
