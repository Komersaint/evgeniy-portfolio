import type { Metadata } from 'next';
import Link from '@/components/Link';
import PageShell from '@/components/PageShell';
import { projectBySlug } from '@/content/projects';

export const metadata: Metadata = {
  title: 'Автоматизация процессов',
  description:
    'Направление автоматизации: n8n, Telegram-боты, API-интеграции и работа с процессами. Метод: понять процесс, спроектировать, собрать, проверить.',
};

export default function AutomationPage() {
  const project = projectBySlug('automation');

  if (!project) {
    return null;
  }

  return (
    <PageShell
      kicker={`${project.index} · ${project.kicker}`}
      title={project.title}
      lead={project.summary}
      related={[
        { href: '/projects', label: 'Все проекты' },
        { href: '/skills', label: 'Что умею' },
        { href: '/approach', label: 'Мой подход' },
      ]}
    >
      <div className="split">
        <div className="stack">
          <section className="panel">
            <h2 className="panel__title">С какой задачи начинается работа</h2>
            <p className="panel__text">{project.problem}</p>
          </section>

          <section className="panel">
            <h2 className="panel__title">Как я это делаю</h2>
            <ul className="bullets">
              {project.actions.map((action) => (
                <li key={action}>{action}</li>
              ))}
            </ul>
          </section>

          <section className="panel">
            <h2 className="panel__title">Что получается на выходе</h2>
            <p className="panel__text">{project.result}</p>
          </section>

          <section className="panel panel--warm">
            <h2 className="panel__title">Инструменты по задаче</h2>
            <div className="deflist">
              <div className="deflist__row">
                <span className="deflist__term">n8n</span>
                <span className="deflist__detail">
                  Маршруты и интеграции между сервисами: когда сценарий — это соединение шагов из
                  разных источников.
                </span>
              </div>
              <div className="deflist__row">
                <span className="deflist__term">Telegram-бот</span>
                <span className="deflist__detail">
                  Когда задача живёт в диалоге: заявка, подтверждение, отчёт, уведомление о
                  результате.
                </span>
              </div>
              <div className="deflist__row">
                <span className="deflist__term">API</span>
                <span className="deflist__detail">
                  Когда нужен доступ к данным или действие, которого нет в готовом сервисе.
                </span>
              </div>
              <div className="deflist__row">
                <span className="deflist__term">Python</span>
                <span className="deflist__detail">
                  Когда логика нестандартная и её неудобно выражать в графическом редакторе.
                </span>
              </div>
            </div>
          </section>
        </div>

        <aside className="stack">
          <section className="panel">
            <h2 className="panel__title">Моя роль</h2>
            <p className="panel__text">{project.role}</p>
          </section>

          <section className="panel panel--skills">
            <h2 className="panel__title">Стек</h2>
            <div className="tags">
              {project.stack.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </section>

          {project.statusNote ? (
            <section className="placeholder">
              <p className="placeholder__label">Честно</p>
              <p className="placeholder__text">{project.statusNote}</p>
            </section>
          ) : null}
        </aside>
      </div>

      <section className="section" style={{ marginTop: 44 }}>
        <figure className="figure">
          <img
            src={project.image}
            alt={project.imageAlt ?? project.title}
            width={1600}
            height={900}
            loading="lazy"
            decoding="async"
          />
        </figure>
      </section>

      <div className="related">
        <Link href="/journal" className="related__link">
          Ситуации из работы с бизнесом <span aria-hidden="true">→</span>
        </Link>
        <Link href="/projects/hermes" className="related__link">
          Кейс Hermes <span aria-hidden="true">→</span>
        </Link>
      </div>
    </PageShell>
  );
}
