import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell from '@/components/PageShell';
import { projectBySlug } from '@/content/projects';

export const metadata: Metadata = {
  title: 'Hermes — кейс',
  description:
    'Hermes: собственная агентная система. Задача, роль автора, устройство на понятном уровне, что можно подтвердить и над чем работаю дальше.',
};

export default function HermesPage() {
  const project = projectBySlug('hermes');

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
        { href: '/projects/automation', label: 'Автоматизация процессов' },
        { href: '/approach', label: 'Мой подход' },
      ]}
    >
      <div className="split">
        <div className="stack">
          <section className="panel">
            <h2 className="panel__title">Задача</h2>
            <p className="panel__text">{project.problem}</p>
          </section>

          <section className="panel">
            <h2 className="panel__title">Что я делал</h2>
            <ul className="bullets">
              {project.actions.map((action) => (
                <li key={action}>{action}</li>
              ))}
            </ul>
          </section>

          <section className="panel">
            <h2 className="panel__title">Что получилось</h2>
            <p className="panel__text">{project.result}</p>
          </section>

          <section className="panel panel--warm">
            <h2 className="panel__title">Как это устроено — на понятном уровне</h2>
            <div className="deflist">
              <div className="deflist__row">
                <span className="deflist__term">Инструменты</span>
                <span className="deflist__detail">
                  Внешние действия, которые система умеет выполнять: HTTP-запросы, работа с
                  Telegram, файлы, база данных. У каждого инструмента есть понятный контракт и
                  понятный отказ.
                </span>
              </div>
              <div className="deflist__row">
                <span className="deflist__term">Контекст и память</span>
                <span className="deflist__detail">
                  Система видит не всю историю, а то, что нужно для текущей задачи, и помнит
                  контекст между шагами.
                </span>
              </div>
              <div className="deflist__row">
                <span className="deflist__term">Контроль действий</span>
                <span className="deflist__detail">
                  Действия разделены по уровням: чтение, подготовка и применение. Неподтверждённое
                  действие не выполняется молча.
                </span>
              </div>
              <div className="deflist__row">
                <span className="deflist__term">Проверка результата</span>
                <span className="deflist__detail">
                  Успех подтверждается состоянием результата, а не тем, что скрипт закончился без
                  ошибки. Это отдельный слой над любым скриптом.
                </span>
              </div>
              <div className="deflist__row">
                <span className="deflist__term">Наблюдаемость</span>
                <span className="deflist__detail">
                  Журнал действий и сторож, который замечает задачи, переставшие давать результат.
                  Тишина в системе считается инцидентом.
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
            <h2 className="panel__title">Что можно подтвердить</h2>
            <div className="facts">
              {project.facts?.map((fact) => (
                <div key={fact.label} className="facts__row">
                  <span className="facts__label">{fact.label}</span>
                  <span className="facts__value">{fact.value}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="panel">
            <h2 className="panel__title">Стек</h2>
            <div className="tags">
              {project.stack.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </section>

          {project.links?.length ? (
            <section className="panel panel--dark">
              <h2 className="panel__title">Ссылки</h2>
              <div className="stack stack--sm">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="textlink textlink--light"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label} <span aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>
            </section>
          ) : null}

          {project.statusNote ? (
            <section className="placeholder">
              <p className="placeholder__label">Готовится</p>
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
          Как это выглядело изнутри <span aria-hidden="true">→</span>
        </Link>
        <Link href="/research" className="related__link">
          Что изучаю сейчас <span aria-hidden="true">→</span>
        </Link>
      </div>
    </PageShell>
  );
}
