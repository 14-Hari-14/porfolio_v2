'use client';

import { useEffect, useRef, useState } from "react";
import { SectionHeader } from "./SectionHeader";
import { InteractiveHoverButtonModern } from "./ui/interactive-hover-button-modern";

const EMAIL = "harishankersnair26@gmail.com";
const CHANNEL = "// primary_channel";
const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/14-Hari-14",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/harishankersnair/",
  },
  {
    label: "CV.pdf",
    href: "https://drive.google.com/file/d/1uzveb7usmbnUjL8Ji6sMh0OmpZJPLli5/view",
  },
];

export function Contact() {
  const hoverSound = useRef<HTMLAudioElement | null>(null);
  const clickSound = useRef<HTMLAudioElement | null>(null);
  const emailSound = useRef<HTMLAudioElement | null>(null);
  const copyResetTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      hoverSound.current = new Audio(
        "/audios/interactitvebutton.mp3"
      );

      clickSound.current = new Audio(
        "/audios/navbarclick.wav"
      );

      emailSound.current = new Audio(
        "/audios/emailcopied.wav"
      );

      [
        hoverSound.current,
        clickSound.current,
        emailSound.current,
      ].forEach((audio) => {
        audio?.load();
      });
    }

    return () => {
      if (copyResetTimeout.current) {
        clearTimeout(copyResetTimeout.current);
      }

      [
        hoverSound.current,
        clickSound.current,
        emailSound.current,
      ].forEach((audio) => {
        if (audio) {
          audio.pause();
          audio.src = "";
        }
      });
    };
  }, []);

  const playHoverSound = () => {
    if (hoverSound.current) {
      hoverSound.current.currentTime = 0;
      hoverSound.current.play().catch(console.warn);
    }
  };

  const playClickSound = () => {
    if (clickSound.current) {
      clickSound.current.currentTime = 0;
      clickSound.current.play().catch(console.warn);
    }
  };

  const copyEmail = async (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();

    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);

      if (copyResetTimeout.current) {
        clearTimeout(copyResetTimeout.current);
      }

      copyResetTimeout.current = setTimeout(() => {
        setCopied(false);
      }, 2000);

      if (emailSound.current) {
        emailSound.current.currentTime = 0;
        emailSound.current.play().catch(console.warn);
      }
    } catch (err) {
      console.warn("Failed to copy email", err);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-border py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          index="// 05"
          title="CONTACT ME"
          subtitle="open_a_channel"
        />

        <div className="max-w-3xl space-y-6">
          <p className="text-base sm:text-lg leading-relaxed text-muted-foreground md:text-xl">
            Want to <span className="text-neon">reach out </span>
            to me?
            <br />
            The fastest channel is{" "}
            <span className="text-neon-2">
              email
            </span>.
          </p>

          {/* EMAIL BUTTON */}
          <InteractiveHoverButtonModern
            href="#"
            onClick={(e) => {
              playClickSound();
              copyEmail(e);
            }}
            className="
              group corner-frame
              flex w-full sm:max-w-fit flex-col
              items-start gap-1
              px-5 py-5
              text-left
              transition-all duration-300

              border-neutral-900
              bg-neutral-200/90

              hover:border-orange-500

              dark:border-[var(--neon-2)]
              dark:bg-background
              dark:hover:border-blue-200
            "
          >
            {/* Label */}
            <span
              className="
                block text-[10px]
                uppercase tracking-[0.3em]
                transition-colors duration-300

                text-neutral-700
                group-hover:text-neutral-200

                dark:text-[var(--neon-2)]
                dark:group-hover:text-[var(--foreground)]
              "
            >
              {copied ? "Alright the email is" : CHANNEL}
            </span>

            {/* Email */}
            <span
              className="
                block text-xl md:text-2xl
                font-display font-bold
                transition-colors duration-300

                text-neutral-900
                group-hover:text-orange-400

                dark:text-[var(--neon-2)]
                dark:group-hover:text-[var(--background)]
              "
            >
              {copied ? "Copied!!" : EMAIL}
            </span>
          </InteractiveHoverButtonModern>

          {/* SOCIAL BUTTONS */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 pt-4 text-[11px] uppercase tracking-[0.25em]">
            {SOCIAL_LINKS.map((link) => (
              <InteractiveHoverButtonModern
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={playHoverSound}
                onClick={playClickSound}
                className="
                  group corner-frame
                  w-full sm:w-auto
                  px-4 py-2
                  transition-all duration-300

                  border-neutral-900
                  bg-neutral-200/90
                  text-neutral-900

                  hover:border-orange-500
                  hover:text-orange-400

                  dark:border-[var(--neon-2)]
                  dark:bg-background
                  dark:text-[var(--neon-2)]

                  dark:hover:border-blue-200
                  dark:hover:text-[var(--grid)]
                "
              >
                {link.label}
              </InteractiveHoverButtonModern>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}