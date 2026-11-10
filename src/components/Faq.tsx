import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const QUESTIONS = [
  {
    questionKey: 'faq.what.question',
    answerKey: 'faq.what.answer',
  },
  {
    questionKey: 'faq.free.question',
    answerKey: 'faq.free.answer',
    linkKey: 'faq.free.link',
  },
  {
    questionKey: 'faq.networks.question',
    answerKey: 'faq.networks.answer',
  },
  {
    questionKey: 'faq.mobile.question',
    answerKey: 'faq.mobile.answer',
  },
  {
    questionKey: 'faq.import.question',
    answerKey: 'faq.import.answer',
  },
  {
    questionKey: 'faq.keys.question',
    answerKey: 'faq.keys.answer',
  },
  {
    questionKey: 'faq.swaps.question',
    answerKey: 'faq.swaps.answer',
    linkKey: 'faq.swaps.link',
  },
  {
    questionKey: 'faq.migrate.question',
    answerKey: 'faq.migrate.answer',
  },
] as const;

export default function Faq() {
  const { t } = useLanguage();
  const [openItems, setOpenItems] = useState<ReadonlySet<number>>(new Set([0]));
  const toggle = (i: number) =>
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  const renderAnswer = (answerKey: string, linkKey?: string) => {
    const answer = t(answerKey);
    if (!linkKey) return answer;
    const [before, after = ''] = answer.split('{feesLink}');
    return <>{before}<a href="/fees">{t(linkKey)}</a>{after}</>;
  };
  return (
      <section className="block" id="faq">
        <div className="wrap">
          <div className="sec-head center reveal">
            <h2>{t('faq.title')}</h2>
          </div>
          <div className="faq-list reveal-group">
            {QUESTIONS.map((item, index) => {
              const answerId = `faq-answer-${index}`;
              const isOpen = openItems.has(index);
              return (
                <div className={'faq-item' + (isOpen ? ' open' : '')} key={item.questionKey}>
                  <button type="button" aria-expanded={isOpen} aria-controls={answerId} onClick={() => toggle(index)}>
                    {t(item.questionKey)}
                    <svg className="chev" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                  </button>
                  <div className="ans" id={answerId}>
                    {renderAnswer(item.answerKey, 'linkKey' in item ? item.linkKey : undefined)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
  );
}
