import React from "react";
import ASCIIText from "../Components/ASCIIText";
import ProjectsCarousel from "../Components/ProjectCarousel";
import ScrolLogo from "../Components/ScrolLogo";
import Lego from "../Lego";
import Accordion from "../Components/Accordion";
import { Atom, BicepsFlexed, Bike, CircuitBoard, Icon, Drum, Dumbbell, Gauge, Piano, Plane, Sigma } from "lucide-react";
import { motorRacingHelmet } from "@lucide/lab";

const funFacts = [
  {
    title: "Physics",
    subtitle: "",
    icon1: <Atom className="size-8" />,
    icon2: <Sigma className="size-8" />,
  },
  {
    title: "Music",
    subtitle: "",
    icon1: <Piano className="size-8" />,
    icon2: <Drum className="size-8" />,
  },
  {
    title: "Sports",
    subtitle: "",
    icon1: <Dumbbell className="size-8" />,
    icon2: <BicepsFlexed className="size-8" />,
  },
  {
    title: "SkyDiving",
    subtitle: "",
    icon1: <Plane className="size-8" />,
  },
  {
    title: "Motorcycle",
    subtitle: "",
    icon1: <Bike className="size-8" />,
    icon2: <Icon iconNode={motorRacingHelmet} className="size-8" />,
    extra: "col-span-2",
  },
];

export default function BentoBoxes() {
  const borderClass = "border-3 border-base-content/15";
  return (
    <>
      <div className="lg:hidden fixed inset-0 z-50 bg-base-100 flex flex-col items-center justify-center p-8 text-center">
        <h1 className="text-2xl font-bold text-primary mb-4">This site is best viewed on a laptop or desktop</h1>
        <p className="text-lg text-base-content/80">Please switch to a larger screen for the best experience.</p>
      </div>

      <div className="hidden lg:grid grid-cols-3 auto-rows-fr gap-4 w-full p-4">
        {/* Wide card: 2x1 */}
        <div className={`card rounded-box col-span-2 row-span-1 col-start-1 row-start-1 h-full ${borderClass}`}>
          <div className="card-body">
            <div>
              <h2 className="text-primary text-2xl font-bold tracking-tighter">Stuff I Do</h2>
              <p className="text-lg">You can check out some of the stuff I am really good at here...</p>
            </div>
            <ASCIIText textFontSize={200} text="WoW😮" textColor="oklch(79% 0.209 151.711)" enableWaves={false} asciiFontSize={7} />
            <ScrolLogo />
          </div>
        </div>

        {/* Tall left card: 1x2 */}
        <div className={`card rounded-box col-span-1 row-span-2 col-start-1 row-start-2 ${borderClass}`}>
          <div className="card-body overflow-hidden">
            <h2 className="text-primary text-2xl font-bold tracking-tighter">About</h2>
            <img className="mask mask-squircle pointer-events-none" src="/img.jpg" />
            <div className="w-full">
              <h1 className="text-lg font-bold text-primary tracking-">Education</h1>
              <div className="divider mt-0 mb-0" />
              <div className="flex items-center justify-between">
                <h2 className="text-md font-semibold">Politechnika Wrocławska</h2>
                <h2 className="text-xs">Oct 2021 - Feb 2026</h2>
              </div>
              <p>● BSc. Electronics and Computer Engineering</p>
              <h1 className="text-lg font-bold text-primary tracking-tight mt-6">Skills</h1>
              <div className="divider mt-0 mb-1" />
              <Accordion />
            </div>
          </div>
        </div>

        {/* Lego Box: 1x2 */}
        <div className={`card rounded-box col-span-1 row-span-2 col-start-3 row-start-1 ${borderClass}`}>
          <div className="card-body relative flex">
            <div
              style={{
                top: "35rem",
                right: "1rem",
                padding: "1.8rem 1rem",
                color: "#1a1a1a",
                fontWeight: "900",
                fontSize: "1.25rem",
                fontFamily: "'Arial Black', sans-serif",
                borderRadius: "1rem",
                boxShadow: "0 8px 12px rgba(0,0,0,0.35), inset 0 2px 4px rgba(255,255,255,0.6)",
              }}
              className="absolute -rotate-6 z-50 pointer-events-none border-2 border-dashed border-zinc-900 from-amber-500 to-warning bg-gradient-to-l"
            >
              Move Me Around!
            </div>

            <div className="h-full"></div>
            <div className="flex">
              <h1 className="text-2xl font-bold text-primary">This is me</h1>
              <picture>
                <source srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/261d_1f3fb/512.webp" type="image/webp" />
                <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/261d_1f3fb/512.gif" alt="☝" width="32" height="32" />
              </picture>
              <picture>
                <source srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f60e/512.webp" type="image/webp" />
                <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f60e/512.gif" alt="😎" width="32" height="32" />
              </picture>
            </div>
            <p className="text-lg">I’m Orkun, a builder of things digital and physical. From full-stack apps to robots and experimental science, I love chasing ideas from curiosity to creation.</p>
            <Lego />
          </div>
        </div>

        {/* Center card: 1x1 */}
        <div className={`card rounded-box col-span-1 row-span-1 col-start-2 row-start-2 ${borderClass}`}>
          <div className="card-body overflow-hidden">
            <h2 className="text-primary text-2xl font-bold tracking-tighter">Misc</h2>
            <h2 className="text-lg">Checkout the stuff I like to get to know me better.. 😏</h2>
            <div className="grid grid-cols-2 grid-rows-3 gap-2">
              {funFacts.map((fact) => (
                <div className={`card w-full ${fact.extra} cursor-pointer hover:scale-105 transition duration-400 border-2 border-base-content/30`}>
                  <div className="card-body flex items-center justify-center">
                    <div className="flex gap-2 items-center">
                      {fact.icon1}
                      <h2 className="text-2xl font-bold tracking-tighter">{fact.title}</h2>
                      {fact.icon2}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom wide card: 2x1 */}
        <div className={`card rounded-box col-span-2 row-span-1 col-start-2 row-start-3 ${borderClass}`}>
          <div className="card-body">
            <div>
              <h2 className="text-primary text-2xl font-bold tracking-tighter">My Projects</h2>
              <h2 className="text-lg">Checkout my projects here, there are some cool stuff there! 😏</h2>
            </div>
            <div className="flex items-center w-full">
              <ProjectsCarousel />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
