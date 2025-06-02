import { useState } from "react";
import { FileText, SquareArrowOutUpRight, ArrowRight, ArrowLeft } from "lucide-react";
import { projectsData } from "../Components/projectsData";

const projects = projectsData;

export default function ProjectsCarousel() {
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 2;
  const maxPage = Math.ceil(projects.length / cardsPerPage) - 1;

  const handlePageChange = (dir) => {
    setCurrentPage((prev) => {
      const next = dir === "next" ? prev + 1 : prev - 1;
      return Math.max(0, Math.min(maxPage, next));
    });
  };

  return (
    <section className="relative w-full flex flex-col overflow-hidden">
      {/* Page Slider */}
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentPage * 100}%)` }}>
        {Array.from({ length: Math.ceil(projects.length / cardsPerPage) }).map((_, pageIndex) => (
          <div key={pageIndex} className="grid grid-cols-2 gap-4 min-w-full">
            {projects.slice(pageIndex * cardsPerPage, pageIndex * cardsPerPage + cardsPerPage).map((project, i) => (
              <div className="card w-full" key={i}>
                <div className="card-body gap-2 flex flex-row h-50 border border-base-content/30 shadow-sm rounded-box p-4">
                  <div className="w-1/2 flex flex-col">
                    <h1 className="text-lg tracking-tight font-semibold">{project.title}</h1>
                    <p>{project.subTitle}</p>
                    <div className="flex gap-2 mt-auto">
                      <button onClick={() => document.getElementById(project.title).showModal()} className="btn btn-outline hover:border-base-content border-base-content/50 border-2 rounded-box">
                        <SquareArrowOutUpRight size={18} />
                        Documentation
                      </button>
                    </div>
                  </div>
                  <img src={project.imgAlt} draggable={false} className="object-contain w-1/2" alt={project.subTitle} />
                </div>

                {/* Modal */}
                <dialog id={project.title} className="modal cursor-auto">
                  <div className="modal-box max-w-5xl bg-base-300">
                    <form method="dialog">
                      <button className="btn btn-sm btn-secondary absolute -top-3 -right-6">Close</button>
                    </form>
                    {project.modalContent}
                  </div>
                </dialog>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Nav Buttons */}
      <div className="flex items-center w-full">
        <div className="ml-auto mt-2 flex gap-2 z-10">
          <button onClick={() => handlePageChange("prev")} disabled={currentPage === 0} className="btn btn-sm btn-ghost btn-outline">
            <ArrowLeft />
          </button>
          <button onClick={() => handlePageChange("next")} disabled={currentPage === maxPage} className="btn btn-sm btn-ghost btn-outline">
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
