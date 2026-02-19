import {
  Eye,
  HeartPulse,
  TrendingUp,
  Hand,
  Music,
  Mic,
  School,
  Stethoscope,
  GraduationCap,
  Users,
  Layers,
  type LucideIcon,
} from "lucide-react";

/* ─── Navigation ─── */
export const NAV_LINKS = [
  { label: "Problem", href: "#problem" },
  { label: "Solution", href: "#solution" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Modules", href: "#modules" },
  { label: "FAQ", href: "#faq" },
] as const;

/* ─── Social Proof ─── */
export const PARTNER_LOGOS = [
  "Clinic Partner",
  "School Partner",
  "Community Partner",
  "Research Partner",
] as const;

export const STATS = [
  { value: "12,400+", label: "Sessions Tracked" },
  { value: "84,000+", label: "Signals Captured" },
  { value: "2,600+", label: "Reports Generated" },
] as const;

/* ─── Problem Cards ─── */
export interface ProblemCard {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const PROBLEM_CARDS: ProblemCard[] = [
  {
    title: "Schools Lack Developmental Tools",
    description:
      "Educators want to help but have no structured, evidence-informed tools to monitor developmental signals in the classroom.",
    icon: School,
  },
  {
    title: "Parents Don't Know Early Signs",
    description:
      "Many families miss early behavioral patterns because the signs are subtle and guidance is hard to access outside a clinic.",
    icon: HeartPulse,
  },
  {
    title: "Doctors Don't See Daily Behavior",
    description:
      "Clinical visits are snapshots. The patterns that matter most — at home, at school, during play — are invisible to practitioners.",
    icon: Stethoscope,
  },
  {
    title: "Early Support Opportunities Are Missed",
    description:
      "Without continuous monitoring, the critical window for early intervention often closes before families even realize it opened.",
    icon: TrendingUp,
  },
  {
    title: "Support Is Fragmented",
    description:
      "Care is split across home, school, and clinic with no shared view — making coordinated, consistent support nearly impossible.",
    icon: Layers,
  },
];

/* ─── Solution Points ─── */
export const SOLUTION_POINTS = [
  "Engaging game-based activities that children actually enjoy",
  "Automatic behavioral signal capture during gameplay",
  "AI-powered pattern analysis translating play into actionable insights",
  "Continuous progress tracking across home, school, and clinic",
  "Evidence-informed guidance and recommended next activities",
] as const;

/* ─── Solution Captured Signals ─── */
export const CAPTURED_SIGNALS = [
  { label: "Eye Contact", value: "72%", trend: "up" },
  { label: "Gestures", value: "58%", trend: "up" },
  { label: "Attention", value: "65%", trend: "stable" },
  { label: "Motor Coordination", value: "81%", trend: "up" },
  { label: "Speech Clarity", value: "44%", trend: "up" },
] as const;

/* ─── How It Works ─── */
export interface TimelineStep {
  step: number;
  title: string;
  description: string;
}

export const TIMELINE_STEPS: TimelineStep[] = [
  {
    step: 1,
    title: "Child Plays Short Guided Games",
    description:
      "Fun, age-appropriate game modules designed by child development specialists. Each session takes just 5–10 minutes — no clinical setup required.",
  },
  {
    step: 2,
    title: "Signals Are Captured from Interaction",
    description:
      "As the child plays, Neuro Nurture captures behavioral signals — eye contact, gestures, attention patterns, motor coordination, and speech — automatically and unobtrusively.",
  },
  {
    step: 3,
    title: "AI Translates Patterns into Insights",
    description:
      "Our AI engine analyzes captured signals over time, identifying meaningful trends, flagging areas of concern, and generating plain-language summaries for parents and clinicians.",
  },
  {
    step: 4,
    title: "Share Reports for Guidance",
    description:
      "Export clear, visual progress reports to share with doctors, therapists, or educators. Get recommended next activities tailored to the child's development trajectory.",
  },
];

/* ─── Core Modules ─── */
export interface CoreModule {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const CORE_MODULES: CoreModule[] = [
  {
    title: "Gesture Mimic",
    description:
      "Supports imitation & reciprocity through interactive gesture-matching activities that build social communication foundations.",
    icon: Hand,
  },
  {
    title: "Mirror Posture",
    description:
      "Supports emotion recognition by guiding children through expressive body language and facial mirroring exercises.",
    icon: Users,
  },
  {
    title: "Dance Doodle",
    description:
      "Supports motor coordination with rhythm-based drawing and movement activities that develop fine and gross motor skills.",
    icon: Music,
  },
  {
    title: "Gaze Balloon Pop",
    description:
      "Supports attention & eye contact through engaging visual tracking games that reinforce sustained focus and gaze direction.",
    icon: Eye,
  },
  {
    title: "Repeat With Me",
    description:
      "Supports speech clarity & imitation with audio-guided repetition activities designed to strengthen vocalization and articulation.",
    icon: Mic,
  },
];

/* ─── Role-Based Benefits ─── */
export interface RoleBenefit {
  role: string;
  icon: LucideIcon;
  benefits: string[];
}

export const ROLE_BENEFITS: RoleBenefit[] = [
  {
    role: "For Parents",
    icon: HeartPulse,
    benefits: [
      "Clear, easy-to-understand guidance",
      "Early warning signals explained in plain language",
      "Visual progress insights without medical jargon",
      "Confidence to support their child's development",
    ],
  },
  {
    role: "For Doctors",
    icon: Stethoscope,
    benefits: [
      "Multi-session behavioral patterns beyond the clinic",
      "Context from daily life to complement clinical assessments",
      "Remote monitoring support between appointments",
      "Data-driven conversation starters with families",
    ],
  },
  {
    role: "For Schools",
    icon: GraduationCap,
    benefits: [
      "Interactive, classroom-friendly support tool",
      "Developmental tracking over the school year",
      "Educator-friendly insights — no clinical training needed",
      "Structured activities that fit into existing routines",
    ],
  },
];

/* ─── Why Different ─── */
export interface WhyDifferentItem {
  label: string;
  detail: string;
}

export const WHY_DIFFERENT: WhyDifferentItem[] = [
  {
    label: "Engaging Games",
    detail:
      "Support feels like play. Children stay motivated through fun, age-appropriate activities designed with developmental science.",
  },
  {
    label: "Behavioral Signal Capture",
    detail:
      "Automatically captures attention, gestures, speech, and motor signals during gameplay — no manual observation needed.",
  },
  {
    label: "AI Explanation Layer",
    detail:
      "Transforms raw behavioral data into plain-language insights that parents and educators can understand and act on.",
  },
  {
    label: "Progress Tracking",
    detail:
      "Longitudinal tracking across sessions reveals patterns and trends that point-in-time assessments always miss.",
  },
  {
    label: "Shared Reporting",
    detail:
      "One report, shared across home, school, and clinic — keeping everyone aligned on the child's development journey.",
  },
  {
    label: "Continuous Support Loop",
    detail:
      "Every session recommends the next activity, creating an ongoing cycle of play, insight, and guided developmental support.",
  },
];

/* ─── FAQ ─── */
export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What is Neuro Nurture?",
    answer:
      "Neuro Nurture is an AI-powered neurological care platform that unifies signal capture, cognitive analytics, and care coordination into a single system. It helps clinical teams detect conditions earlier, monitor progression continuously, and make data-driven treatment decisions.",
  },
  {
    question: "Who is Neuro Nurture designed for?",
    answer:
      "Neuro Nurture serves clinical neurologists, neuropsychologists, research teams, and healthcare administrators. Each role gets purpose-built views and workflows tailored to their specific needs.",
  },
  {
    question: "How does Neuro Nurture handle patient data privacy?",
    answer:
      "We implement privacy by design with end-to-end encryption, differential privacy techniques, granular patient consent management, and full compliance with HIPAA, GDPR, and emerging neuro-specific regulations. Patients always retain ownership and control over their data.",
  },
  {
    question: "Can Neuro Nurture integrate with our existing EHR?",
    answer:
      "Yes. Neuro Nurture provides FHIR-compliant APIs and supports HL7 messaging, with native integrations for Epic, Cerner, and MEDITECH. Our onboarding team can map to your existing infrastructure within 24 hours.",
  },
  {
    question: "What does the Early Access program include?",
    answer:
      "Early Access members receive priority platform access, dedicated onboarding support, direct input into our product roadmap, and preferential pricing when we launch generally. There is no cost or obligation during the pilot phase.",
  },
  {
    question: "Is there a commitment or cost for Early Access?",
    answer:
      "No. The Early Access program is free with no contractual obligation. We simply ask for your feedback to help us refine the platform before general availability.",
  },
  {
    question: "When will Neuro Nurture be generally available?",
    answer:
      "We are targeting general availability in late 2026. Early Access members will be the first to transition, with continuous access throughout the rollout.",
  },
];

/* ─── Privacy Toggles ─── */
export const PRIVACY_TOGGLES = [
  { label: "End-to-End Encryption", defaultOn: true },
  { label: "Anonymous Analytics Mode", defaultOn: false },
  { label: "Export My Data", defaultOn: true },
  { label: "Delete All Data on Request", defaultOn: true },
] as const;
