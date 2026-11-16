import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell from '@/components/PageShell';
import { aboutFacts, aboutIntro, aboutNow, aboutStory, aboutValues } from '@/content/about';

export const metadata: Metadata = {
  title: 'Обо мне',
  description:
    'Евгений Наконечный: AI-специалист и инженер автоматизации. Опыт работы с людьми и задачами, подход к системам и то, что делаю сейчас.',
};

export default function AboutPage() {
  return (
    <PageShell
      kicker={aboutIntro.kicker}
      title={aboutIntro.title.join(' ')}
      lead={aboutIntro.lead}
      related={[
        { href: '/projects', label: 'Проекты' },
        { href: '/journal', label: 'Инженерный журнал' },
        { href: '/resume', label: 'Резюме' },
      ]}
    >
      <div className="split">
        <div className="stack">
          <section className="panel">
            <h2 className="panel__title">Кто я</h2>
            <div className="stack stack--sm">
              {aboutStory.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="panel__text">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          <section className="panel panel--warm">
            <h2 className="panel__title">Принципы, по которым работаю</h2>
            <div className="deflist">
              {aboutValues.map((value) => (
                <div key={value.title} className="deflist__row">
                  <span className="deflist__term">{value.title}</span>
                  <span className="deflist__detail">{value.text}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="panel panel--skills">
            <h2 className="panel__title">{aboutNow.title}</h2>
            <ul className="bullets">
              {aboutNow.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>

        <aside className="stack">
          <figure className="figure about__portrait">
            <img
              src="/images/portrait.jpg"
              alt="Евгений Наконечный"
              width={1200}
              height={1200}
              loading="lazy"
              decoding="async"
            />
          </figure>

          <figure className="figure">
            <img
              src="/images/about-workspace.jpg"
              alt="Рабочее место: блокнот, закрытый ноутбук и нейтральные предметы"
              width={1200}
              height={900}
              loading="lazy"
              decoding="async"
            />
          </figure>

          <section className="panel">
            <h2 className="panel__title">Коротко</h2>
            <div className="facts">
              {aboutFacts.map((fact) => (
                <div key={fact.label} className="facts__row">
                  <span className="facts__label">{fact.label}</span>
                  <span className="facts__value">{fact.value}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="panel panel--dark">
            <h2 className="panel__title">Что дальше</h2>
            <p className="panel__text" style={{ color: 'rgba(239,235,226,0.78)' }}>
              Ищу работу в команде, где есть реальные процессы, которые нужно автоматизировать, и
              есть желание разбираться в том, что система делает, а не только запускать её.
            </p>
          </section>
        </aside>
      </div>

      <div className="related" style={{ marginTop: 44 }}>
        <Link href="/projects/hermes" className="related__link">
          Кейс Hermes <span aria-hidden="true">→</span>
        </Link>
        <Link href="/approach" className="related__link">
          Мой подход <span aria-hidden="true">→</span>
        </Link>
      </div>
    </PageShell>
  );
}
