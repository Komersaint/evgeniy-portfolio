import type { Metadata } from 'next';
import Link from '@/components/Link';
import PageShell from '@/components/PageShell';
import { researchIntro, researchStack, researchTopics } from '@/content/research';

export const metadata: Metadata = {
  title: 'Что изучаю',
  description:
    'Исследовательские вопросы: надёжность AI-агентов, управление полномочиями, контекст и память, интеграционные ограничения, тестирование и развитие Hermes.',
};

const STATUS_LABEL: Record<string, string> = {
  изучаю: 'Изучаю',
  'в работе': 'В работе',
  решено: 'Решено',
};

export default function ResearchPage() {
  return (
    <PageShell
      kicker={researchIntro.kicker}
      title={researchIntro.title.join(' ')}
      lead={researchIntro.lead}
      related={[
        { href: '/journal', label: 'Инженерный журнал' },
        { href: '/projects/hermes', label: 'Кейс Hermes' },
        { href: '/approach', label: 'Мой подход' },
      ]}
    >
      <section className="section">
        <div className="placeholder" style={{ marginBottom: 28 }}>
          <p className="placeholder__label">Граница</p>
          <p className="placeholder__text">{researchIntro.disclaimer}</p>
        </div>

        <div className="stack">
          {researchTopics.map((topic) => (
            <section key={topic.id} className="panel">
              <div className="bento__card-top">
                <h2 className="panel__title" style={{ marginBottom: 0 }}>
                  {topic.title}
                </h2>
                <span className="eyebrow eyebrow--muted">
                  {STATUS_LABEL[topic.status] ?? topic.status}
                </span>
              </div>
              <p className="panel__text" style={{ marginTop: 12 }}>
                <strong>{topic.question}</strong>
              </p>
              <p className="panel__text" style={{ marginTop: 8 }}>
                {topic.why}
              </p>
              {topic.done?.length ? (
                <div style={{ marginTop: 18 }}>
                  <p className="eyebrow eyebrow--muted" style={{ marginBottom: 10 }}>
                    Что уже сделано
                  </p>
                  <ul className="bullets">
                    {topic.done.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </section>
          ))}
        </div>
      </section>

      <section className="section">
        <figure className="figure">
          <img
            src="/images/research-module.jpg"
            alt="Прозрачный стеклянный модуль с медными элементами, один из которых отделён"
            width={1200}
            height={900}
            loading="lazy"
            decoding="async"
          />
          <figcaption className="figure__caption">
            Исследование — это тоже работа: часть модуля ещё не собрана, и это нормальная
            промежуточная стадия.
          </figcaption>
        </figure>
      </section>

      <section className="section">
        <h2 className="section__title">Инструменты, в которых я работаю</h2>
        <div className="tags" style={{ marginTop: 16 }}>
          {researchStack.map((item) => (
            <span key={item} className="tag">
              {item}
            </span>
          ))}
        </div>
      </section>

      <div className="related">
        <Link href="/journal" className="related__link">
          Записи из журнала <span aria-hidden="true">→</span>
        </Link>
      </div>
    </PageShell>
  );
}
