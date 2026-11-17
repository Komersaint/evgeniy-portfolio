import type { Metadata } from 'next';
import Link from '@/components/Link';
import PageShell from '@/components/PageShell';
import { projects } from '@/content/projects';

export const metadata: Metadata = {
  title: 'Проекты',
  description:
    'Обзор проектов: собственная агентная система Hermes, автоматизация процессов, рабочие продукты и исследовательские задачи.',
};

export default function ProjectsPage() {
  return (
    <PageShell
      kicker="Проекты"
      title="Что я сделал и над чем работаю"
      lead="Главный проект — Hermes. Остальное выросло из тех же задач: автоматизация процессов, работа с данными, продукты, которые решают мою же задачу на практике."
      related={[
        { href: '/projects/hermes', label: 'Кейс Hermes' },
        { href: '/projects/automation', label: 'Автоматизация процессов' },
        { href: '/journal', label: 'Инженерный журнал' },
      ]}
    >
      <div className="stack">
        {projects.map((project) => (
          <article key={project.slug} className="project-card">
            <div className="project-card__top">
              <span className="eyebrow eyebrow--muted">
                {project.index} · {project.kicker}
              </span>
              <span className="project-card__status">{project.status}</span>
            </div>

            <h2 className="project-card__title">
              <Link href={`/projects/${project.slug}`}>{project.title}</Link>
            </h2>

            <p className="project-card__summary">{project.summary}</p>

            {project.image ? (
              <div className="project-card__media">
                <img
                  src={project.image}
                  alt={project.imageAlt ?? project.title}
                  width={1600}
                  height={900}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ) : null}

            <div className="project-card__foot">
              <Link href={`/projects/${project.slug}`} className="textlink">
                Открыть кейс <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>

      <section className="section" style={{ marginTop: 48 }}>
        <div className="placeholder">
          <p className="placeholder__label">Раздел в работе</p>
          <p className="placeholder__text">
            Материалы клиентских кейсов, цифры эффективности и ссылки на закрытые проекты будут
            добавлены после согласования с заказчиками. До этого момента здесь только то, что можно
            подтвердить: собственные проекты, рабочие продукты и метод работы.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
