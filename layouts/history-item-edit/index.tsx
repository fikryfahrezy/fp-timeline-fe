import { useState } from 'react';
import { RiCalendarTodoLine } from 'react-icons/ri';
import Timeline from '@/layouts/timeline';
import styles from './Styles.module.css';

function DatePicker() {
  const [value, setValue] = useState('');

  return (
    <label className="relative inline-flex lh-0">
      <input
        type="date"
        value={value}
        onChange={(e) => {
          setValue(e.currentTarget.value);
        }}
        className={`absolute w-100% h-100% border-0 opacity-0 overflow-hidden cursor-pointer box-border ${styles['input__date']}`}
      />

      <button className="flex text-2xl bg-transparent border-0 items-center justify-center">
        <RiCalendarTodoLine />
      </button>
      <input
        readOnly
        value={value !== '' ? new Date(value).toDateString() : ''}
        placeholder="Sun, 01 January 2006"
        className="w-100% bg-transparent border-0 text-4 flex-1 box-border"
      />
    </label>
  );
}

function HistoryItem() {
  return (
    <Timeline>
      <div>
        <DatePicker />
        <DatePicker />
      </div>
      <div className="flex flex-col gap-1">
        <input
          type="text"
          autoComplete="off"
          placeholder="Title..."
          className="mb-2 bg-transparent border-0 text-2xl font-bold outline-none"
        />
        <textarea
          autoComplete="off"
          placeholder="Content..."
          className="bg-transparent border-0 outline-none resize-none"
          onInput={(e) => {
            e.currentTarget.style.height = '5px';
            e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
          }}
        />
      </div>
    </Timeline>
  );
}

export default HistoryItem;
