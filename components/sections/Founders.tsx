"use client";

import Image from "next/image";
import GlassCard from "@/components/ui/GlassCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionWrapper from "@/components/ui/SectionWrapper";

/* ─── Social Icon SVGs ─── */
function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden>
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}

/* ─── Founder Data ─── */
const FOUNDERS = [
  {
    name: "Tajul Islam Tarek",
    role: "Co-Founder & Developer",
    department: "CSE, SUST",
    initials: "TT",
    gradient: "from-primary to-sky-400",
    photo: "/founders/tarek.jpg",
    socials: {
      facebook: "https://www.facebook.com/atoarkazwaw",
      linkedin: "https://www.linkedin.com/in/tajul-islam-tarek-88962b22a/",
      email: "mailto:tarekahmad484@gmail.com",
    },
  },
  {
    name: "Abhishek Dash",
    role: "Co-Founder & Developer",
    department: "CSE, SUST",
    initials: "AD",
    gradient: "from-sky-400 to-primary",
    photo: "/founders/abhishek.jpg",
    socials: {
      facebook: "https://www.facebook.com/SherlockedPotter",
      linkedin: "https://www.linkedin.com/in/abhishek-dash-60762322a/",
      email: "mailto:abhishek.cse4@gmail.com",
    },
  },
];

export default function Founders() {
  return (
    <SectionWrapper id="founders" narrow>
      <ScrollReveal>
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-3">
            The Team Behind Neuro Nurture
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built by <span className="text-gradient">Passionate Minds</span>
          </h2>
          <p className="text-muted max-w-lg mx-auto leading-relaxed">
            Two engineers from Shahjalal University of Science &amp; Technology,
            driven to reshape neurological care through technology.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
        {FOUNDERS.map((founder, i) => (
          <ScrollReveal key={founder.name} delay={i * 0.15}>
            <GlassCard className="text-center !p-10" glow>
              {/* Photo / Avatar */}
              <div className="relative w-24 h-24 mx-auto mb-5">
                <div
                  className={`absolute -inset-1 rounded-full bg-gradient-to-br ${founder.gradient} opacity-60 blur-sm`}
                />
                <div className="relative w-24 h-24 rounded-full overflow-hidden ring-2 ring-primary/30 shadow-glow">
                  <Image
                    src={founder.photo}
                    alt={founder.name}
                    fill
                    className="object-cover"
                    sizes="96px"
                    onError={(e) => {
                      // Hide broken image, show initials fallback
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                      const fallback = e.currentTarget.nextElementSibling;
                      if (fallback) (fallback as HTMLElement).style.display = "flex";
                    }}
                  />
                  {/* Initials fallback (hidden when photo loads) */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${founder.gradient} items-center justify-center hidden`}
                  >
                    <span className="text-2xl font-bold text-background select-none">
                      {founder.initials}
                    </span>
                  </div>
                </div>
              </div>

              {/* Info */}
              <h3 className="text-xl font-semibold text-foreground mb-1">
                {founder.name}
              </h3>
              <p className="text-sm text-primary font-medium mb-1">
                {founder.role}
              </p>
              <p className="text-xs text-muted tracking-wide mb-5">
                {founder.department}
              </p>

              {/* Social Links */}
              <div className="flex items-center justify-center gap-3">
                <a
                  href={founder.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${founder.name} on Facebook`}
                  className="w-9 h-9 rounded-full glass flex items-center justify-center text-muted hover:text-primary hover:shadow-glow-sm transition-all duration-200"
                >
                  <FacebookIcon />
                </a>
                <a
                  href={founder.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${founder.name} on LinkedIn`}
                  className="w-9 h-9 rounded-full glass flex items-center justify-center text-muted hover:text-primary hover:shadow-glow-sm transition-all duration-200"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href={founder.socials.email}
                  aria-label={`Email ${founder.name}`}
                  className="w-9 h-9 rounded-full glass flex items-center justify-center text-muted hover:text-primary hover:shadow-glow-sm transition-all duration-200"
                >
                  <MailIcon />
                </a>
              </div>
            </GlassCard>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
