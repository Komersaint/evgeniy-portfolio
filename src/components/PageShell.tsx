import Link from '@/components/Link';

export type RelatedLink = {
  href: string;
  label: string;
};

type PageShellProps = {
  kicker: string;
  title: string;
  lead?: string;
  /** Показывать ссылку «На главную» сверху. */
  showBack?: boolean;
  related?: RelatedLink[];
  children: React.ReactNode;
};

/**
 * Общий каркас внутренней страницы: «На главную», заголовок, лид и
 * ссылки на связанные разделы.
 */
export default function PageShell({
  kicker,
  title,
  lead,
  showBack = true,
  related,
  children,
}: PageShellProps) {
  return (
    <div className="container page">
      {showBack ? (
        <Link href="/" className="page__back">
          <span aria-hidden="true">←</span> На главную
        </Link>
      ) : null}

      <header className="page__intro">
        <p className="eyebrow">{kicker}</p>
        <h1 className="page__title">{title}</h1>
        {lead ? <p className="page__lead">{lead}</p> : null}
      </header>

      {children}

      {related && related.length > 0 ? (
        <nav className="related" aria-label="Связанные разделы">
          {related.map((item) => (
            <Link key={item.href} href={item.href} className="related__link">
              {item.label}
              <span aria-hidden="true">→</span>
            </Link>
          ))}
        </nav>
      ) : null}
    </div>
  );
}
