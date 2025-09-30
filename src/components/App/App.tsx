import { useState } from 'react';
import { Button, CountDisplay, Accordion, TagManager } from '../../index';
import { accItems } from '../../data/accItems';
import css from './App.module.css';

// ================================================================

function App() {
  const [isVisible, setIsVisible] = useState(true);
  const [value, setValue] = useState(0);

  const handleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleCounterClick = () => {
    setValue(value + 1);
  };

  return (
    <div className="container">
      <h1 className={css.h1}>State in React</h1>

      <section className={css.card}>
        <h2 className={css.h2}>Counter</h2>
        <div className={css.row}>
          <Button
            onClick={handleVisibility}
            text="Change visibility"
            className={css.fullWidthBtn}
          />
          {isVisible && <CountDisplay value={value} />}
        </div>

        <div className={css.btns}>
          <Button onClick={handleCounterClick} text="Click 1" />
          <Button onClick={handleCounterClick} text="Click 2" />
          <Button onClick={handleCounterClick} text="Click 3" />
          <Button variant="reset" onClick={() => setValue(0)} text="Reset" />
        </div>
      </section>

      <section className={css.card}>
        <h2 className={css.h2}>Accordion</h2>
        <Accordion items={accItems} />
      </section>

      <section className={css.card}>
        <h2 className={css.h2}>Tags</h2>
        <TagManager />
      </section>
    </div>
  );
}

export default App;

/*
import { useState } from 'react';
import { Button, CountDisplay, Accordion, TagManager } from '../../index';

import { accItems } from '../../data/accItems';

import css from './App.module.css';

// ================================================================

function App() {
  const [value, setValue] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const handleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleCounterClick = () => {
    setValue(value + 1);
  };

  return (
    <div className={css.container}>
      <h1>State in React</h1>
      <div className={css.card}>
        <Button onClick={handleVisibility} text="Change visibility" />
        {isVisible && <CountDisplay value={value} />}

        <Button onClick={handleCounterClick} text="Click 1" />
        <Button onClick={handleCounterClick} text="Click 2" />
        <Button onClick={handleCounterClick} text="Click 3" />
      </div>

      <div className={css.card}>
        <Accordion items={accItems} />
      </div>

      <div className={css.card}>
        <TagManager />
      </div>
    </div>
  );
}

export default App;
*/
