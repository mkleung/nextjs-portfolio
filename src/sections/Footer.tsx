import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  {
    title: "Instagram",
    url: "https://www.instagram.com/morningmike/",
  },
  {
    title: "Github",
    url: "https://github.com/mkleung",
  },
  {
    title: "Twitter",
    url: "https://x.com/mikelottawa",
  },
];

export const Footer = () => {
  return (
    <footer className="relative z-10 overflow-x-clip">
      <div
        className="absolute h-[200px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center, black, transparent)] -z-10"
        style={{
          maskImage:
            "radial-gradient(50% 50% at bottom center, black, transparent)",
        }}
      ></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div>&copy; 2025. All rights reserved.</div>
          <div className="font-semibold"> Thank you for visiting! </div>
          <nav className="flex flex-col items-center gap-8 md:flex-row">
            {footerLinks.map((link) => (
              <a
                href={link.url}
                key={link.title}
                className="inline-flex items-center gap-1.5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="">{link.title}</span>
                <ArrowUpRightIcon className="w-4 h-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};