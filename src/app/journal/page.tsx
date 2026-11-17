import type { Metadata } from 'next';
import Link from '@/components/Link';
import PageShell from '@/components/PageShell';
import { entriesByGroup, journalGroups, journalIntro, journalPlanned } from '@/content/journal';

export const metadata: Metadata = {
  title: 'Инженерный журнал',
  description:
    'Живые разборы: что сломалось, как искал причину и что из этого вынес. Технические истории и ситуации из работы с бизнесом.',
};

export default function JournalPage() {
  return (
    <PageShell
      kicker={journalIntro.kicker}
      title={journalIntro.title}
      lead={journalIntro.lead}
      related={[
        { href: '/approach', label: 'Мой подход' },
        { href: '/projects/hermes', label: 'Кейс Hermes' },
        { href: '/research', label: 'Что изучаю' },
      ]}
    >
      {journalGroups.map((group) => {
        const entries = entriesByGroup(group.id);
        return (
          <section key={group.id} className="section">
            <h2 className="section__title">{group.title}</h2>
            <p className="section__note">{group.lead}</p>

            <div className="stack">
              {entries.map((entry) => (
                <article key={entry.id} className="panel">
                  <div className="entry-head">
                    <h3 className="panel__title" style={{ marginBottom: 0 }}>
                      {entry.title}
                    </h3>
                    <span className="entry-head__meta">{entry.date}</span>
                  </div>

                  <div className="deflist" style={{ marginTop: 20 }}>
                    <div className="deflist__row">
                      <span className="deflist__term">Ситуация</span>
                      <span className="deflist__detail">{entry.situation}</span>
                    </div>
                    <div className="deflist__row">
                      <span className="deflist__term">Проблема</span>
                      <span className="deflist__detail">{entry.problem}</span>
                    </div>
                    <div className="deflist__row">
                      <span className="deflist__term">Мои действия</span>
                      <span className="deflist__detail">
                        <ul className="bullets">
                          {entry.actions.map((action) => (
                            <li key={action}>{action}</li>
                          ))}
                        </ul>
                      </span>
                    </div>
                    <div className="deflist__row">
                      <span className="deflist__term">Результат</span>
                      <span className="deflist__detail">{entry.result}</span>
                    </div>
                    <div className="deflist__row">
                      <span className="deflist__term">Чему научился</span>
                      <span className="deflist__detail">{entry.lesson}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        );
      })}

      <section className="section">
        <h2 className="section__title">Темы в работе</h2>
        <p className="section__note">
          Разборы, которые я веду прямо сейчас. Запись появится, когда будет готов не черновик, а
          законченный вывод.
        </p>
        <div className="stack">
          {journalPlanned.map((topic) => (
            <article key={topic.id} className="panel panel--warm">
              <div className="entry-head">
                <h3 className="panel__title" style={{ marginBottom: 0 }}>
                  {topic.title}
                </h3>
                <span className="entry-head__meta">
                  {topic.group === 'technical' ? 'Техническая' : 'Бизнес'}
                </span>
              </div>
              <p className="panel__text" style={{ marginTop: 12 }}>
                {topic.lead}
              </p>
              <div style={{ marginTop: 18 }}>
                <p className="eyebrow eyebrow--muted" style={{ marginBottom: 10 }}>
                  Что уже сделано
                </p>
                <ul className="bullets">
                  {topic.plan.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <figure className="figure">
          <img
            src="/images/journal-notebook.jpg"
            alt="Открытый блокнот с абстрактными линиями и инженерным инструментом рядом"
            width={1200}
            height={900}
            loading="lazy"
            decoding="async"
          />
          <figcaption className="figure__caption">
            Журнал — это черновик мысли, а не отчёт: сначала фиксирую разбор, потом формулирую
            вывод.
          </figcaption>
        </figure>
      </section>

      <div className="related">
        <Link href="/about" className="related__link">
          Обо мне <span aria-hidden="true">→</span>
        </Link>
      </div>
    </PageShell>
  );
}
