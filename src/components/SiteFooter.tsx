import Link from '@/components/Link';
import { nav, site } from '@/content/site';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div>
          <p className="site-footer__name">{site.name}</p>
          <p className="site-footer__role">{site.role}</p>
        </div>
        <nav className="site-footer__nav" aria-label="Навигация в подвале">
          <Link href="/" className="site-footer__link">
            На главную
          </Link>
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="site-footer__link">
              {item.label}
              {item.external ? <span aria-hidden="true"> ↗</span> : null}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
