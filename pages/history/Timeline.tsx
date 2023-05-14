import { type TimelineProps } from './types';

function Timeline({ children, onDelete }: TimelineProps) {
  return (
    <article className="flex w-full">
      <div className="flex flex-col mr-10px">
        <div>
          <button
            onClick={onDelete}
            className="flex rounded-full w-6 h-6 border-transparent bg-red cursor-pointer items-center justify-center"
          >
            X
          </button>
        </div>
        <span className="block h-100% w-4px m-auto bg-red"></span>
      </div>
      <div className="w-full [&>*:nth-last-child(n+2)]:mb-3">{children}</div>
    </article>
  );
}

export default Timeline;
