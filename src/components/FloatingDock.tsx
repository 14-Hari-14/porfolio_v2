import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

type LinkType = {
  title: string;
  icon: React.ReactElement<{ className?: string }>;
  href: string;
};

const links: LinkType[] = [
  { title: "LinkedIn", icon: <Linkedin />, href: "https://www.linkedin.com/in/harishankersnair/" },
  { title: "GitHub", icon: <Github />, href: "https://github.com/14-Hari-14" },
];

export function FloatingDock() {
  const [visible] = useState(true);
  const mouseY = useMotionValue(Infinity);
  const dockRef = useRef<HTMLDivElement>(null);
  const clickSound = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const bounds = dockRef.current?.getBoundingClientRect();
      if (!bounds) {
        mouseY.set(Infinity);
        return;
      }

      const nearDock =
        e.clientX >= bounds.left - 32 &&
        e.clientX <= bounds.right + 32 &&
        e.clientY >= bounds.top - 32 &&
        e.clientY <= bounds.bottom + 32;

      mouseY.set(nearDock ? e.clientY : Infinity);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseY]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      clickSound.current = new Audio("/audios/navbarclick.wav");
      clickSound.current.load();
    }

    return () => {
      if (clickSound.current) {
        clickSound.current.pause();
        clickSound.current.src = "";
      }
    };
  }, []);

  const playClickSound = () => {
    if (clickSound.current) {
      clickSound.current.currentTime = 0;
      clickSound.current.play().catch(console.warn);
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 40, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="fixed right-6 top-1/2 z-50 hidden lg:flex -translate-y-1/2 pointer-events-none"
        >
          <div
            ref={dockRef}
            className="
                pointer-events-auto
                flex flex-col items-center gap-6
                px-4 py-6
                border border-orange-100
                bg-neutral-800
                backdrop-blur-md

                dark:border-blue-200
                dark:bg-[var(--theme-background)]
            "
          >
            {links.map((el) => (
              <IconContainer
                key={el.title}
                el={el}
                mouseY={mouseY}
                onClick={playClickSound}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function IconContainer({
  el,
  mouseY,
  onClick,
}: {
  el: LinkType;
  mouseY: MotionValue<number>;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [hovered, setHovered] = useState(false);

  const distance = useTransform(mouseY, (val: number) => {
    if (!Number.isFinite(val)) {
      return 9999;
    }

    const bounds = ref.current?.getBoundingClientRect() ?? { y: 0, height: 0 };
    return val - bounds.y - bounds.height / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const widthIconTransform = useTransform(distance, [-150, 0, 150], [35, 70, 35]);
  const heightIconTransform = useTransform(distance, [-150, 0, 150], [35, 70, 35]);

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const widthIcon = useSpring(widthIconTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const heightIcon = useSpring(heightIconTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <a
      ref={ref}
      href={el.href}
      target={el.href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      aria-label={el.title}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-center justify-center"
    >
      <motion.div
        style={{ width, height }}
          className="relative flex items-center justify-center border border-orange-100 bg-[var(--theme-foreground)] dark:border-blue-200 dark:bg-[var(--theme-background)]"
      >
        <AnimatePresence>
          {hovered && (
            <motion.span
              initial={{ opacity: 0, x: -10, y: "-50%" }}
              animate={{ opacity: 1, x: -60, y: "-50%" }}
              exit={{ opacity: 0, x: 2, y: "-50%" }}
              transition={{ duration: 0.2 }}
              className="absolute right-[calc(100%+20px)] top-1/2 w-32 whitespace-nowrap border border-orange-100 bg-neutral-700 px-3 py-1.5 text-center text-[10px] uppercase tracking-[0.25em] text-white dark:border-blue-200 dark:bg-blue-700 dark:text-white"
            >
              {el.title}
            </motion.span>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          {React.cloneElement(el.icon, {
            className: `h-full w-full transition-colors duration-300 ${
              hovered
                ? "text-orange-400 dark:text-purple-400"
                : "text-white"
            }`,
          })}
        </motion.div>
      </motion.div>
    </a>
  );
}
