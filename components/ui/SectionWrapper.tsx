import { type ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  narrow?: boolean;
}

export default function SectionWrapper({
  children,
  id,
  className = "",
  narrow = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`py-section-sm lg:py-section ${narrow ? "max-w-4xl" : "max-w-7xl"} mx-auto px-6 ${className}`}
    >
      {children}
    </section>
  );
}
