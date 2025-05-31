import React, { useState } from "react";
import { MonitorSmartphone, Gamepad2, CircuitBoard, FlaskConical } from "lucide-react";

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: "Software Development",
      icon: <MonitorSmartphone />,
      content: "My focus? ML 🧠 and cross-platform full-stack apps 📱💻 but truth is, I’ll build whatever you throw at me.",
    },
    {
      title: "Electronic and Mechanic Prototyping",
      icon: <CircuitBoard />,
      content: "Nothing works. I build anyway.. I suffer...😔",
    },
    {
      title: "Science and Engineering",
      icon: <FlaskConical />,
      content: "Pursuing research in Physics and Material Science. Also, Genetics Engineering is a strong side interest🧪🔬",
    },
    {
      title: "Game Development",
      icon: <Gamepad2 />,
      content: "Hobby for now, but something bigger soon! 🎮🕹️",
    },
  ];

  return (
    <section className="w-full flex items-center">
      <div className="flex flex-col gap-2 w-full">
        {items.map((item, i) => (
          <div key={i} className="collapse collapse-arrow border-3 border-base-300 overflow-hidden transition-all duration-300">
            <input type="checkbox" className="hidden" checked={openIndex === i} onChange={() => toggle(i)} />
            <div className="collapse-title font-semibold flex gap-2 cursor-pointer select-none" onClick={() => toggle(i)}>
              {item.icon}
              {item.title}
            </div>
            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === i ? "max-h-[200px] opacity-100 py-2" : "max-h-0 opacity-0 py-0"} text-sm px-4`}>{item.content}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
