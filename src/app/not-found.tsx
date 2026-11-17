import Link from '@/components/Link';

export default function NotFound() {
  return (
    <div className="container page">
      <Link href="/" className="page__back">
        <span aria-hidden="true">←</span> На главную
      </Link>
      <header className="page__intro">
        <p className="eyebrow">Ошибка 404</p>
        <h1 className="page__title">Такой страницы нет</h1>
        <p className="page__lead">
          Возможно, ссылка устарела или в адресе опечатка. Все разделы доступны из главной.
        </p>
      </header>
      <div className="related">
        <Link href="/" className="related__link">
          На главную <span aria-hidden="true">→</span>
        </Link>
        <Link href="/projects" className="related__link">
          Проекты <span aria-hidden="true">→</span>
        </Link>
        <Link href="/resume" className="related__link">
          Резюме <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}
