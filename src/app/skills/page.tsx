import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import { skillGroups, skillsIntro } from '@/content/skills';

export const metadata: Metadata = {
  title: 'Что умею',
  description:
    'Группы компетенций: AI-агенты, автоматизация процессов, интеграции, работа с бизнесом, инженерная надёжность и работа с AI-кодинг-агентами.',
};

export default function SkillsPage() {
  return (
    <PageShell
      kicker={skillsIntro.kicker}
      title={skillsIntro.title.join(' ')}
      lead={skillsIntro.lead}
      related={[
        { href: '/approach', label: 'Мой подход' },
        { href: '/projects', label: 'Проекты' },
        { href: '/resume', label: 'Резюме' },
      ]}
    >
      <div className="stack">
        {skillGroups.map((group) => (
          <section key={group.id} className="panel">
            <h2 className="panel__title">{group.title}</h2>
            <p className="panel__text" style={{ marginBottom: 20 }}>
              {group.summary}
            </p>
            <div className="deflist">
              {group.items.map((item) => (
                <div key={item.term} className="deflist__row">
                  <span className="deflist__term">{item.term}</span>
                  <span className="deflist__detail">{item.detail}</span>
                </div>
              ))}
            </div>
            <div className="tags" style={{ marginTop: 22 }}>
              {group.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </section>
        ))}
      </div>
    </PageShell>
  );
}
