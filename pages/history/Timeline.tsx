import { type TimelineProps } from './types';

function Timeline({ children, onDelete }: TimelineProps) {
  return (
    <article className="flex w-full">
      <div className="flex flex-col mr-10px">
        <button
          onClick={onDelete}
          className="rounded-full w-6 h-6 border-transparent bg-red cursor-pointer"
        >
          X
        </button>
        <span className="block h-100% w-4px m-auto bg-red"></span>
      </div>
      <div className="w-full [&>*:nth-last-child(n+2)]:mb-3">{children}</div>
    </article>
  );
}

export default Timeline;
