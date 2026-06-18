import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticleBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async () => {
    // optional
  };

  if (!init) {
    return null;
  }

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={{
        background: { color: { value: "transparent" } },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: { enable: true, mode: "push" },
            onHover: { enable: true, mode: "grab" },
          },
          modes: {
            push: { quantity: 4 },
            grab: { distance: 180, links: { opacity: 0.6 } },
          },
        },
        particles: {
          color: { value: "#00D4FF" },
          links: {
            enable: true,
            color: "#00D4FF",
            distance: 150,
            opacity: 0.35,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1.8,
            direction: "none",
            outModes: { default: "out" },
            random: false,
            straight: false,
          },
          number: {
            density: { enable: true, width: 800, height: 800 },
            value: 80,
          },
          opacity: {
            value: { min: 0.1, max: 0.6 },
            animation: { enable: true, speed: 1, sync: false }
          },
          shape: { type: "circle" },
          size: {
            value: { min: 1, max: 4 },
          },
        },
        detectRetina: true,
      }}
      className="fixed inset-0 w-full h-full -z-10"
    />
  );
};

export default ParticleBackground;
