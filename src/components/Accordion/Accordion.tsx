import { useId, useState } from 'react';
import type { AccItem as AccordionItem } from '../../types/AccItem';

import css from './Accordion.module.css';

// ================================================================

interface Props {
  items: AccordionItem[];
}

// ================================================================

function Accordion({ items }: Props) {
  const uid = useId();
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const toggle = (elIdx: number) => {
    setActiveIdx(activeIdx === elIdx ? null : elIdx);
  };

  return (
    <div className={css.wrapper}>
      {items.map(({ title, content }, index) => {
        const isOpen = activeIdx === index;

        const panelId = `${uid}-panel-${index}`;
        const btnId = `${uid}-btn-${index}`;

        return (
          <section className={css.item} key={`${title}-${index}`}>
            <button
              id={btnId}
              type="button"
              className={css.trigger}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(index)}
            >
              <span className={css.title}>{title}</span>
              <span className={css.chevron} aria-hidden="true" />
            </button>

            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              className={isOpen ? `${css.panel} ${css.open}` : css.panel}
            >
              <p className={css.content}>{content}</p>
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default Accordion;

/*

import { useState } from 'react';
import type { AccordionItem } from '../../types/AccordionItem';

// ================================================================

interface Props {
  items: AccordionItem[];
}

// ================================================================

function Accordion({ items }: Props) {
  const [activeIdx, setActiveIdx] = useState<null | number>(null);

  const changeIdx = (elIdx: number) => {
    setActiveIdx(activeIdx === elIdx ? null : elIdx);
  };

  return (
    <div>
      {items.map(({ title, content }, index) => {
        return (
          <div key={index}>
            <button onClick={() => changeIdx(index)}>{title}</button>
            {activeIdx === index && <p>{content}</p>}
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;

*/
