import { useState } from "react";
import { Icon, Languages, Bot, Telescope, TestTubeDiagonal, TrafficCone, Atom, BicepsFlexed, Plane, LaptopMinimal, Piano, Drum, Guitar, Music, Snowflake, Camera, RadioTower } from "lucide-react";
import { motorRacingHelmet } from "@lucide/lab";

const tabs = ["Hobbies", "Music", "Languages"];

const skills = {
  Hobbies: [
    {
      label: "Motorcycles",
      icon: <Icon iconNode={motorRacingHelmet} />,
      img: "/Misc/Motorcycle.jpg",
      imgAlt: "/Misc/MotorcycleAlt.jpg",
      description:
        "I got my license and first bike back in 2021. Since then, I've spent countless hours riding, tuning, and modifying it to match both performance and personality. After pushing it to the limit, it’s finally time for an upgrade. Something faster, sleeker, and a little more dangerous 😎",
    },
    {
      label: "Skydiving",
      icon: <Plane />,
      img: "/Misc/Skydive.png",
      description: "I took my first jump in 2024, and I've been hooked ever since. There's nothing quite like the silence after the exit and the rush of freefall. I’m currently working toward getting my license this year.",
    },
    {
      label: "Sports",
      icon: <BicepsFlexed />,
      description:
        "I've been hitting the gym consistently for the past four years, no breaks, no excuses. Since I was a kid, I've been climbing walls, vaulting rails, and trying flips into the air (and sometimes into injuries). What started as childhood parkour has evolved into a mix of tricking, acrobatics, freerunning, and martial-style movement. These days, you'll find me lifting, flipping, fighting, running and chasing the next way to push my body further.",
    },
    {
      label: "Genetic Eng.",
      icon: <TestTubeDiagonal />,
      description:
        "I've been diving into the world of genetic engineering. Learning as I go, testing things hands-on. While I'm still far from an expert, curiosity has already taken me pretty far: I’ve experimented with self-designed gene therapies, including myostatin and lactose-related edits, using bacteria I've cultured myself. It's an ongoing journey of trial, error, and discovery, with myself often as the test subject.",
    },
    {
      label: "Photography",
      icon: <Camera />,
      img: "/Misc/DikPik.jpg",
      description:
        "I enjoy photography, especially self-portraits or portraits that carry meaning. It's not just about capturing moments as they happen but about creating them with intention. For me, the real magic lies in shaping a feeling, a scene, or a story that can live on in a single frame.",
    },
    {
      label: "Amatour radio",
      icon: <RadioTower />,
      description:
        "I'm a certified radio operator with the call sign TA2UWU. I originally got licensed for sailing and radio astronomy, but it quickly became something more. I enjoy working with SDRs, building custom antennas and circuit boards, and exploring the world of signals and message decoding. I can read and write Morse code too, though I'm still working on the speed.",
    },
  ],
  Music: [
    { label: "Piano", icon: <Piano />, description: "The piano has been with me for over a decade, through over multiple concerts and countless moments, it continues to be an enduring part of who I am." },
    { label: "Drums", icon: <Drum />, description: "I played the drums actively for two years, performing in two concerts. Although I've since taken a break and forgotten much, I can still play and plan to start again soon." },
    { label: "Guitar", icon: <Guitar />, description: "I picked up the guitar just for fun and somehow, it turned into something more. I'm no professional, but give me a campfire and I'll set the mood just fine." },
  ],
  Languages: [
    { label: "English", icon: <Languages />, description: "I have been speaking English for over a decade, with near-native proficiency. In addition, I possess a strong command of business, professional, and academic English." },
    { label: "Turkish", icon: <Languages />, description: "I am a native Turkish speaker with full fluency in both written and spoken communication." },
    { label: "Japanese", icon: <Languages />, description: "I am actively studying Japanese and have attained an upper-elementary (approaching B1) level of proficiency." },
    { label: "Polish", icon: <Languages />, description: "I am currently living in Poland and have recently begun learning Polish. My proficiency is at an A1 level." },
  ],
};

export default function SkillsTabs() {
  const [activeTab, setActiveTab] = useState("Hobbies");

  return (
    <section>
      <div className="flex space-x-6 border-b border-base-content/20 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex items-center pb-2 border-b-2 transition-all ${activeTab === tab ? "border-base-content font-semibold" : "border-transparent text-base-content/60 hover:text-base-content/80"}`}
          >
            <div className="flex gap-1 items-center">
              {tab === "Music" && <Music size={18} />}
              {tab === "Hobbies" && <TrafficCone size={18} />}
              {tab === "Languages" && <Languages size={18} />}
              <p className="text-sm">{tab}</p>
            </div>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {skills[activeTab].map((skill) => (
          <div onClick={() => document.getElementById(skill.label).showModal()} key={skill.label} className="flex cursor-pointer items-center gap-2 border-2 border-base-content/50 hover:border-base-content/80 transition rounded-box px-4 py-2">
            <span>{skill.icon}</span>
            <p className="font-medium">{skill.label}</p>
            <dialog id={skill.label} className="modal">
              <div className="modal-box bg-base-300 overflow-hidden cursor-default">
                <div className={`flex gap-4 ${skill.img ? "h-[50vh]" : ""}`}>
                  {skill.img && skill.imgAlt ? (
                    <div className="scroll-hide overflow-y-auto rounded-box pr-2 space-y-2">
                      <img src={skill.img} className="rounded-box w-64" />
                      <img src={skill.imgAlt} className="rounded-box w-64" />
                    </div>
                  ) : skill.img ? (
                    <div className="scroll-hide overflow-y-auto rounded-box pr-2 space-y-2">
                      <img src={skill.img} className="rounded-box w-64" />
                    </div>
                  ) : null}
                  <div className={`overflow-hidden ${skill.img ? "w-1/2" : ""}`}>
                    <h3 className="font-bold text-xl">{skill.label}</h3>
                    <p className="mt-2">{skill.description}</p>
                  </div>
                </div>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        ))}
      </div>
    </section>
  );
}
