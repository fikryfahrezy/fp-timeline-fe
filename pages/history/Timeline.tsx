import type { TimelineProps } from './types';

function Timeline({ children, isEditable, onDelete }: TimelineProps) {
  return (
    <article className="flex">
      <div className="flex flex-col mr-10px">
        <button
          onClick={onDelete}
          disabled={!isEditable}
          className={`rounded-full w-6 h-6 border-transparent  ${
            isEditable ? 'bg-red cursor-pointer' : 'bg-accent'
          }`}
        >
          {isEditable ? 'X' : ''}
        </button>
        <span
          className={`block h-100% w-4px m-auto  ${isEditable ? 'bg-red' : 'bg-accent'}`}
        ></span>
      </div>
      <div>{children}</div>
    </article>
  );
}

export default Timeline;
