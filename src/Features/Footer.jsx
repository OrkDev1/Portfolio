import React from "react";
import Logo from "../Components/Logo";
import { Github, FileText, Mail, Linkedin } from "lucide-react";
export default function Footer() {
  return (
    <>
      <footer className="footer border-t-2 py-4 border-base-content/20 sm:footer-horizontal text-base-content items-center px-2 pb-2">
        <aside className="grid-flow-col items-center mb-2">
          <Logo height={"h-12"} width={"w-12"} color="fill-base-content" />
          <p className="font-semibold">OryCore© - All rights reserved</p>
        </aside>
        <nav className="grid-flow-col mb-2 gap-4 md:place-self-center md:justify-self-end">
          <a className="tooltip" data-tip="orkunyigitcengiz@gmail.com" href="mailto:orkunyigitcengiz@gmail.com" target="_blank">
            <Mail />
          </a>

          <a className="tooltip" data-tip="GitHub" href="https://www.github.com/Orkdev1" target="_blank">
            <Github />
          </a>
          <a className="tooltip" data-tip="LinkedIn" href="https://www.github.com/Orkdev1" target="_blank">
            <Linkedin />
          </a>
          <a className="tooltip" data-tip="Download CV" href="/CV.pdf" download="CV.pdf" target="_blank">
            <FileText />
          </a>
        </nav>
      </footer>
    </>
  );
}
