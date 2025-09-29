import css from './CountDisplay.module.css';

//===============================================================

interface Props {
  value: number;
}

//===============================================================

export default function CountDisplay({ value }: Props) {
  return (
    <div className={css.box}>
      The current counter value is <span className={css.value}>{value}</span>
    </div>
  );
}

/*
interface Props {
  value: number;
}

//===============================================================

export default function CountDisplay({ value }: Props) {
  return <div>The current counter value is {value}</div>;
}
*/
