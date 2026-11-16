import Link from 'next/link';
import { bentoCards, belowFold, hero, sideCard } from '@/content/home';
import { portrait } from '@/content/site';

/**
 * Главная страница — Bento «Новая бумага».
 * Все тексты приходят из src/content/home.ts.
 */
export default function HomePage() {
  return (
    <div className="container">
      <div className="bento">
        {/* ------------------------------------------------ Боковая карточка */}
        <Link href="/about" className="bento__side" aria-label="Обо мне">
          <p className="eyebrow side__eyebrow">{sideCard.eyebrow}</p>
          <span className="side__monogram" aria-hidden="true">
            {sideCard.monogram}
          </span>
          <span className="side__chip">
            {sideCard.chip.map((line, i) => (
              <span key={i}>{line}</span>
            ))}
          </span>
        </Link>

        {/* ------------------------------------------------------ Основная карточка */}
        <section className="bento__hero">
          <div className="hero__text">
            <p className="eyebrow hero__eyebrow">{hero.eyebrow}</p>
            <h1 className="hero__title">
              {hero.title[0]}
              <br />
              {hero.title[1].replace(/\.$/, '')}
              <span className="accent">.</span>
            </h1>
            <p className="hero__lead">{hero.lead}</p>
            <div className="hero__chips">
              {hero.chips.map((chip) => (
                <span key={chip} className="hero__chip">
                  {chip}
                </span>
              ))}
            </div>
            <Link
              href={hero.ctaHref}
              className="round-arrow hero__cta"
              aria-label={hero.ctaLabel}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                <path
                  d="M3 3 L13 13 M13 6 L13 13 L6 13"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          <figure className="hero__portrait">
            <img
              src={portrait.src}
              alt={portrait.alt}
              width={1200}
              height={1200}
              loading="eager"
              decoding="async"
            />
          </figure>
        </section>

        {/* ------------------------------------------------------------- Hermes */}
        <Link href={bentoCards.hermes.href} className="bento__hermes">
          <div className="hermes__top">
            <span className="eyebrow">{bentoCards.hermes.kicker}</span>
            <span className="eyebrow">{bentoCards.hermes.counter}</span>
          </div>
          <div className="hermes__main">
            <h2 className="hermes__title">
              {bentoCards.hermes.title}
              <span className="hermes__sup" aria-hidden="true">
                ↗
              </span>
            </h2>
            <p className="hermes__desc">{bentoCards.hermes.description}</p>
          </div>
          <span className="hermes__link">
            {bentoCards.hermes.linkLabel}
            <span aria-hidden="true">↗</span>
          </span>
        </Link>

        {/* ---------------------------------------------------------- Что умею */}
        <Link href={bentoCards.skills.href} className="bento__card bento__skills">
          <div className="bento__card-top">
            <span className="eyebrow eyebrow--muted">{bentoCards.skills.kicker}</span>
            <span className="eyebrow eyebrow--muted">{bentoCards.skills.counter}</span>
          </div>
          <h2 className="bento__title">
            {bentoCards.skills.title[0]}
            <br />
            {bentoCards.skills.title[1]}
          </h2>
          <p className="bento__desc">{bentoCards.skills.description}</p>
          <div className="tags bento__tags">
            {bentoCards.skills.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </Link>

        {/* --------------------------------------------------------- Мой подход */}
        <Link href={bentoCards.approach.href} className="bento__card bento__approach">
          <div className="bento__card-top">
            <span className="eyebrow eyebrow--muted">{bentoCards.approach.kicker}</span>
            <span className="eyebrow eyebrow--muted">{bentoCards.approach.counter}</span>
          </div>
          <h2 className="bento__title">
            {bentoCards.approach.title[0]}
            <br />
            {bentoCards.approach.title[1]}
          </h2>
          <p className="bento__desc">{bentoCards.approach.description}</p>
          <div className="bento__steps">
            {bentoCards.approach.steps.map((step, i) => (
              <span key={step} style={{ display: 'contents' }}>
                {i > 0 ? <span aria-hidden="true">→</span> : null}
                <span style={{ fontWeight: 700 }}>{step}</span>
              </span>
            ))}
          </div>
        </Link>

        {/* -------------------------------------------------------- Что изучаю */}
        <Link href={bentoCards.research.href} className="bento__card bento__research">
          <div className="bento__card-top">
            <span className="eyebrow eyebrow--muted">{bentoCards.research.kicker}</span>
            <span className="eyebrow eyebrow--muted">{bentoCards.research.counter}</span>
          </div>
          <h2 className="bento__title">
            {bentoCards.research.title[0]}
            <br />
            {bentoCards.research.title[1]}
          </h2>
          <p className="bento__desc">{bentoCards.research.description}</p>
        </Link>

        {/* ------------------------------------------------------------- Резюме */}
        <Link href={bentoCards.resume.href} className="bento__card bento__resume">
          <div className="bento__card-top">
            <span className="eyebrow">{bentoCards.resume.kicker}</span>
            <span className="eyebrow">{bentoCards.resume.counter}</span>
          </div>
          <h2 className="bento__title">
            {bentoCards.resume.title[0]}
            <br />
            {bentoCards.resume.title[1]} <span aria-hidden="true">↗</span>
          </h2>
          <p className="bento__desc">{bentoCards.resume.description}</p>
        </Link>
      </div>

      {/* ------------------------------------------------- Блок под Bento-сеткой */}
      <div className="below">
        <section className="below__card below__journal">
          <p className="eyebrow eyebrow--muted">{belowFold.journal.kicker}</p>
          <h2 className="below__title">{belowFold.journal.title}</h2>
          <p className="below__desc">{belowFold.journal.description}</p>
          <Link href={belowFold.journal.href} className="textlink below__link">
            Читать журнал <span aria-hidden="true">→</span>
          </Link>
        </section>

        <section className="below__card below__all">
          <p className="eyebrow side__eyebrow">Навигация</p>
          <h2 className="below__title">{belowFold.allProjects.title}</h2>
          <p className="below__desc">{belowFold.allProjects.description}</p>
          <Link href={belowFold.allProjects.href} className="textlink below__link">
            Смотреть все <span aria-hidden="true">→</span>
          </Link>
        </section>
      </div>
    </div>
  );
}
