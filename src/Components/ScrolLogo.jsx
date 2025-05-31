import { JavaScript, C, Python, React, TailwindCSS, ExpressJsLight, GoogleCloud, NodeJs, Supabase, Photoshop, Android, GitHubLight } from "developer-icons";

const logos = [
  { icon: <JavaScript size="32px" />, label: "JavaScript" },
  { icon: <C size="32px" />, label: "C" },
  { icon: <Python size="32px" />, label: "Python" },
  { icon: <TailwindCSS size="32px" />, label: "Tailwind" },
  { icon: <React size="32px" />, label: "React" },
  { icon: <ExpressJsLight size="32px" />, label: "Express" },
  { icon: <GoogleCloud size="32px" />, label: "Cloud" },
  { icon: <Android size="32px" />, label: "Android" },
  { icon: <NodeJs size="32px" />, label: "NodeJS" },
  { icon: <GitHubLight size="32px" />, label: "GitHub" },
  { icon: <Photoshop size="32px" />, label: "Photoshop" },
  { icon: <Supabase size="32px" />, label: "Supabase" },
];

export default function ScrolLogo() {
  return (
    <div className="w-full h-14 pointer-events-none inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] opacity-70">
      {[...Array(2)].map((_, i) => (
        <ul key={i} className="flex items-center justify-center pointer-events-none md:justify-start [&_li]:mx-8 animate-infinite-scroll">
          {logos.map(({ icon, label }, idx) => (
            <li key={idx} className="flex items-center pointer-events-none gap-2 text-lg font-semibold">
              {icon}
              {label}
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
