import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  AnimatePresence,
  type MotionValue,
} from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type LinkType = {
  title: string;
  icon: React.ReactNode;
  href: string;
};

const links: LinkType[] = [
  { title: "LinkedIn", icon: <Linkedin />, href: "https://www.linkedin.com/" },
  { title: "GitHub", icon: <Github />, href: "https://github.com/" },
  { title: "Email", icon: <Mail />, href: "mailto:nhari142004@gmail.com" },
];

export function FloatingDock() {
  const [visible, setVisible] = useState(false);
  const mouseX = useMotionValue(Infinity);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="fixed bottom-6 inset-x-0 z-50 flex justify-center pointer-events-none"
        >
          <div
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            className="pointer-events-auto corner-frame flex items-end gap-3 h-16 px-4 bg-background/80 backdrop-blur-md border border-neon"
          >
            {links.map((el) => (
              <IconContainer key={el.title} el={el} mouseX={mouseX} />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function IconContainer({
  el,
  mouseX,
}: {
  el: LinkType;
  mouseX: MotionValue<number>;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [hovered, setHovered] = useState(false);

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthT = useTransform(distance, [-120, 0, 120], [40, 72, 40]);
  const heightT = useTransform(distance, [-120, 0, 120], [40, 72, 40]);
  const iconT = useTransform(distance, [-120, 0, 120], [20, 36, 20]);

  const width = useSpring(widthT, { mass: 0.1, stiffness: 150, damping: 12 });
  const height = useSpring(heightT, { mass: 0.1, stiffness: 150, damping: 12 });
  const iconSize = useSpring(iconT, {
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
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex items-center justify-center"
    >
      <motion.div
        style={{ width, height }}
        className="flex items-center justify-center border border-neon-2/60 bg-surface/60 text-neon hover:text-neon-2 transition-colors"
      >
        <AnimatePresence>
          {hovered && (
            <motion.span
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              className="absolute -top-9 px-2 py-0.5 text-[10px] uppercase tracking-[0.25em] border border-neon text-neon bg-background whitespace-nowrap"
            >
              {el.title}
            </motion.span>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: iconSize, height: iconSize }}
          className="flex items-center justify-center [&>svg]:w-full [&>svg]:h-full"
        >
          {el.icon}
        </motion.div>
      </motion.div>
    </a>
  );
}
