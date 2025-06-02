import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
import Card from "./Card";
import { SquareArrowOutUpRight, FileText } from "lucide-react";
import { projectsData } from "./projectsData";
const projects = projectsData;

export default function ProjectsCarousel() {
  const containerRef = useRef(null);
  const scrollX = useMotionValue(0);
  const [sectionWidth, setSectionWidth] = useState(0);
  const duplicatedProjects = [...projects, ...projects, ...projects];

  useEffect(() => {
    if (containerRef.current) {
      const width = containerRef.current.scrollWidth / 3; // original width
      setSectionWidth(width);
      scrollX.set(-width); // start in the middle
    }
  }, []);

  useEffect(() => {
    const unsubscribe = scrollX.on("change", (latest) => {
      if (!sectionWidth) return;
      if (latest > 0) {
        scrollX.set(latest - sectionWidth);
      } else if (latest < -sectionWidth * 2) {
        scrollX.set(latest + sectionWidth);
      }
    });
    return () => unsubscribe();
  }, [scrollX, sectionWidth]);

  return (
    <section
      className="relative pointer-events-none overflow-hidden opacity-100 
  [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
    >
      <motion.div ref={containerRef} className="flex pointer-events-auto gap-8 cursor-grab active:cursor-grabbing" style={{ x: scrollX }} drag="x" dragConstraints={{ left: -Infinity, right: Infinity }} dragElastic={0.05}>
        {duplicatedProjects.map((project, i) => (
          <div className="min-w-[400px]" key={i}>
            <Card imageSrc={project.img} altText={project.subTitle} />
            <div className="flex px-5 items-center">
              <div>
                <h1 className="text-2xl font-semibold tracking-tight">{project.title}</h1>
                <p className="text-lg">{project.subTitle}</p>
              </div>
              <button onClick={() => document.getElementById(project.title).showModal()} className="ml-auto h-12 btn btn-outline border-base-content/50 border-2 rounded-box">
                <SquareArrowOutUpRight />
                Source
              </button>
            </div>
            <dialog id={project.title} className="modal cursor-auto">
              <div className="modal-box max-w-5xl relative bg-base-300 overflow-visible">
                <form method="dialog">
                  <button className="btn btn-sm btn-secondary absolute -top-3 -right-6" aria-label="Close">
                    Close
                  </button>
                </form>
                {project.modalContent}
              </div>
            </dialog>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
