import React from "react";
import Lego from "../Components/Lego";
import SkillsTabs from "../Components/SkillsTab";
import ProjectsCarousel from "./Projects";
export default function Main() {
  return (
    <div className="flex flex-col">
      <div className="relative flex gap-4 mt-40">
        <div className="w-2/3">
          <h1 className="text-4xl tracking-tighter font-bold">Portfolio</h1>
          <h2 className="text-xl tracking-tight font-semibold mt-6">Hi, I'm Orkun</h2>
          <p className="mt-2">
            I'm a **certified** **expert** in Notion, helping busy people like you be more organized and productive. I design and optimize Notion templates to be clutter-free, so you can **focus on what's important** and **get things done**.
          </p>
        </div>
        <div className="relative w-1/3">
          <img className="mask mask-squircle pointer-events-none" src="/img.jpg" />
        </div>
      </div>
      <div className="mt-20">
        <h2 className="text-2xl font-bold mb-4 tracking-tight">Skills</h2>
        <SkillsTabs />
      </div>
      <div className="mt-20">
        <h2 className="text-2xl font-bold mb-4 tracking-tight">Projects</h2>
        <ProjectsCarousel />
      </div>
    </div>
  );
}
