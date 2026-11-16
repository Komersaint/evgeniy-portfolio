import type { Metadata } from 'next';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { site } from '@/content/site';

import './globals.css';
import './layout.css';
import './bento.css';
import './resume.css';

export const metadata: Metadata = {
  title: {
    default: site.defaultPageTitle,
    template: '%s — Евгений Наконечный',
  },
  description: site.description,
  openGraph: {
    title: site.defaultPageTitle,
    description: site.description,
    type: 'website',
    locale: 'ru_RU',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <a className="skip-link" href="#main">
          Перейти к содержанию
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
