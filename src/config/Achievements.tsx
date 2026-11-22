export interface Achievement {
  title: string;
  organization: string;
  date: string;
  href?: string;
  icon?: 'trophy' | 'medal' | 'star';
}

export const achievements: Achievement[] = [
  {
    title: 'Obtained SSoC Certificate for open source contributions',
    organization: 'Summer of Code (SSoC)',
    date: '10 Oct, 2025',
    href: '/blog/frontend-part-1.png',
    icon: 'trophy',
  },
  {
    title:
      'Launched Seenlense, a live AI visibility SaaS with Paddle subscriptions, built solo, scanning 5 AI engines and growing reach with 45+ SEO pages',
    organization: 'Seenlense',
    date: '2026',
    href: 'https://seenlense.com',
    icon: 'trophy',
  },
  {
    title:
      'Led BitHive Technology as CTO, successfully delivering 10+ client projects (websites, automation tools, full-stack apps) and merging 30+ PRs',
    organization: 'BitHive Technology',
    date: '2024 - 2025',
    href: 'https://www.bithive.in/',
    icon: 'medal',
  },
  {
    title:
      "Contributed to open-source projects including UCSC's ENTS sensor platform, tscircuit and JSON Schema's interactive tour",
    organization: 'Open Source',
    date: 'Ongoing',
    href: 'https://github.com/Saurabhsing21',
    icon: 'star',
  },
];

/** Legacy certificate gallery data (used on certificates page if needed) */
export const certificates = [
  {
    file: '/blog/frontend-part-1.png',
    title: 'SSoC Certificate',
    issuer: 'Summer of Code (SSoC)',
    date: '2025-10-10',
  },
  {
    file: '/blog/how-to-be-me.png',
    title: 'Example Certificate 1',
    issuer: 'Example Issuer',
    date: '2024-01-01',
  },
  {
    file: '/blog/frontend-part-1.png',
    title: 'Example Certificate 2',
    issuer: 'Example Issuer',
    date: '2023-08-01',
  },
  {
    file: '/blog/how-to-be-me.png',
    title: 'SSoC Participation Certificate',
    issuer: 'SSoC',
    date: '2025-10-10',
  },
];

const achievementsConfig = {
  achievements,
  certificates,
};

export default achievementsConfig;
