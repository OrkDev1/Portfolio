import React from "react";
import { FileText } from "lucide-react";
import Logo from "../Components/Logo";
export default function Header() {
  return (
    <section className="footer border-b-2 py-4 border-base-content/20 sm:footer-horizontal col-span-3 flex text-base-content items-center px-2">
      <div className="flex items-center w-full">
        <div className="cursor-pointer flex flex-col items-center justify-center h-16">
          <Logo color="fill-base-content h-12 w-14" />
          <p className="tracking-tighter font-semibold text-md">OryCore</p>
        </div>
        <div className="flex ml-auto mr-auto items-center gap-2">
          <p className="text-4xl font-semibold">I'm Orkun, a Professional Dumbass!</p>
          <picture>
            <source srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b_1f3fb/512.webp" type="image/webp" />
            <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b_1f3fb/512.gif" className="-scale-x-100" alt="👋" width="52" height="32" />
          </picture>
        </div>
        <a href="CV.pdf" download="CV.pdf" className=" select-none cursor-pointer flex flex-col items-center gap-1 justify-center h-16">
          <FileText className="h-8 w-8" />
          <p className="tracking-tighter font-semibold text-md">View CV</p>
        </a>
      </div>
    </section>
  );
}
