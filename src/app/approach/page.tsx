import type { Metadata } from 'next';
import Link from '@/components/Link';
import PageShell from '@/components/PageShell';
import { approachIntro, approachPrinciples, approachSteps } from '@/content/approach';

export const metadata: Metadata = {
  title: 'Мой подход',
  description:
    'Как я работаю: понять задачу и контекст, спроектировать процесс, собрать и проверить решение, внедрить и улучшать.',
};

export default function ApproachPage() {
  return (
    <PageShell
      kicker={approachIntro.kicker}
      title={approachIntro.title.join(' ')}
      lead={approachIntro.lead}
      related={[
        { href: '/skills', label: 'Что умею' },
        { href: '/journal', label: 'Инженерный журнал' },
        { href: '/projects/hermes', label: 'Кейс Hermes' },
      ]}
    >
      <div className="steps">
        {approachSteps.map((step) => (
          <article key={step.id} className="step">
            <span className="step__number">{step.number}</span>
            <div>
              <h2 className="step__title">{step.title}</h2>
              <p className="step__lead">{step.lead}</p>
              <p className="step__body">{step.body}</p>
              <p className="step__outcome">{step.outcome}</p>
            </div>
          </article>
        ))}
      </div>

      <section className="section" style={{ marginTop: 48 }}>
        <h2 className="section__title">Что я держу постоянно</h2>
        <p className="section__note">
          Четыре принципа, по которым я принимаю решения в спорных местах.
        </p>
        <div className="card-grid">
          {approachPrinciples.map((principle) => (
            <div key={principle.title} className="panel panel--warm">
              <h3 className="panel__title">{principle.title}</h3>
              <p className="panel__text">{principle.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <figure className="figure">
          <img
            src="/images/approach-stages.jpg"
            alt="Четыре последовательные стадии изготовления одного простого предмета из керамики и металла"
            width={1600}
            height={900}
            loading="lazy"
            decoding="async"
          />
          <figcaption className="figure__caption">
            Одна задача, четыре стадии: от формы и сборки — к готовому и проверяемому результату.
          </figcaption>
        </figure>
      </section>

      <div className="related">
        <Link href="/journal" className="related__link">
          Как это выглядело на практике <span aria-hidden="true">→</span>
        </Link>
      </div>
    </PageShell>
  );
}
