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
      <div className="mx-auto max-w-screen-sm pt-30">
        {/* Header Content */}
        <header className="p-6">
          <div className="flex w-full flex-col items-start gap-4">
            <h1 className="flex flex-col items-start">
              <div className="text-lg">Yash</div>
              <div className="text-md text-neutral-400">Design Engineer</div>
            </h1>
            <div className="text-md flex flex-col gap-3 text-neutral-400">
              <div>
                I'm a 20y/o Design Engineer, based in India, working on creating websites, software
                interfaces and bridging the gap between design and development.
              </div>
              <div>
                I enjoy designing and building products from 0-to-1, while valuing strong taste and
                an obsession with detail.
              </div>
            </div>
            <div className="w-full">
              <div className="flex flex-wrap items-center justify-start gap-4">
                {/* GITHUB */}
                <a
                  href="https://github.com/yashx18"
                  target="_blank"
                  className="text-neutral-400 transition-colors duration-200 hover:text-neutral-300"
                >
                  <svg
                    width="29"
                    height="28"
                    viewBox="0 0 29 28"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 transition-all"
                  >
                    <path
                      id="Vector"
                      d="M9.60531 22.5456C9.60531 22.6614 9.47214 22.754 9.30424 22.754C9.11318 22.7714 8.98001 22.6787 8.98001 22.5456C8.98001 22.4298 9.11318 22.3371 9.28108 22.3371C9.45478 22.3198 9.60531 22.4124 9.60531 22.5456ZM7.80468 22.285C7.76415 22.4008 7.87995 22.534 8.05364 22.5687C8.20417 22.6266 8.37787 22.5687 8.41261 22.4529C8.44735 22.3371 8.33734 22.204 8.16365 22.1519C8.01311 22.1113 7.84521 22.1692 7.80468 22.285ZM10.3638 22.1866C10.1959 22.2271 10.0801 22.3371 10.0974 22.4703C10.1148 22.5861 10.2654 22.6614 10.439 22.6208C10.6069 22.5803 10.7227 22.4703 10.7054 22.3545C10.688 22.2445 10.5317 22.1692 10.3638 22.1866ZM14.1735 0C6.143 0 0 6.09668 0 14.1272C0 20.5481 4.04129 26.0426 9.81374 27.9764C10.5548 28.1096 10.8154 27.6522 10.8154 27.2758C10.8154 26.9169 10.798 24.9368 10.798 23.7209C10.798 23.7209 6.74514 24.5894 5.89404 21.9955C5.89404 21.9955 5.234 20.3107 4.28447 19.8765C4.28447 19.8765 2.9586 18.9674 4.3771 18.9848C4.3771 18.9848 5.81877 19.1006 6.61197 20.4786C7.87994 22.7135 10.0048 22.0708 10.8328 21.6887C10.9659 20.7623 11.3423 20.1196 11.7591 19.7375C8.52261 19.3785 5.25716 18.9096 5.25716 13.3397C5.25716 11.7475 5.69718 10.9485 6.62355 9.92954C6.47302 9.5532 5.98088 8.00153 6.77409 5.99825C7.98416 5.62191 10.7691 7.5615 10.7691 7.5615C11.927 7.23728 13.1718 7.06937 14.4051 7.06937C15.6383 7.06937 16.8831 7.23728 18.0411 7.5615C18.0411 7.5615 20.826 5.61613 22.0361 5.99825C22.8293 8.00732 22.3371 9.5532 22.1866 9.92954C23.113 10.9543 23.6804 11.7533 23.6804 13.3397C23.6804 18.9269 20.2702 19.3727 17.0337 19.7375C17.5663 20.1949 18.0179 21.0634 18.0179 22.424C18.0179 24.3751 18.0005 26.7895 18.0005 27.2643C18.0005 27.6406 18.2669 28.098 19.0022 27.9648C24.792 26.0426 28.7175 20.5481 28.7175 14.1272C28.7175 6.09668 22.204 0 14.1735 0ZM5.6277 19.9691C5.55244 20.027 5.56981 20.1602 5.66823 20.2702C5.76087 20.3628 5.89404 20.4033 5.9693 20.3281C6.04457 20.2702 6.0272 20.137 5.92878 20.027C5.83614 19.9343 5.70297 19.8938 5.6277 19.9691ZM5.0024 19.5001C4.96188 19.5754 5.01977 19.668 5.13557 19.7259C5.22821 19.7838 5.344 19.7664 5.38453 19.6854C5.42506 19.6101 5.36716 19.5175 5.25137 19.4596C5.13557 19.4248 5.04293 19.4422 5.0024 19.5001ZM6.87831 21.5613C6.78567 21.6366 6.82041 21.8103 6.95357 21.9203C7.08674 22.0534 7.25464 22.0708 7.32991 21.9782C7.40518 21.9029 7.37044 21.7292 7.25464 21.6192C7.12727 21.486 6.95357 21.4687 6.87831 21.5613ZM6.21827 20.7102C6.12563 20.7681 6.12563 20.9186 6.21827 21.0518C6.3109 21.185 6.46723 21.2428 6.5425 21.185C6.63513 21.1097 6.63513 20.9591 6.5425 20.826C6.46144 20.6928 6.3109 20.6349 6.21827 20.7102Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
                {/* X */}
                <a
                  href="https://x.com/TheKen__"
                  target="_blank"
                  className="text-neutral-400 transition-colors duration-200 hover:text-neutral-300"
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 transition-all"
                  >
                    <path
                      d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
                {/* TELEGRAM */}
                <a
                  href="https://t.me/kenx024"
                  target="_blank"
                  className="text-neutral-400 transition-colors duration-200 hover:text-neutral-300"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 496 512"
                    className="font-roboto"
                    height="22"
                    width="22"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"></path>
                  </svg>
                </a>
                {/* MAIL */}
                <a
                  href="mailto:yashx024@gmail.com"
                  target="_blank"
                  className="text-neutral-400 transition-colors duration-200 hover:text-neutral-300"
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 transition-all"
                  >
                    <path
                      id="Vector"
                      d="M13.9672 2.63594C13.9781 2.63047 13.9891 2.625 14 2.625C14.0109 2.625 14.0219 2.63047 14.0328 2.63594L25.1891 10.6094C25.3039 10.6914 25.375 10.8227 25.375 10.9648V11.7086L15.9414 19.4523C14.8094 20.382 13.1852 20.382 12.0531 19.4523L2.625 11.7086V10.9648C2.625 10.8227 2.69063 10.6914 2.81094 10.6094L13.9672 2.63594ZM2.625 15.1047L10.3906 21.4812C12.4906 23.2039 15.5148 23.2039 17.6094 21.4812L25.375 15.1047V24.9375C25.375 25.1781 25.1781 25.375 24.9375 25.375H3.0625C2.82187 25.375 2.625 25.1781 2.625 24.9375V15.1047ZM14 0C13.4422 0 12.8953 0.175 12.4414 0.497656L1.28516 8.47109C0.475781 9.04531 0 9.975 0 10.9648V24.9375C0 26.6273 1.37266 28 3.0625 28H24.9375C26.6273 28 28 26.6273 28 24.9375V10.9648C28 9.975 27.5242 9.04531 26.7203 8.47109L15.5586 0.497656C15.1047 0.175 14.5578 0 14 0Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </header>
        {/* Main Content */}
        <main className="">
          {/* Contact Section */}

          {/* Skills Section */}
          <section className="flex flex-col gap-3 p-6">
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
          </section>
        </main>
      </div>
    </div>
  );
}
