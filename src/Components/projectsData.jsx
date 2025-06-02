import ZoomImage from "../Components/ZoomImage";
import ZoomVideo from "../Components/ZoomVideo";
import { CirclePlay } from "lucide-react";

export const projectsData = [
  {
    title: "AeroDTA",
    subTitle: "AI aerial vehicle",
    img: "Projects/Project1/Project.png",
    imgAlt: "Projects/Project1/ProjectAlt.png",
    modalContent: (
      <section className="flex gap-4 overflow-hidden h-[80vh]">
        <div className="flex flex-col w-2/3 h-full overflow-hidden">
          <h1 className="font-bold text-xl">Project: AeroDTA – Autonomous Atmospheric Probe</h1>
          <div className="divider mt-0 mb-0" />
          <div className="overflow-y-auto pr-2 h-full">
            <h2 className="font-semibold text-lg">Overview:</h2>
            <p className="py-2">
              AeroDTA is a fully autonomous aerial vehicle designed for vertical takeoff, atmospheric data collection, and return missions. Engineered for altitudes between 100–200 meters, the system is ideal for environmental monitoring, rapid
              prototyping, and advanced sensor integration testing.
            </p>
            <h2 className="font-semibold text-lg">Key Features:</h2>
            <h3 className="font-bold">Dual Brushless Motor System:</h3>
            <p>● Equipped with two brushless motors, mounted top and bottom in opposite directions to counteract rotational torque for stable vertical flight and hover precision.</p>
            <h3 className="font-bold mt-2">Environmental Sensor Suite:</h3>
            <p>AeroDTA houses a comprehensive set of sensors capable of measuring:</p>
            <ul className="">
              <li>● CO₂ (ppm)</li>
              <li>● Nitrogen concentration</li>
              <li>● Atmospheric pressure</li>
              <li>● Temperature</li>
              <li>● Humidity</li>
            </ul>
            <h3 className="font-bold mt-2">Autonomous Control System:</h3>
            <ul className="">
              <li>● PWM-controlled aerodynamic fins on the lower frame allow fine-tuned stability adjustments and active control during flight.</li>
              <li>● GPS integration provides positional awareness and autonomous return-to-launch capabilities.</li>
            </ul>
            <h3 className="font-bold mt-2">Communication:</h3>
            <ul className="">
              <li>● A high-range radio transmitter continuously relays live sensor data to a ground control station.</li>
              <li>● Data logging and visualization are supported through a dedicated base station application.</li>
            </ul>
            <h3 className="font-bold mt-2">Structure:</h3>
            <ul className="">
              <li>● Built using lightweight composite and 3D-printed components.</li>
              <li>● Includes structural landing legs for stable deployment and recovery on rough terrain.</li>
            </ul>
            <h2 className="font-bold text-lg mt-2">Applications:</h2>
            <ul className="">
              <li>● Atmospheric research</li>
              <li>● Remote environmental monitoring</li>
              <li>● Field testing of AI-based stabilization</li>
              <li>● Educational aerospace experiments</li>
            </ul>
          </div>
        </div>
        <div className="flex gap-2 flex-col w-1/3 h-full  overflow-hidden">
          <ZoomImage src="Projects/Project1/ImgR1.jpg" alt="" className="rounded-box aspect-square h-[90%] object-cover" />
          <ZoomImage src="Projects/Project1/ImgR2.jpg" alt="" className="rounded-box aspect-square h-[90%] object-cover" />
        </div>
      </section>
    ),
  },
  {
    title: "Multi-Rover",
    subTitle: "Multi-terrain AI Rover",
    img: "Projects/Project2/Project.png",
    imgAlt: "Projects/Project2/ProjectAlt.png",
    modalContent: (
      <section className="flex overflow-hidden gap-4 h-[80vh]">
        <div className="flex flex-col w-2/3 h-full overflow-hidden">
          <h1 className="font-bold text-xl">Project: Multi-Terrain Rover – Autonomous Soil Protein Analysis Rover</h1>
          <div className="divider mt-0 mb-0" />
          <div className="overflow-y-auto pr-2 h-full">
            <h2 className="font-semibold text-lg">Overview:</h2>
            <p className="py-2">
              Multi-Rover is a rugged, AI-assisted mobile robot engineered for multi-terrain exploration and biochemical soil analysis. Designed for planetary simulation missions, field research, and intelligent automation, the rover autonomously
              collects and examines soil samples for potential signs of life.
            </p>
            <h2 className="font-semibold text-lg">Key Features:</h2>
            <h3 className="font-bold">Autonomous Soil Sampling & Analysis:</h3>
            <p>
              ● Equipped with a robotic arm and claw mechanism, the rover can extract soil samples from varied surfaces. It performs on-site biochemical testing using a copper + reagent reaction method, which visually indicates the presence of
              proteins which is a key marker in biological analysis.
            </p>
            <h3 className="font-bold mt-2">Multi-Terrain Mobility:</h3>
            <p>
              ● Powered by two robust DC motors and precision torque control, the rover easily traverses uneven surfaces such as gravel, sand, or rough indoor terrain. Its wheel configuration and frame geometry provide excellent ground clearance and
              stability.
            </p>
            <h3 className="font-bold mt-2">Onboard AI & Vision:</h3>
            <p>
              ● A live camera system streams video directly to a central control station. The onboard AI processes this feed in real-time for object detection, navigation, and autonomous task execution. It can identify sample locations, avoid
              obstacles, and execute scripted or learned behaviors.
            </p>
            <h3 className="font-bold mt-2">Custom Control Board:</h3>
            <p>Built around a custom-designed electronics platform, the rover integrates:</p>
            <ul className="">
              <li>● A high-range radio transmitter continuously relays live sensor data to a ground control station.</li>
              <li>● Data logging and visualization are supported through a dedicated base station application.</li>
            </ul>
            <h3 className="font-bold mt-2">Structure:</h3>
            <ul className="">
              <li>● Motor drivers and PWM control</li>
              <li>● Arm kinematics control</li>
              <li>● Video transmission and AI inference pipeline</li>
              <li>● Long-range secure data transmission</li>
            </ul>
            <h2 className="font-bold text-lg mt-2">Applications:</h2>
            <ul className="">
              <li>● Planetary analog missions and astrobiology research</li>
              <li>● Educational robotics and field demo projects</li>
              <li>● Real-time chemical sensing and terrain navigation experiments</li>
              <li>● AI vision and manipulation tests in constrained environments</li>
            </ul>
          </div>
        </div>
        <div className="flex gap-2 flex-col w-1/3 h-full overflow-y-auto overflow-hidden">
          <ZoomImage src="Projects/Project2/ImgR1.jpg" alt="" className="rounded-box aspect-square h-[90%] object-cover" />
          <ZoomImage src="Projects/Project2/ImgR2.jpg" alt="" className="rounded-box aspect-square h-[90%] object-cover" />
        </div>
      </section>
    ),
  },
  {
    title: "PCBs",
    subTitle: "Custom PCBs for projects",
    img: "Projects/Project3/Project.png",
    imgAlt: "Projects/Project3/ProjectAlt.png",
    modalContent: (
      <section className="flex overflow-hidden gap-4 h-[80vh]">
        <div className="flex flex-col w-2/3 h-full overflow-hidden">
          <h1 className="font-bold text-xl">Project: Custom PCBs – Versatile Electronics Design</h1>
          <div className="divider mt-0 mb-0" />
          <div className="overflow-y-auto pr-2 h-full">
            <h2 className="font-semibold text-lg">Overview:</h2>
            <p className="py-2">
              These are custom-designed PCBs created for various embedded and robotics applications. Each board is uniquely tailored to its specific use case, from signal processing and interface control to sensor integration and AI edge systems.
            </p>
            <h2 className="font-semibold text-lg">Microcontroller Dev Board</h2>
            <p>● A compact, high-density development board featuring an ARM Cortex-M microcontroller, USB-C interface, boot/reset control, and breakout headers for rapid prototyping and firmware development.</p>
            <h3 className="font-bold mt-2">Analog Signal Controller</h3>
            <p>● Built for use with relays, switches, and analog sensors. Includes DIP switches, dual audio jacks, op-amps, trimpots, and LED indicators. Perfect for signal routing or hardware tuning during field tests.</p>
            <h3 className="font-bold mt-2">EEG Signal Interface</h3>
            <p>● A small, specialized board optimized for biosignal acquisition with onboard filtering, gain stages, and analog front-ends used in brain-computer interface experiments.</p>
            <h2 className="font-bold text-lg mt-2">Note:</h2>
            <p>More important than individual boards, demonstrating full PCB design capability, including:</p>
            <ul className="">
              <li>● Schematic design & layout</li>
              <li>● Multi-layer routing </li>
              <li>● Mixed-signal and high-speed design </li>
              <li>● Rapid prototyping & manufacturing-ready output</li>
            </ul>
          </div>
        </div>
        <div className="flex gap-2 flex-col w-1/3 h-full overflow-y-auto overflow-hidden">
          <ZoomImage src="Projects/Project3/ImgR1.jpg" alt="" className="rounded-box aspect-square h-[90%] object-cover" />
          <ZoomImage src="Projects/Project3/ImgR2.jpg" alt="" className="rounded-box aspect-square h-[90%] object-cover" />
          <ZoomImage src="Projects/Project3/ImgR3.jpg" alt="" className="rounded-box aspect-square h-[90%] object-cover" />
        </div>
      </section>
    ),
  },
  {
    title: "OneWheel",
    subTitle: "Diy onewheel prototype",
    img: "Projects/Project4/Project.png",
    imgAlt: "Projects/Project4/ProjectAlt.png",
    modalContent: (
      <section className="flex gap-4 overflow-y-hidden h-[80vh]">
        <div className="flex flex-col w-2/3 h-full overflow-hidden">
          <h1 className="font-bold text-xl">Project: DIY Onewheel – Self-Balancing Electric Board</h1>
          <div className="divider mt-0 mb-0" />
          <div className="overflow-y-auto h-full pr-2">
            <h2 className="font-semibold text-lg">Overview:</h2>
            <p className="py-2">
              This project is a custom-built DIY version of a self-balancing single-wheel electric board, inspired by the commercial Onewheel. It’s designed to provide smooth personal transport over short distances, using an integrated balance
              control system and a central high-torque motorized wheel.
            </p>
            <h2 className="font-semibold text-lg">Key Features:</h2>
            <h3 className="font-bold">Self-Balancing System:</h3>
            <p>● Utilizes real-time sensor feedback (IMU) and a PID-based algorithm to keep the board balanced on a single wheel. The system continuously adjusts motor torque to respond to rider weight shifts and terrain changes.</p>
            <h3 className="font-bold mt-2">High-Torque Motor Integration:</h3>
            <p>● The central large tire is powered by a brushless DC motor (BLDC), capable of delivering enough torque for both acceleration and hill climbing.</p>
            <h3 className="font-bold mt-2">Modular Deck Design:</h3>
            <p>● Built with two detachable platforms (footpads) on either side of the wheel, providing stability and allowing for easy hardware access and component upgrades.</p>
            <h3 className="font-bold mt-2">Custom Control System:</h3>
            <p>Includes:</p>
            <ul className="">
              <li>● Custom-designed motor driver and controller board</li>
              <li>● Wireless module for configuration and telemetry</li>
              <li>● Power management system and safety cutoff features</li>
            </ul>
            <h3 className="font-bold mt-2">User Control:</h3>
            <ul className="">
              <li>● Lean-to-go, lean-back-to-stop functionality</li>
              <li>● Footpad pressure sensors (optional for future upgrade)</li>
              <li>● Start/stop via push-to-engage</li>
            </ul>
            <h2 className="font-bold text-lg mt-2">Applications:</h2>
            <ul className="">
              <li>● Personal transportation</li>
              <li>● Embedded control systems testing</li>
              <li>● Self-balancing robotics research</li>
              <li>● DIY electric mobility prototyping</li>
            </ul>
          </div>
        </div>
        <div className="flex gap-2 flex-col w-1/3 h-full overflow-y-auto overflow-hidden">
          <ZoomImage src="Projects/Project4/ImgR1.jpg" alt="" className="rounded-box aspect-square h-[90%] object-cover" />
          <div className="h-full relative">
            <CirclePlay className="absolute top-[calc(50%-28px)] left-[calc(50%-28px)] size-14 text-primary-content drop-shadow-primary/80 drop-shadow-lg" />
            <ZoomVideo src="Projects/Project4/VideoR1.mp4" className="rounded-box aspect-square h-[90%] object-cover" controls muted playsInline />
          </div>
        </div>
      </section>
    ),
  },
  {
    title: "NeuroLink",
    subTitle: "Mind to machine interface",
    img: "Projects/Project5/Project.png",
    imgAlt: "Projects/Project5/ProjectAlt.png",
    modalContent: (
      <section className="flex gap-4 overflow-y-hidden h-[80vh]">
        <div className="flex flex-col w-2/3 h-full overflow-hidden">
          <h1 className="font-bold text-xl">Project: NeuroLink – Brain-to-Body Signal Transfer Interface</h1>
          <div className="divider mt-0 mb-0" />
          <div className="overflow-y-auto h-full pr-2">
            <h2 className="font-semibold text-lg">Overview:</h2>
            <p className="py-2">
              NeuroLink is a cutting-edge experimental brain-computer interface (BCI) system designed to capture and interpret neural activity and use it to control another person's muscles via electrical stimulation. It represents a fusion of
              neuroscience, embedded systems, AI, and biomedical engineering, effectively turning brain signals into action in another body.
            </p>
            <h2 className="font-semibold text-lg">Key Features:</h2>
            <h3 className="font-bold">Brain Signal Acquisition:</h3>
            <p>● Utilizes high-sensitivity, medical-grade EEG receivers placed at key scalp points to detect brainwave activity with exceptional clarity and minimal noise.</p>
            <h3 className="font-bold mt-2">Custom Hardware Platform:</h3>
            <p>A custom-designed PCB integrates:</p>
            <ul className="">
              <li>● Analog frontend for signal amplification and noise suppression</li>
              <li>● Digital filters and ADC for clean waveform capture</li>
              <li>● Low-latency communication with the control system</li>
            </ul>
            <h3 className="font-bold mt-2">Advanced Signal Processing & AI Interpretation:</h3>
            <p>● Implements real-time filtering (hardware + software) to isolate motor-intent signals.</p>
            <p>● AI models trained on motor activity patterns decode user intent and classify brain commands.</p>
            <h3 className="font-bold mt-2">Muscle Control via TENS Unit:</h3>
            <ul className="">
              <li>● Once interpreted, the brain signal triggers a TENS (Transcutaneous Electrical Nerve Stimulation) device connected to another person.</li>
              <li>● This creates controlled muscle contractions — enabling one person to move another’s limb using thought alone.</li>
            </ul>
            <h3 className="font-bold mt-2">Wearable Headband Design:</h3>
            <ul className="">
              <li>● The 3D-printed structure supports comfortable electrode positioning and secure component housing.</li>
              <li>● Compact and adaptable for different head shapes.</li>
            </ul>
            <h2 className="font-bold text-lg mt-2">Applications:</h2>
            <ul className="">
              <li>● Neuroprosthetics and assistive robotics</li>
              <li>● Experimental neuroscience and neural control research</li>
              <li>● Human-to-human communication systems</li>
              <li>● Brain training and muscle rehab systems</li>
            </ul>
          </div>
        </div>
        <div className="flex gap-2 flex-col w-1/3 h-full overflow-y-auto overflow-hidden">
          <ZoomImage src="Projects/Project5/ImgR1.jpg" alt="" className="rounded-box aspect-square h-[90%] object-cover" />
          <ZoomImage src="Projects/Project5/ImgR2.jpg" alt="" className="rounded-box aspect-square h-[90%] object-cover" />
        </div>
      </section>
    ),
  },
  {
    title: "BalBot",
    subTitle: "Mobile Balancing Platform",
    img: "Projects/Project6/Project.png",
    imgAlt: "Projects/Project6/ProjectAlt.png",
    modalContent: (
      <section className="flex gap-4 overflow-y-hidden h-[80vh]">
        <div className="flex flex-col w-2/3 h-full overflow-hidden">
          <h1 className="font-bold text-xl">Project: Two-Wheel Self-Balancing Robot</h1>
          <div className="divider mt-0 mb-0" />
          <div className="overflow-y-auto h-full pr-2">
            <h2 className="font-semibold text-lg">Overview:</h2>
            <p className="py-2">
              This is a custom-built self-balancing robot that maintains vertical stability on two wheels using sensor fusion, real-time control, and precise motor actuation. The system is designed to demonstrate the integration of low-level
              microcontroller programming with hardware control and communication interfaces.
            </p>
            <h2 className="font-semibold text-lg">Core Components:</h2>
            <h3 className="font-bold">Self-Balancing System:</h3>
            <ul className="">
              <li>● MPU6050: 6-axis IMU used for tilt angle estimation via sensor fusion (accelerometer + gyroscope).</li>
              <li>● HC-05 Bluetooth Module: Enables remote control and real-time monitoring via a mobile app.</li>
              <li>● Arduino Nano: Main microcontroller unit, programmed with pure register-level C++ for full hardware control without Arduino libraries.</li>
              <li>● 2x Nema17 Stepper Motors: Provide precise rotational movement with high torque.</li>
              <li>● 2x Stepper Motor Drivers: Interface between the microcontroller and motors, driven via step/direction signals.</li>
            </ul>
            <h2 className="font-bold text-lg mt-2">Software Features:</h2>
            <ul className="">
              <li>● Register-Level Programming:</li>
              <li>All control logic written with direct register access (no digitalWrite/analogWrite) to maximize speed and control.</li>
              <li>● Custom PID Control Loop:</li>
              <li>Balancing is achieved using a tuned PID controller running on real-time sensor data.</li>
              <li>● Multitasking Using Timers:</li>
              <li>Separate hardware timers for:</li>
              <li className=" ml-4">● PID loop timing</li>
              <li className=" ml-4">● Stepper motor stepping</li>
              <li className=" ml-4">● Bluetooth message handling</li>
              <li>Prevents blocking behavior and improves responsiveness.</li>
              <li className="ml-4">● External interrupt on MPU6050 for data-ready signal.</li>
              <li className=" ml-4">● Timer interrupts drive PWM stepping signals for motor control.</li>
              <li className=" ml-4">● Software serial handled with timed polling.</li>
            </ul>
            <h2 className="font-bold text-lg mt-2">Control Logic Flow:</h2>
            <ul className="">
              <li>● MPU6050 provides raw angle data (roll/pitch).</li>
              <li>● Custom filter fuses gyro + accel to calculate precise tilt.</li>
              <li>● PID algorithm determines necessary motor corrections.</li>
              <li>● Timer interrupt triggers stepper driver pins with exact frequency and direction.</li>
              <li>● HC-05 receives mobile app commands to change balance mode, calibrate, or stop.</li>
            </ul>
            <h2 className="font-bold text-lg mt-2">Features:</h2>
            <ul className="">
              <li>● Real-time tilt correction with smooth stepper motion</li>
              <li>● Bluetooth interface for remote control and parameter tuning</li>
              <li>● Compact and efficient C++ codebase using no external libraries</li>
              <li>● Designed for expandability (e.g. WiFi, camera, or LIDAR upgrade)</li>
            </ul>
            <h2 className="font-bold text-lg mt-2">Applications:</h2>
            <ul className="">
              <li>● Control Systems Education – Demonstrates real-world implementation of PID, multitasking, and sensor fusion</li>
              <li>● Robotics Competitions – Base platform for autonomous balancing robots or maze solvers</li>
              <li>● IoT & Embedded Demos – Showcases low-level microcontroller control with mobile interfacing</li>
              <li>● Research & Prototyping – Platform for testing new IMU sensors, filters, or AI-based control methods</li>
              <li>● Teaching Tool – Excellent for learning real-time systems, timers, and embedded motor control</li>
            </ul>
          </div>
        </div>
        <div className="flex gap-2 flex-col w-1/3 h-full overflow-y-auto overflow-hidden">
          <ZoomImage src="Projects/Project6/ImgR1.jpg" alt="" className="rounded-box aspect-square h-[90%] object-cover" />
          <div className="h-full relative">
            <CirclePlay className="absolute top-[calc(50%-28px)] left-[calc(50%-28px)] size-14 text-primary-content drop-shadow-primary/80 drop-shadow-lg" />
            <ZoomVideo src="Projects/Project6/VideoR1.mp4" className="rounded-box aspect-square h-[90%] object-cover" controls muted playsInline />
          </div>
          <ZoomImage src="Projects/Project6/ImgR2.png" alt="" className="rounded-box aspect-square h-[90%] object-contain" />
        </div>
      </section>
    ),
  },
  {
    title: "WristScan",
    subTitle: "Doppler Radar Wristband",
    img: "Projects/Project7/Project.png",
    imgAlt: "Projects/Project7/ProjectAlt.png",
    modalContent: (
      <section className="flex gap-4 overflow-y-hidden h-[80vh]">
        <div className="flex flex-col w-2/3 h-full overflow-hidden">
          <h1 className="font-bold text-xl">Project: Doppler Feedback Wristband</h1>
          <div className="divider mt-0 mb-0" />
          <div className="overflow-y-auto h-full pr-2">
            <h2 className="font-semibold text-lg">Overview:</h2>
            <p className="py-2">
              A wearable radar-based proximity and motion feedback system. The device detects up to 3 people within a 5-meter range using a dual-antenna Doppler radar, then translates their relative speed, distance, and direction into haptic feedback
              using two vibration motors. It’s compact, fast, and ideal for ambient awareness or assistive tech.
            </p>
            <h2 className="font-semibold text-lg">Hardware Components:</h2>
            <h3 className="font-bold">Doppler Radar Module (Dual RX Antennas)</h3>
            <p>● Captures real-time motion data through frequency shifts and phase difference to determine velocity and direction.</p>
            <h3 className="font-bold">ESP32-C3</h3>
            <p>High-speed microcontroller that handles:</p>
            <ul>
              <li>● FFT (Fast Fourier Transform) computation for signal analysis</li>
              <li>● PID control of vibration motors</li>
              <li>● Power management and Bluetooth (optional)</li>
            </ul>
            <h3 className="font-bold">2x Vibration Motors (Linear Resonant Actuators or ERMs)</h3>
            <p>Placed on opposite sides of the wrist to give directional haptic feedback:</p>
            <ul>
              <li>● Direction → left/right motor</li>
              <li>● Intensity → proximity & speed</li>
              <li>● Pulse → target switching</li>
            </ul>
            <h3 className="font-bold">3D-Printed Enclosure + Velcro Strap</h3>
            <p>● Custom casing for mounting electronics on the wrist, ensuring user comfort and optimal radar positioning.</p>
            <h2 className="font-bold text-lg mt-2">Software Architecture:</h2>
            <ul className="">
              <li>● Signal Processing Pipeline:</li>
              <li className=" ml-4">● Raw radar I/Q signals captured via ADC</li>
              <li className=" ml-4">● Windowing + FFT computed on ESP32-C3</li>
              <li className=" ml-4">● Spectral peaks identify Doppler shifts (velocity)</li>
              <li className=" ml-4">● Amplitude + antenna phase difference used for direction and target count</li>
              <li className=" ml-4">● PID logic regulates motor response in real-time</li>
              <li>● Multitasking System:</li>
              <li className=" ml-4">● External interrupt on MPU6050 for data-ready signal.</li>
              <li className=" ml-4">● Timer interrupts drive PWM stepping signals for motor control.</li>
              <li className=" ml-4">● Software serial handled with timed polling.</li>
            </ul>
            <h2 className="font-bold text-lg mt-2">Technical Specs:</h2>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Feature</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <th>1</th>
                    <td>Detection Range</td>
                    <td>Up to 5 meters</td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <th>2</th>
                    <td>Max Targets</td>
                    <td>3 concurrent (dominant prioritized)</td>
                  </tr>
                  {/* row 3 */}
                  <tr>
                    <th>3</th>
                    <td>MCU</td>
                    <td>ESP32-C3</td>
                  </tr>
                  {/* row 4 */}
                  <tr>
                    <th>4</th>
                    <td>Feedback</td>
                    <td>2x vibration motors</td>
                  </tr>
                  {/* row 5 */}
                  <tr>
                    <th>5</th>
                    <td>Radar Inputs</td>
                    <td>Dual RX (directional tracking)</td>
                  </tr>
                  {/* row 6 */}
                  <tr>
                    <th>6</th>
                    <td>Power</td>
                    <td>Rechargeable LiPo battery</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h2 className="font-bold text-lg mt-2">Applications:</h2>
            <ul className="">
              <li>● Situational Awareness – Silent proximity alerts for cyclists, pedestrians, or workers in blind zones</li>
              <li>● Assistive Tech – Spatial guidance for visually impaired users</li>
              <li>● Gaming & Immersion – Haptic radar for VR/AR or live-action games</li>
              <li>● Research – Wearable Doppler experiments for bio-signals, gesture tracking, or traffic flow analysis</li>
              <li>● Robotics/Swarm Systems – Proximity mapping for wearable interfaces or team-aware bots</li>
            </ul>
          </div>
        </div>
        <div className="flex gap-2 flex-col w-1/3 h-full overflow-y-auto overflow-hidden">
          <ZoomImage src="Projects/Project7/ImgR1.jpg" alt="" className="rounded-box aspect-square h-[90%] object-cover" />
        </div>
      </section>
    ),
  },
  {
    title: "Lucky Core",
    subTitle: "OLED Emoji Slot",
    img: "Projects/Project8/Project.png",
    imgAlt: "Projects/Project8/ProjectAlt.png",
    modalContent: (
      <section className="flex gap-4 overflow-y-hidden h-[80vh]">
        <div className="flex flex-col w-2/3 h-full overflow-hidden">
          <h1 className="font-bold text-xl">Project: Pocket-Sized Emoji Slot Machine</h1>
          <div className="divider mt-0 mb-0" />
          <div className="overflow-y-auto h-full pr-2">
            <h2 className="font-semibold text-lg">Overview:</h2>
            <p className="py-2">
              This miniature handheld slot machine is powered by an ESP32-C3 running ESP-IDF, with a vibrant OLED screen and a smart coin-balancing win algorithm. Featuring real-time animations and game logic, the device delivers an engaging
              experience in a tiny, portable package.
            </p>
            <h2 className="font-semibold text-lg">Hardware Components:</h2>
            <h3 className="font-bold">ESP32-C3</h3>
            <p>● RISC-V MCU with Wi-Fi/Bluetooth and hardware timers</p>
            <h3 className="font-bold">OLED Display</h3>
            <p>Used to display emoji slot reels and UI elements</p>
            <h3 className="font-bold">1000mAh LiPo Battery</h3>
            <p>Rechargeable, supports long playtime</p>
            <h3 className="font-bold">Custom 3D-Printed Case</h3>
            <p>Durable, ergonomic shell for gameplay on-the-go</p>
            <h3 className="font-bold">Button Input</h3>
            <p>Single tactile input for spinning the slots</p>
            <h2 className="font-bold text-lg mt-2">Features:</h2>
            <ul>
              <li>● Emoji-Based Reels – Slot icons are fun, expressive emojis rendered in real time</li>
              <li>● Framerate-Stable Game Loop – Designed using ESP-IDF’s real-time task scheduling</li>
              <li>● Reel Animation System – Smooth transitions between frames using double-buffering</li>
              <li>● Win Feedback – Flashing emojis or animations on win state</li>
            </ul>
            <h2 className="font-bold text-lg mt-2">Win Algorithm Logic:</h2>
            <p>Fairness-Weighted RNG – Random number generation is influenced by a probability curve:</p>
            <ul className="ml-4">
              <li>● Makes sure that the occasional wins at set intervals</li>
              <li>● Prevents long losing streaks that deplete the player’s coins</li>
            </ul>
            <p>Coin Flow Control:</p>
            <ul className="ml-4">
              <li>● The game dynamically adjusts the difficulty based on the player's coin count</li>
              <li>● Never reach 0 coins: Near-miss wins and bonus events keep the user engaged but never stuck</li>
            </ul>
            <h2 className="font-bold text-lg mt-2">Software Architecture:</h2>
            <h2 className="font-bold text-lg mt-2">Technical Specs:</h2>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th>System</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <th>1</th>
                    <td>ESP-IDF</td>
                    <td>Handles display buffer updates, GPIO, timers, RNG</td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <th>2</th>
                    <td>FreeRTOS Tasks</td>
                    <td>Multitasking for animation timing, input handling, and game state logic</td>
                  </tr>
                  {/* row 3 */}
                  <tr>
                    <th>3</th>
                    <td>Custom Game Loop</td>
                    <td>Fixed timestep update-render loop for responsive input and animations</td>
                  </tr>
                  {/* row 4 */}
                  <tr>
                    <th>4</th>
                    <td>Frame Buffering</td>
                    <td>Prevents flickering with double-buffered OLED draw calls</td>
                  </tr>
                  {/* row 5 */}
                  <tr>
                    <th>5</th>
                    <td>EEPROM/NVS (Optional)</td>
                    <td>For storing coin state across reboots</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h2 className="font-bold text-lg mt-2">Power Efficiency:</h2>
            <ul className="">
              <li>● Low-power idle mode when inactive</li>
              <li>● Frame skipping logic for energy conservation</li>
              <li>● OLED dimming when untouched</li>
            </ul>
            <h2 className="font-bold text-lg mt-2">Applications:</h2>
            <ul className="">
              <li>● Embedded Gaming Demos – Perfect for showing off what the ESP32-C3 can do</li>
              <li>● Behavioral Studies – Can simulate addictive reward mechanisms (slot loop psychology)</li>
              <li>● Novelty Gadget – Fun gift or conversation starter</li>
              <li>● Learning Tool – Real-time game architecture, animation logic, and embedded UI design</li>
              <li>● Showcases Custom Probability Modeling – For embedded-controlled randomness and fairness systems</li>
            </ul>
          </div>
        </div>
        <div className="flex gap-2 flex-col w-1/3 h-full overflow-y-auto overflow-hidden">
          <ZoomImage src="Projects/Project8/ImgR1.jpg" alt="" className="rounded-box aspect-square h-[90%] object-cover" />
          <div className="h-full relative">
            <CirclePlay className="absolute top-[calc(50%-28px)] left-[calc(50%-28px)] size-14 text-primary-content drop-shadow-primary/80 drop-shadow-lg" />
            <ZoomVideo src="Projects/Project8/VideoR1.mp4" className="rounded-box aspect-square h-[90%] object-cover" controls muted playsInline />
          </div>
        </div>
      </section>
    ),
  },
  {
    title: "SeismoWatch",
    subTitle: "Global Quake Tracker",
    img: "Projects/Project9/Project.png",
    imgAlt: "Projects/Project9/ProjectAlt.png",
    modalContent: (
      <section className="flex gap-4 overflow-y-hidden h-[80vh]">
        <div className="flex flex-col w-2/3 h-full overflow-hidden">
          <h1 className="font-bold text-xl">Project: Real-Time Earthquake Tracker</h1>
          <div className="divider mt-0 mb-0" />
          <div className="overflow-y-auto h-full pr-2">
            <h2 className="font-semibold text-primary text-lg">This project was made under 3 hours for a challenge!</h2>
            <h2 className="font-semibold text-lg">Overview:</h2>
            <p className="py-2">
              This mobile application provides real-time global earthquake monitoring by aggregating seismic data from multiple authoritative sources — namely USGS (United States Geological Survey) and AFAD (Turkey's Disaster and Emergency Management
              Authority). The app is designed to offer an intuitive, visual way to stay informed about seismic activity around the world.
            </p>
            <h2 className="font-semibold text-lg">Key Features:</h2>
            <h3 className="font-bold">Live Data Feeds</h3>
            <p>● Continuously fetches and updates seismic data from USGS and AFAD APIs.</p>
            <h3 className="font-bold">Dual Source Toggle</h3>
            <p>● Users can seamlessly switch between USGS and AFAD to view different regional perspectives.</p>
            <h3 className="font-bold">Heatmap Visualization</h3>
            <p>● A dynamic, color-coded heatmap overlays the map to indicate the frequency and intensity of earthquake activity.</p>
            <ul className="ml-4">
              <li>● Green → Low activity</li>
              <li>● Yellow → Moderate activity</li>
              <li>● High seismic zones</li>
            </ul>
            <h3 className="font-bold">Earthquake Listings</h3>
            <p>● Displays a scrollable list of recent quakes with key information:</p>
            <ul className="ml-4">
              <li>● Magnitude</li>
              <li>● Location (e.g., “10 km SE of Fox River, Alaska”)</li>
              <li>● Real-time magnitude color coding</li>
              <li>● Automatic sorting by recency or magnitude</li>
            </ul>
            <h3 className="font-bold">Map Modes</h3>
            <p>● Offers both Map and Satellite views via Google Maps integration, complete with zoom and pan controls.</p>
            <h3 className="font-bold">Live Data Feeds</h3>
            <ul className="ml-4">
              <li>● Dark theme optimized for readability and nighttime use</li>
              <li>● Intuitive bottom tab navigation (Map / Settings)</li>
              <li>● Modern Material Design interface elements</li>
            </ul>
            <h2 className="font-bold text-lg mt-2">Technologies Used:</h2>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Category</th>
                    <th>Technology / Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <td>Framework</td>
                    <td>React + Ionic + Capacitor</td>
                  </tr>
                  <tr>
                    <th>2</th>
                    <td>Styling</td>
                    <td>Tailwind CSS + DaisyUI</td>
                  </tr>
                  <tr>
                    <th>3</th>
                    <td>UI Library</td>
                    <td>DaisyUI (Tailwind-based components)</td>
                  </tr>
                  <tr>
                    <th>4</th>
                    <td>Map System</td>
                    <td>Google Maps API</td>
                  </tr>
                  <tr>
                    <th>5</th>
                    <td>Visualization</td>
                    <td>Heatmap Layer with custom gradient overlay</td>
                  </tr>
                  <tr>
                    <th>6</th>
                    <td>APIs</td>
                    <td>USGS and AFAD Earthquake APIs</td>
                  </tr>
                  <tr>
                    <th>7</th>
                    <td>Build System</td>
                    <td>Vite + Capacitor (for fast hybrid builds)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h2 className="font-bold text-lg mt-2">Applications:</h2>
            <ul className="">
              <li>● Personal earthquake awareness and safety</li>
              <li>● Educational tools for earth science and geology</li>
              <li>● Research support for seismic pattern analysis</li>
              <li>● Public warning systems or emergency dashboards</li>
              <li>● Integration into smart homes or IoT disaster alert systems</li>
            </ul>
          </div>
        </div>
        <div className="flex gap-2 flex-col w-1/3 h-full overflow-y-auto overflow-hidden">
          <ZoomImage src="Projects/Project9/ImgR1.png" alt="" className="rounded-box aspect-square h-[90%] object-contain" />
        </div>
      </section>
    ),
  },
  {
    title: "Mootify",
    subTitle: "Couples Emotion Watch",
    img: "Projects/Project10/Project.png",
    imgAlt: "Projects/Project10/ProjectAlt.png",
    modalContent: (
      <section className="flex gap-4 overflow-y-hidden h-[80vh]">
        <div className="flex flex-col w-2/3 h-full overflow-hidden">
          <h1 className="font-bold text-xl">Mootify Couples Smartwatch – Full Technical Documentation</h1>
          <div className="divider mt-0 mb-0" />
          <div className="overflow-y-auto h-full pr-2">
            <h2 className="font-semibold text-lg">Overview:</h2>
            <p className="py-2">
              Mootify is a unique couples' smartwatch experience. At its core, it's a wearable emotional messenger built using ESP32-C3, a 1.47" LCD display, and a React-based mobile app called Mootify. This document breaks down the system design,
              hardware, app architecture, and embedded firmware in detail.
            </p>
            <h2 className="font-semibold text-lg">System Overview:</h2>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Component</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <td>Microcontroller</td>
                    <td>ESP32-C3-based Seeed Studio Xiao with onboard CH340 USB and battery charger</td>
                  </tr>
                  <tr>
                    <th>2</th>
                    <td>Display</td>
                    <td>1.47" IPS LCD (ST7789V3), 172x320 px, SPI interface</td>
                  </tr>
                  <tr>
                    <th>3</th>
                    <td>Battery</td>
                    <td>70mAh LiPo rechargeable, ~72 hours uptime</td>
                  </tr>
                  <tr>
                    <th>4</th>
                    <td>Comms</td>
                    <td>Bluetooth Low Energy (BLE)</td>
                  </tr>
                  <tr>
                    <th>5</th>
                    <td>Frameworks</td>
                    <td>C++, Ionic React (Capacitor), TailwindCSS, Supabase, Firebase</td>
                  </tr>
                  <tr>
                    <th>6</th>
                    <td>App Features</td>
                    <td>Emotion slider, message dialog, BLE sync, push notifications via OneSignal</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="font-semibold text-lg">Mobile App (Ionic + Supabase + OneSignal)</h2>
            <h3 className="font-bold">Flow:</h3>
            <ul>
              <li>1. Login/Register: via Supabase Auth</li>
              <li>
                2. Friend System:
                <ul className="ml-4">
                  <li>● Each user has a unique ID shown in settings.</li>
                  <li>● Friends added manually using IDs.</li>
                </ul>
              </li>
              <li>
                3. Send Emotion:
                <ul className="ml-4">
                  <li>● Select a friend.</li>
                  <li>● Swipe through emoji carousel.</li>
                  <li>● Tap an emoji → dialog appears.</li>
                  <li>● Enter a short message.</li>
                  <li>● Press "Send" → triggers BLE event + push notification.</li>
                </ul>
              </li>
              <li>
                4. Receive:
                <p className="ml-4">● Notification via Firebase → user taps → “Display on Watch?” prompt → if confirmed, app sends the data to the watch.</p>
              </li>
            </ul>
            <h3 className="font-bold">Tools Used:</h3>
            <ul>
              <li>● Supabase for user auth & friend database</li>
              <li>● Firebase Functions for event-driven backend logic</li>
              <li>● OneSignal for instant cross-platform push notifications</li>
              <li>● Capacitor Bluetooth plugin to connect with the ESP32 watch</li>
            </ul>

            <h2 className="font-bold text-lg mt-2">Embedded Firmware (C++):</h2>
            <ul>
              <li>● Written in pure C++, using ESP-IDF compatible Arduino libraries.</li>
              <li>● Optimized for BLE and graphics performance.</li>
              <li>● The LCD displays 16-bit RGB images stored in flash.</li>
              <li>● Power-efficient sleep routines.</li>
            </ul>
            <h3 className="font-bold">Display: ST7789V3 1.47" LCD</h3>
            <ul>
              <li>● Rounded edges ideal for wrist wearables</li>
              <li>● 262K color depth</li>
              <li>● Controlled via SPI bus</li>
            </ul>
            <h3 className="font-bold">Sleep Logic</h3>
            <ul>
              <li>● Deep sleep after 30 seconds of inactivity</li>
              <li>● Can be instantly triggered via 3s button press</li>
              <li>● GPIO holds backlight state to save energy</li>
            </ul>

            <h2 className="font-bold text-lg mt-2">Hardware Summary:</h2>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>Component</th>
                    <th>Pin</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Button</th>
                    <td>D0</td>
                    <td>Wake / Sleep toggle</td>
                  </tr>
                  <tr>
                    <th>BL (LED)</th>
                    <td>D1</td>
                    <td>LCD Backlight</td>
                  </tr>
                  <tr>
                    <th>SPI MOSI</th>
                    <td>D10</td>
                    <td>LCD SPI data</td>
                  </tr>
                  <tr>
                    <th>SPI CLK</th>
                    <td>D8</td>
                    <td>LCD SPI clock</td>
                  </tr>
                  <tr>
                    <th>DC/CS/RST</th>
                    <td>D2/D3/D7</td>
                    <td>LCD control pins</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="font-bold text-lg mt-2">Software:</h2>
            <p>
              ● This section describes the internal software workings of the Mootify smartwatch, a tightly optimized microcontroller application written in pure C++ and running on the ESP32-C3. The smartwatch performs Bluetooth Low Energy (BLE)
              communication, emotion image rendering from flash memory, and handles power-saving logic seamlessly. The following breakdown explains the key components responsible for BLE message parsing, emoji display, power management,
              initialization, and more. It is engineered to be low-power, responsive, and user-friendly. When a user sends an emotion and message through the app, the watch immediately wakes, processes the input, and displays both with animated
              clarity and minimal latency. The architecture avoids overuse of RAM and flash I/O, prioritizing battery life and robust performance. Below, we go deeper into each essential function of the embedded software running inside the watch:
            </p>
            <h3 className="font-bold">Boot Setup:</h3>
            <div className="mt-2 bg-base-200 text-base-content text-sm font-mono rounded-lg p-4 space-y-1 leading-relaxed">
              <p>
                <span className="text-purple-400">void</span> <span className="text-yellow-300">setup</span>() &#123;
              </p>
              <p>
                &nbsp;&nbsp;<span className="text-yellow-300">Serial</span>.<span className="text-yellow-300">begin</span>(<span className="text-amber-400">115200</span>);
              </p>
              <p>
                &nbsp;&nbsp;<span className="text-yellow-300">gpio_hold_dis</span>((<span className="text-cyan-400">gpio_num_t</span>)<span className="text-yellow-300">GFX_BL</span>);
              </p>
              <p>
                &nbsp;&nbsp;<span className="text-yellow-300">esp_wifi_stop</span>();
              </p>
              <p>
                &nbsp;&nbsp;<span className="text-yellow-300">esp_wifi_deinit</span>();
              </p>
              <p>
                &nbsp;&nbsp;<span className="text-yellow-300">pinMode</span>(<span className="text-yellow-300">GFX_BL</span>, <span className="text-yellow-300">OUTPUT</span>);
              </p>
              <p>
                &nbsp;&nbsp;<span className="text-yellow-300">pinMode</span>(<span className="text-yellow-300">BUTTON_PIN</span>, <span className="text-yellow-300">INPUT_PULLUP</span>);
              </p>
              <p>
                &nbsp;&nbsp;<span className="text-yellow-300">esp_deep_sleep_enable_gpio_wakeup</span>(<span className="text-amber-400">1</span> &lt;&lt; <span className="text-yellow-300">BUTTON_PIN</span>,
                <span className="text-yellow-300">ESP_GPIO_WAKEUP_GPIO_LOW</span>);
              </p>
              <p>
                &nbsp;&nbsp;<span className="text-yellow-300">initGFX</span>();
              </p>
              <p>
                &nbsp;&nbsp;<span className="text-yellow-300">initBLE</span>();
              </p>
              <p>&#125;</p>
            </div>
            <p>● Disables unused Wi-Fi for power saving, sets up the wake button, and initializes both the BLE server and LCD screen before going into loop.</p>

            <h3 className="font-bold mt-4">BLE Setup:</h3>
            <div className="mg-2 bg-base-200 text-base-content text-sm font-mono rounded-lg p-4 space-y-1 leading-relaxed">
              <p>
                <span className="text-purple-400">void</span> <span className="text-yellow-300">initBLE</span>() &#123;
              </p>
              <p>
                &nbsp;&nbsp;<span className="text-yellow-300">BLEDevice</span>::<span className="text-yellow-300">init</span>(<span className="text-green-400">&quot;Mootify&quot;</span>);
              </p>
              <p>
                &nbsp;&nbsp;<span className="text-cyan-400">BLEServer</span> *<span className="text-yellow-300">pServer</span> = <span className="text-yellow-300">BLEDevice</span>::<span className="text-yellow-300">createServer</span>();
              </p>
              <p>
                &nbsp;&nbsp;<span className="text-cyan-400">BLEService</span> *<span className="text-yellow-300">pService</span> = <span className="text-yellow-300">pServer</span>-&gt;<span className="text-yellow-300">createService</span>(
                <span className="text-yellow-300">SERVICE_UUID</span>);
              </p>
              <p>
                &nbsp;&nbsp;<span className="text-cyan-400">BLECharacteristic</span> *<span className="text-yellow-300">pCharacteristic</span> = <span className="text-yellow-300">pService</span>-&gt;
                <span className="text-yellow-300">createCharacteristic</span>(
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-300">CHARACTERISTIC_UUID</span>, <span className="text-yellow-300">BLECharacteristic</span>::<span className="text-yellow-300">PROPERTY_READ</span> |
                <span className="text-yellow-300">BLECharacteristic</span>::<span className="text-yellow-300">PROPERTY_WRITE</span>);
              </p>
              <p>
                &nbsp;&nbsp;<span className="text-yellow-300">pCharacteristic</span>-&gt;<span className="text-yellow-300">setCallbacks</span>(<span className="text-purple-400">new</span> <span className="text-cyan-400">MyCallbacks</span>());
              </p>
              <p>
                &nbsp;&nbsp;<span className="text-yellow-300">pService</span>-&gt;<span className="text-yellow-300">start</span>();
              </p>
              <p>
                &nbsp;&nbsp;<span className="text-cyan-400">BLEAdvertising</span> *<span className="text-yellow-300">pAdvertising</span> = <span className="text-yellow-300">BLEDevice</span>::<span className="text-yellow-300">getAdvertising</span>();
              </p>
              <p>
                &nbsp;&nbsp;<span className="text-yellow-300">pAdvertising</span>-&gt;<span className="text-yellow-300">addServiceUUID</span>(<span className="text-yellow-300">SERVICE_UUID</span>);
              </p>
              <p>
                &nbsp;&nbsp;<span className="text-yellow-300">pAdvertising</span>-&gt;<span className="text-yellow-300">start</span>();
              </p>
              <p>&#125;</p>
            </div>
            <p>● Initializes and advertises a BLE service so the app can connect and push emotion data. BLE characteristic callbacks are registered here.</p>

            <h3 className="font-bold mt-4">BLE Communication Handler – Parsing Incoming Emotions:</h3>
            <div className="mt-2 bg-base-200 text-base-content text-sm font-mono rounded-lg p-4 space-y-1 leading-relaxed">
              <p>
                <span className="text-purple-400">class</span> <span className="text-cyan-400">MyCallbacks</span> : <span className="text-purple-400">public</span> <span className="text-cyan-400">BLECharacteristicCallbacks</span> &#123;
              </p>
              <p>
                &nbsp;&nbsp;<span className="text-purple-400">void</span> <span className="text-yellow-300">onWrite</span>(<span className="text-cyan-400">BLECharacteristic</span> *<span className="">pCharacteristic</span>) &#123;
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-cyan-400">String</span> <span className="text-yellow-300">value</span> = pCharacteristic-&gt;<span className="text-yellow-300">getValue</span>();
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">if</span> (value.length() &gt; <span className="text-amber-400">0</span>) &#123;
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-cyan-400">char</span> <span className="text-yellow-300">receivedText</span>[<span className="text-amber-400">21</span>] = &#123; <span className="text-amber-400">0</span>
                &#125;;
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-300">memcpy</span>(receivedText, value.c_str(), value.length());
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;receivedText[value.length()] = <span className="text-rose-500">'\\0'</span>;
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-cyan-400">char</span> *<span className="text-yellow-300">splitText</span> = <span className="text-yellow-300">strtok</span>(receivedText,
                <span className="text-green-400">&quot;&amp;&quot;</span>);
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-cyan-400">int</span> <span className="text-yellow-300">number</span> = <span className="text-yellow-300">atoi</span>(splitText);
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-300">ind</span> = number;
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;splitText = <span className="text-yellow-300">strtok</span>(<span className="text-purple-400">NULL</span>, <span className="text-green-400">&quot;&amp;&quot;</span>);
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">if</span> (splitText != <span className="text-purple-400">NULL</span>) &#123;
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-300">strcpy</span>(recText, splitText);
              </p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&#125;</p>
              <p>&nbsp;&nbsp;&#125;</p>
              <p>&#125;;</p>
            </div>
            <p>● This callback handles BLE writes. It expects data in the format index&message, such as 4&You're awesome!. It parses the index for selecting the emoji image and stores the custom message into a buffer for display.</p>

            <h3 className="font-bold mt-4">Display Renderer:</h3>
            <div className="mt-2 bg-base-200 text-base-content text-sm font-mono rounded-lg p-4 space-y-1 leading-relaxed">
              <p>
                <span className="text-purple-400">if</span> (<span className="text-yellow-300">ind</span> &gt;= <span className="text-amber-400">0</span> &amp;&amp; !<span className="text-yellow-300">isDrawn</span>) &#123;
              </p>
              <p>
                &nbsp;&nbsp;<span className="text-yellow-300">isDrawn</span> = <span className="text-purple-400">true</span>;
              </p>
              <p>
                &nbsp;&nbsp;<span className="text-yellow-300">gfx</span>-&gt;<span className="text-yellow-300">fillScreen</span>(<span className="text-yellow-300">RGB565_BLACK</span>);
              </p>
              <p>
                &nbsp;&nbsp;<span className="text-yellow-300">gfx</span>-&gt;<span className="text-yellow-300">setRotation</span>(<span className="text-amber-400">1</span>);
              </p>
              <p>
                &nbsp;&nbsp;<span className="text-yellow-300">gfx</span>-&gt;<span className="text-yellow-300">draw16bitRGBBitmap</span>(<span className="text-amber-400">128</span>, <span className="text-yellow-300">IMG_Y</span>,
                <span className="text-yellow-300">images</span>[<span className="text-yellow-300">ind</span>], <span className="text-yellow-300">IMG_WIDTH</span>, <span className="text-yellow-300">IMG_HEIGHT</span>);
              </p>
              <p>
                &nbsp;&nbsp;<span className="text-yellow-300">gfx</span>-&gt;<span className="text-yellow-300">setCursor</span>(<span className="text-amber-400">10</span>, <span className="text-amber-400">172</span>);
              </p>
              <p>
                &nbsp;&nbsp;<span className="text-yellow-300">gfx</span>-&gt;<span className="text-yellow-300">setTextColor</span>(<span className="text-yellow-300">RGB565_WHITE</span>);
              </p>
              <p>
                &nbsp;&nbsp;<span className="text-yellow-300">gfx</span>-&gt;<span className="text-yellow-300">setTextSize</span>(<span className="text-amber-400">2</span>, <span className="text-amber-400">3</span>,
                <span className="text-amber-400">0</span>);
              </p>
              <p>
                &nbsp;&nbsp;<span className="text-yellow-300">gfx</span>-&gt;<span className="text-yellow-300">setRotation</span>(<span className="text-amber-400">2</span>);
              </p>
              <p>
                &nbsp;&nbsp;<span className="text-yellow-300">gfx</span>-&gt;<span className="text-yellow-300">println</span>(<span className="text-cyan-400">String</span>(<span className="text-yellow-300">recText</span>));
              </p>
              <p>&#125;</p>
            </div>
            <p>● Once a new emotion is received, this block renders the associated image from flash and overlays the custom text message. The rotation/scaling ensures text doesn't overlap with the emoji.</p>

            <h3 className="font-bold mt-4">Sleep & Wake Handling:</h3>
            <div className="mt-2 bg-base-200 text-base-content text-sm font-mono rounded-lg p-4 space-y-1 leading-relaxed">
              <p>
                <span className="text-purple-400">void</span> <span className="text-yellow-300">goToSleep</span>() &#123;
              </p>
              <p>
                &nbsp;&nbsp;<span className="text-yellow-300">ind</span> = <span className="text-amber-400">-1</span>;
              </p>
              <p>
                &nbsp;&nbsp;<span className="text-yellow-300">isDrawn</span> = <span className="text-purple-400">false</span>;
              </p>
              <p>
                &nbsp;&nbsp;<span className="text-yellow-300">gfx</span>-&gt;<span className="text-yellow-300">fillScreen</span>(<span className="text-yellow-300">RGB565_BLACK</span>);
              </p>
              <p>
                &nbsp;&nbsp;<span className="text-yellow-300">digitalWrite</span>(<span className="text-yellow-300">GFX_BL</span>, <span className="text-yellow-300">LOW</span>);
              </p>
              <p>
                &nbsp;&nbsp;<span className="text-yellow-300">gpio_hold_en</span>((<span className="text-cyan-400">gpio_num_t</span>)<span className="text-yellow-300">GFX_BL</span>);
              </p>
              <p>
                &nbsp;&nbsp;<span className="text-yellow-300">esp_deep_sleep_start</span>();
              </p>
              <p>&#125;</p>

              <p>
                <span className="text-purple-400">void</span> <span className="text-yellow-300">buttonISR</span>() &#123;
              </p>
              <p>
                &nbsp;&nbsp;<span className="text-yellow-300">buttonPressed</span> = <span className="text-yellow-300">digitalRead</span>(<span className="text-yellow-300">BUTTON_PIN</span>);
              </p>
              <p>
                &nbsp;&nbsp;<span className="text-purple-400">if</span> (!<span className="text-yellow-300">buttonPressed</span>) &#123;
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-300">digitalWrite</span>(<span className="text-yellow-300">GFX_BL</span>, <span className="text-yellow-300">HIGH</span>);
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-300">lastActivityTime</span> = <span className="text-yellow-300">millis</span>();
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-300">pressStartTime</span> = <span className="text-yellow-300">millis</span>();
              </p>
              <p>
                &nbsp;&nbsp;&#125; <span className="text-purple-400">else if</span> (<span className="text-yellow-300">pressStartTime</span> &gt; <span className="text-amber-400">0</span> &amp;&amp; <span className="text-yellow-300">millis</span>() -
                <span className="text-yellow-300">pressStartTime</span> &gt;= <span className="text-amber-400">3000</span>) &#123;
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-300">goToSleep</span>();
              </p>
              <p>&nbsp;&nbsp;&#125;</p>
              <p>
                &nbsp;&nbsp;<span className="text-yellow-300">pressStartTime</span> = <span className="text-amber-400">0</span>;
              </p>
              <p>&#125;</p>
            </div>
            <p>● Deep sleep is triggered either by 30s inactivity or holding the side button for 3 seconds. When the device sleeps, the backlight is turned off and GPIO hold keeps the pin states stable. A GPIO wake-up restores function.</p>

            <h2 className="font-semibold text-lg mt-2">Future Development:</h2>
            <p className="font-bold">Mootify will evolve into a custom PCB:</p>
            <ul className="ml-4">
              <li>● More RAM and ROM</li>
              <li>● Optimized power circuits</li>
              <li>● High-resolution screen (optional upgrade)</li>
              <li>● USB-C charging</li>
              <li>● New processor (RISC-V or ESP32-C6) via EasyEDA design</li>
            </ul>
            <p className="font-bold">App upgrades may include:</p>
            <ul className="ml-4">
              <li>● More emotion styles</li>
              <li>● Chat history log</li>
              <li>● Haptic feedback</li>
            </ul>
            <h2 className="font-semibold text-lg mt-2">Marketability:</h2>
            <p>Mootify is uniquely positioned in the wearable tech space, combining emotional expression, simplicity, and creativity. Its market appeal includes:</p>
            <ul className="ml-4">
              <li>● Emotional Utility in a Minimalist Form: Unlike chat apps, Mootify doesn't demand your attention, it offers just the right emotional nudge.</li>
              <li>● Highly Giftable: Its playful and personal nature makes it perfect for holiday, anniversary, or friendship day gifts.</li>
              <li>● DIY & Maker Communities: Open-source expandability and the ESP32 foundation make it attractive to tinkerers and hardware hobbyists.</li>
              <li>● Subscription-Free Ecosystem: It's fully functional without requiring any subscription, a huge bonus over competitors.</li>
              <li>● Strong Branding Potential: The name “Mootify,” the mooty concept, and emoji branding can evolve into a recognizable product family (bracelets, rings, desk modules, etc.).</li>
              <li>● Expansion Path: Potential future products could include emotion rings, haptic brooches, or mood lamps, all powered by the same backend ecosystem.</li>
            </ul>
          </div>
        </div>
        <div className="flex gap-2 flex-col w-1/3 h-full overflow-y-auto overflow-hidden">
          <ZoomImage src="Projects/Project10/ImgR1.png" alt="" className="rounded-box aspect-square h-[90%] object-contain" />
          <ZoomImage src="Projects/Project10/ImgR2.jpg" alt="" className="rounded-box aspect-square h-[90%] object-contain" />
          <ZoomImage src="Projects/Project10/ImgR3.png" alt="" className="rounded-box aspect-square h-[90%] object-contain" />
        </div>
      </section>
    ),
  },
  {
    title: "NeurexAI",
    subTitle: "NeurexAI Signal Engine",
    img: "Projects/Project11/Project.png",
    modalContent: (
      <section className="flex gap-4 overflow-y-hidden h-[80vh]">
        <div className="flex flex-col w-2/3 h-full overflow-hidden">
          <h1 className="font-bold text-xl">NeurexAI – Project Documentation</h1>
          <div className="divider mt-0 mb-0" />
          <div className="overflow-y-auto h-full pr-2">
            <h2 className="font-semibold text-lg">Overview:</h2>
            <p className="py-2">
              NeurexAI was a next-generation AI-based trading indicator built for TradingView. The product provided buy (long) and sell (short) signals using a system of three custom AI algorithms. The platform aimed to simplify technical analysis
              and help traders make better decisions through intelligent automation.
            </p>
            <h2 className="font-semibold text-lg">Technology:</h2>
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th></th>
                    <th>Component</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <td>Frontend</td>
                    <td>Built with React and styled using TailwindCSS for a fast, responsive interface</td>
                  </tr>
                  <tr>
                    <th>2</th>
                    <td>Backend</td>
                    <td>Express.js-based API handling routing, auth, payment logic, and TradingView integration</td>
                  </tr>
                  <tr>
                    <th>3</th>
                    <td>Database</td>
                    <td>MongoDB for storing users, subscriptions, and AI signal logs</td>
                  </tr>
                  <tr>
                    <th>4</th>
                    <td>Payments</td>
                    <td>Stripe integration for monthly subscription and access management</td>
                  </tr>
                  <tr>
                    <th>5</th>
                    <td>External Integration</td>
                    <td>TradingView API for managing user script access and syncing active signals</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="font-semibold text-lg mt-2">AI System Description</h2>
            <p>NeurexAI operated with three layered AI algorithms:</p>
            <ul>
              <li> ●Trend AI — Detected directional trends based on candle pattern behavior and volume response</li>
              <li> ●Filter AI — Smoothed volatility and reduced false signals using statistical filtering</li>
              <li> ●Consensus AI — Compared outputs from the other two and validated signal confidence</li>
            </ul>
            <p>The system outputted a clear LONG or SHORT signal to the user via a private TradingView script.</p>

            <h2 className="font-bold text-lg mt-2">Business & Revenue</h2>
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th></th>
                    <th>Aspect</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <td>Revenue Model</td>
                    <td>SaaS subscriptions charged monthly via Stripe</td>
                  </tr>
                  <tr>
                    <th>2</th>
                    <td>Licensing</td>
                    <td>Users gained TradingView access only after successful Stripe checkout</td>
                  </tr>
                  <tr>
                    <th>3</th>
                    <td>User Roles</td>
                    <td>Synced MongoDB account with TradingView username for backend logic</td>
                  </tr>
                  <tr>
                    <th>4</th>
                    <td>Uptime</td>
                    <td>Automated system with very low operational cost and near-zero manual maintenance</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="font-bold text-lg mt-2">Marketing Strategy</h2>
            <p>NeurexAI grew through lightweight but effective marketing efforts:</p>
            <ul>
              <li>● Reddit outreach on subreddits like r/algotrading and r/cryptocurrency</li>
              <li>● SEO-optimized landing page targeting "AI TradingView indicator" keywords</li>
              <li>● Community-first approach with Discord group support</li>
              <li>● Design-first branding using a dark, minimal, futuristic layout</li>
              <li>● Trial offers and discount codes to increase early user conversion</li>
            </ul>
            <h2 className="font-bold text-lg mt-2">Outcome</h2>
            <p>
              ● NeurexAI was used in live market conditions for over a year with paying users. It proved viable as a self-sustained full-stack product. The blend of AI signal generation, TradingView script delivery, and Stripe-backed user management
              made it a lean and highly automated system.
            </p>
          </div>
        </div>
        <div className="flex gap-2 flex-col w-1/3 h-full overflow-y-auto overflow-hidden">
          <ZoomImage src="Projects/Project11/ImgR1.png" alt="" className="rounded-box aspect-square h-[90%] object-contain" />
        </div>
      </section>
    ),
  },
  {
    title: "AI Trading Tool",
    subTitle: "AI Signal Terminal",
    img: "Projects/Project12/Project.png",
    modalContent: (
      <section className="flex gap-4 overflow-y-hidden h-[80vh]">
        <div className="flex flex-col w-2/3 h-full overflow-hidden">
          <h1 className="font-bold text-xl">AI Trading Tool – Project Documentation</h1>
          <div className="divider mt-0 mb-0" />
          <div className="overflow-y-auto h-full pr-2">
            <h2 className="font-semibold text-lg">Overview:</h2>
            <p className="py-2">
              This AI-powered trading desktop application is designed to generate trade signals in real market conditions using a blend of machine learning models and signal filtering techniques. Built as a standalone tool using Electron, React, and
              TailwindCSS, it allows the user to choose a symbol and timeframe, deploy an AI model, and view its output directly on a plotted chart.
            </p>
            <h2 className="font-semibold text-lg">Technology:</h2>
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th></th>
                    <th>Component</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <td>Frontend</td>
                    <td>Built with React and TailwindCSS to deliver a clean, responsive desktop UI</td>
                  </tr>
                  <tr>
                    <th>2</th>
                    <td>Application Framework</td>
                    <td>Electron for building a cross-platform desktop environment</td>
                  </tr>
                  <tr>
                    <th>3</th>
                    <td>Charting Interface</td>
                    <td>Interactive graph output showing real-time AI signal points on market price data</td>
                  </tr>
                  <tr>
                    <th>4</th>
                    <td>Signal Control</td>
                    <td>Users can select a symbol and timeframe, then deploy chosen AI algorithms</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="font-semibold text-lg mt-2">AI Algorithm Architecture:</h2>
            <p>This tool uses a multi-algorithm approach combining traditional machine learning with advanced mathematical filtering.</p>
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th></th>
                    <th>Model</th>
                    <th>Function</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <td>KNN with Lorentzian Distance</td>
                    <td>Instance-based classifier using Lorentzian metric for proximity</td>
                  </tr>
                  <tr>
                    <th>2</th>
                    <td>Multi-Perceptron</td>
                    <td>Simple neural network for pattern classification and prediction</td>
                  </tr>
                  <tr>
                    <th>3</th>
                    <td>Q-learning (Reinforcement)</td>
                    <td>Decision-making model for dynamic market response learning</td>
                  </tr>
                  <tr>
                    <th>4</th>
                    <td>Manhattan Distance Voting</td>
                    <td>Lightweight distance-based ensemble voting mechanism</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h2 className="font-bold text-lg mt-2">Filtering Pipeline:</h2>
            <p>Multiple filtering layers are applied to clean and refine signal data before plotting.</p>
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th></th>
                    <th>Filter</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <td>EMA Filter</td>
                    <td>Smooths price noise using Exponential Moving Average</td>
                  </tr>
                  <tr>
                    <th>2</th>
                    <td>Kalman Filter</td>
                    <td>State estimation for predicting future market points</td>
                  </tr>
                  <tr>
                    <th>3</th>
                    <td>Noise Isolation Filter</td>
                    <td>Removes erratic signal spikes from low-volume noise</td>
                  </tr>
                  <tr>
                    <th>4</th>
                    <td>Momentum Thresholding</td>
                    <td>Limits false signals in flat markets based on volatility</td>
                  </tr>
                  <tr>
                    <th>5</th>
                    <td>Adaptive Slope Filter</td>
                    <td>Filters only when sufficient directional momentum is detected</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="font-bold text-lg mt-2">User Features:</h2>
            <ul>
              <li>● Select trading symbol and timeframe from dropdowns</li>
              <li>● View chart with green (buy) and red (sell) signal dots over price line</li>
              <li>● Deploy models with a single button</li>
              <li>● Browse signal history (planned feature)</li>
            </ul>
            <h2 className="font-bold text-lg mt-2">Technical Stack:</h2>
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th></th>
                    <th>Technology</th>
                    <th>Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <td>Electron</td>
                    <td>Cross-platform desktop environment and app shell</td>
                  </tr>
                  <tr>
                    <th>2</th>
                    <td>React</td>
                    <td>UI framework for dynamic component-based structure</td>
                  </tr>
                  <tr>
                    <th>3</th>
                    <td>TailwindCSS</td>
                    <td>Utility-first styling for responsive and dark-themed layout</td>
                  </tr>
                  <tr>
                    <th>4</th>
                    <td>Chart.js</td>
                    <td>Visual plotting of price data and signal markers</td>
                  </tr>
                  <tr>
                    <th>5</th>
                    <td>Node.js (main process)</td>
                    <td>Handles local logic file access and background tasks</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="flex gap-2 flex-col w-1/3 h-full overflow-y-auto overflow-hidden">
          <ZoomImage src="Projects/Project12/ImgR1.png" alt="" className="rounded-box aspect-square h-[90%] object-contain" />
          <ZoomImage src="Projects/Project12/ImgR2.png" alt="" className="rounded-box aspect-square h-[90%] object-contain" />
        </div>
      </section>
    ),
  },
];
