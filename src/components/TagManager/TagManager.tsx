import { useState } from 'react';
import type { ChangeEvent } from 'react';

import css from './TagManager.module.css';

// ================================================================

const initialTags = [
  'Work',
  'Personal',
  'Meeting',
  'Shopping',
  'Ideas',
  'Travel',
  'Finance',
  'Health',
  'Important',
  'Todo',
];

// ================================================================

export default function TagManager() {
  const [tags, setTags] = useState<string[]>(initialTags);
  const [searchText, setSearchText] = useState('');

  const deleteTag = (tagName: string) => {
    setTags(prevTags => prevTags.filter(tag => tag !== tagName));
  };

  const updateSearchText = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const visibleTags = tags.filter(tag =>
    tag.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className={css.wrap}>
      <label className={css.label}>
        <span className={css.labelText}>Search tag:</span>

        <input
          className={css.input}
          type="text"
          placeholder="Start typing..."
          value={searchText}
          onChange={updateSearchText}
        />
      </label>

      {visibleTags.length === 0 ? (
        <p className={css.empty}>No tags match your query</p>
      ) : (
        <ul className={css.tagList}>
          {visibleTags.map(tag => (
            <li className={css.tagItem} key={tag}>
              <span className={css.tagText}>{tag}</span>

              <button
                className={css.closeButton}
                type="button"
                aria-label={`Remove ${tag}`}
                onClick={() => deleteTag(tag)}
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/*
import { useState } from 'react';
import css from './TagManager.module.css';

// ================================================================

const initialTags = [
  'Work',
  'Personal',
  'Meeting',
  'Shopping',
  'Ideas',
  'Travel',
  'Finance',
  'Health',
  'Important',
  'Todo',
];

// ================================================================

export default function TagManager() {
  const [tags, setTags] = useState<string[]>(initialTags);
  const [searchText, setSearchText] = useState('');

  const deleteTag = (tagName: string) => {
    setTags(prevTags => prevTags.filter(tag => tag !== tagName));
  };

  const updateSearchText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const visibleTags = tags.filter(tag =>
    tag.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <label className={css.label}>
        Search tag:
        <input
          className={css.input}
          type="text"
          value={searchText}
          onChange={updateSearchText}
        />
      </label>

      <ul className={css.tagList}>
        {visibleTags.map(tag => {
          return (
            <li className={css.tagItem} key={tag}>
              <span className={css.tagText}>{tag}</span>
              <button
                className={css.closeButton}
                onClick={() => deleteTag(tag)}
              >
                &times;
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
*/
