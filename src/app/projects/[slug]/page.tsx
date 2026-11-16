import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageShell from '@/components/PageShell';
import { projectBySlug, projects } from '@/content/projects';

/**
 * Общий маршрут кейса. Два проекта с отдельной вёрсткой (hermes, automation)
 * имеют собственные статические страницы и исключены из списка.
 */
const SPECIAL_SLUGS = new Set(['hermes', 'automation']);

export function generateStaticParams() {
  return projects
    .filter((project) => !SPECIAL_SLUGS.has(project.slug))
    .map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectCasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectBySlug(slug);

  if (!project || SPECIAL_SLUGS.has(slug)) {
    notFound();
  }

  return (
    <PageShell
      kicker={`${project.index} · ${project.kicker}`}
      title={project.title}
      lead={project.summary}
      related={[
        { href: '/projects', label: 'Все проекты' },
        { href: '/projects/hermes', label: 'Кейс Hermes' },
        { href: '/journal', label: 'Инженерный журнал' },
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

          {project.image ? (
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
          ) : null}
        </div>

        <aside className="stack">
          <section className="panel">
            <h2 className="panel__title">Моя роль</h2>
            <p className="panel__text">{project.role}</p>
          </section>

          {project.facts?.length ? (
            <section className="panel panel--skills">
              <h2 className="panel__title">Ключевое</h2>
              <div className="facts">
                {project.facts.map((fact) => (
                  <div key={fact.label} className="facts__row">
                    <span className="facts__label">{fact.label}</span>
                    <span className="facts__value">{fact.value}</span>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

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
              <p className="placeholder__label">Честно</p>
              <p className="placeholder__text">{project.statusNote}</p>
            </section>
          ) : null}
        </aside>
      </div>

      <div className="related" style={{ marginTop: 44 }}>
        <Link href="/projects/automation" className="related__link">
          Направление автоматизации <span aria-hidden="true">→</span>
        </Link>
        <Link href="/research" className="related__link">
          Что изучаю сейчас <span aria-hidden="true">→</span>
        </Link>
      </div>
    </PageShell>
  );
}
