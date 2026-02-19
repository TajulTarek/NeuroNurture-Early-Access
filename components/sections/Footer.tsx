import { NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 text-foreground font-semibold text-lg tracking-tight mb-4">
              <span className="w-2 h-2 rounded-full bg-primary shadow-glow-sm" />
              Neuro Nurture
            </div>
            <p className="text-sm text-muted leading-relaxed max-w-sm">
              The AI-powered platform unifying neurological signal capture,
              analytics, and care coordination for the next generation of
              brain health.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-muted mb-4 font-medium">
              Navigate
            </p>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#early-access"
                  className="text-sm text-primary hover:text-primary-dark transition-colors duration-200"
                >
                  Early Access
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-muted mb-4 font-medium">
              Legal
            </p>
            <ul className="space-y-2.5">
              <li>
                <span className="text-sm text-muted/60 cursor-default">
                  Privacy Policy
                </span>
              </li>
              <li>
                <span className="text-sm text-muted/60 cursor-default">
                  Terms of Service
                </span>
              </li>
              <li>
                <span className="text-sm text-muted/60 cursor-default">
                  HIPAA Compliance
                </span>
              </li>
              <li>
                <span className="text-sm text-muted/60 cursor-default">
                  Security
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted/60">
            &copy; {new Date().getFullYear()} Neuro Nurture. All rights
            reserved.
          </p>
          <p className="text-xs text-muted/40">
            Built with ❤️ by{" "}
            <span className="text-muted/70 font-medium">Tajul Islam Tarek</span>{" "}
            &amp;{" "}
            <span className="text-muted/70 font-medium">Abhishek Dash</span>{" "}
            &mdash; CSE, SUST
          </p>
        </div>
      </div>
    </footer>
  );
}
