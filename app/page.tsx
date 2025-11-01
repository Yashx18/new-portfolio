export default function Home() {
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
  return (
    <div className="min-h-screen w-full">
      <header className="mx-auto max-w-screen-sm">
        <div className="w-full pt-40">
          <h1 className="mb-8 flex flex-col items-start">
            <div className="text-lg">Yash</div>
            <div className="text-md text-neutral-400">Design Engineer</div>
          </h1>
          <div className="text-md flex flex-col gap-3 text-neutral-400">
            <div>
              I'm a 20y/o Design Engineer, based in India, working on creating websites, software
              interfaces and bridging the gap between design and development.
            </div>
            <div>
              I enjoy designing and building products from 0-to-1, while valuing strong taste and an obsession with detail.
            </div>
          </div>
        </div>
      </header>
      {/* Main Content */}
      <main className="mx-auto h-full max-w-screen-sm py-10">
        <div className="flex flex-col gap-3">
          <div className="text-neutral-300">Skills</div>
          <div className="flex flex-wrap items-center justify-start gap-1">
            {skills.map((item, index) => (
              <span
                key={index}
                className="text-bg-neutral-400 rounded-full border border-dashed border-neutral-500/30 px-3 py-1 text-xs font-semibold"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
