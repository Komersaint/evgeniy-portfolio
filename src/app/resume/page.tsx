import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import PrintButton from '@/components/PrintButton';
import {
  printNote,
  resumeAbout,
  resumeContext,
  resumeContacts,
  resumeIntro,
  resumeNote,
  resumeProjects,
  resumeRole,
  resumeSkills,
  resumeStack,
} from '@/content/resume';

export const metadata: Metadata = {
  title: 'Резюме',
  description:
    'Резюме Евгения Наконечного: роль, проекты, компетенции и стек. Сохраняется в PDF прямо из браузера.',
};

export default function ResumePage() {
  return (
    <PageShell
      kicker={resumeIntro.kicker}
      title={resumeIntro.title.join(' ')}
      lead={resumeIntro.lead}
      related={[
        { href: '/projects', label: 'Проекты' },
        { href: '/about', label: 'Обо мне' },
        { href: '/skills', label: 'Что умею' },
      ]}
    >
      <div className="resume">
        <div className="resume__toolbar">
          <PrintButton label={resumeIntro.pdfHint} />
          <p className="resume__hint">{printNote}</p>
        </div>

        <section className="resume__block">
          <h2 className="panel__title">{resumeAbout.title}</h2>
          <p className="panel__text">{resumeAbout.text}</p>
        </section>

        <section className="resume__block panel--warm">
          <h2 className="panel__title">{resumeContext.title}</h2>
          <p className="panel__text">{resumeContext.text}</p>
        </section>

        <section className="resume__block">
          <h2 className="panel__title">Контакты</h2>
          <div className="facts">
            {resumeContacts.map((field) => (
              <div key={field.label} className="facts__row">
                <span className="facts__label">{field.label}</span>
                {field.href ? (
                  <a
                    className="facts__value facts__value--link"
                    href={field.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {field.value} <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <span
                    className={
                      field.placeholder
                        ? 'facts__value facts__value--placeholder'
                        : 'facts__value'
                    }
                  >
                    {field.value}
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="resume__block">
          <h2 className="panel__title">{resumeRole.title}</h2>
          <ul className="bullets">
            {resumeRole.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="resume__block">
          <h2 className="panel__title">{resumeProjects.title}</h2>
          <div className="stack stack--sm">
            {resumeProjects.items.map((project) => (
              <div key={project.name} className="resume__project">
                <div className="resume__project-head">
                  <span className="resume__project-name">{project.name}</span>
                  <span className="resume__project-role">{project.role}</span>
                </div>
                <p className="resume__project-text">{project.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="resume__block">
          <h2 className="panel__title">{resumeSkills.title}</h2>
          <div className="resume__skills">
            {resumeSkills.groups.map((group) => (
              <div key={group.title} className="resume__skill-group">
                <h3 className="resume__skill-title">{group.title}</h3>
                <ul className="bullets">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="resume__block">
          <h2 className="panel__title">Инструменты</h2>
          <div className="tags">
            {resumeStack.map((item) => (
              <span key={item} className="tag">
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="resume__note">
          <p className="resume__note-title">{resumeNote.title}</p>
          <p className="resume__note-text">{resumeNote.text}</p>
        </section>
      </div>
    </PageShell>
  );
}
