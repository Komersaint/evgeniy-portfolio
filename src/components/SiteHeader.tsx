import Link from 'next/link';
import { nav, site } from '@/content/site';

/**
 * Общая шапка. На главной она «прозрачная», на внутренних страницах —
 * с нижней линией, чтобы отделить содержимое.
 */
export default function SiteHeader({ solid = false }: { solid?: boolean }) {
  return (
    <header className={`site-header${solid ? ' site-header--solid' : ''}`}>
      <div className="container site-header__inner">
        <Link href="/" className="site-header__brand" aria-label={`${site.name} — на главную`}>
          <span className="site-header__monogram" aria-hidden="true">
            {site.monogram}
          </span>
          <span className="site-header__name">
            {site.nameUpper.split(' ').map((part, i) => (
              <span key={i}>
                {i === 0 ? part : part}
              </span>
            ))}
          </span>
        </Link>

        <p className="site-header__edition">{site.edition}</p>

        <nav className="site-header__nav" aria-label="Основная навигация">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="site-header__link">
              {item.label}
              {item.external ? <span aria-hidden="true"> ↗</span> : null}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
