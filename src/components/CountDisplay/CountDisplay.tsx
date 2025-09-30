import css from './CountDisplay.module.css';

//===============================================================

interface Props {
  value: number;
}

//===============================================================

function CountDisplay({ value }: Props) {
  return (
    <div className={css.box}>
      The current counter value is <span className={css.value}>{value}</span>
    </div>
  );
}

export default CountDisplay;
