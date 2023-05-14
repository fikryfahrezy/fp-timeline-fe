import { Link } from 'react-router-dom';

import useTimelineManagement from '@/hooks/useTimelineManagement';

export function Component() {
  const { timelines } = useTimelineManagement();

  return (
    <main className="h-100% max-w-800px mx-auto py-5 [&>*:nth-last-child(n+2)]:mb-3">
      <div className="flex justify-end">
        <Link to="/edit" className="text-black no-underline">
          Edit
        </Link>
      </div>
      <h1>Timeline 2022</h1>
      {timelines.map((timeline) => {
        return (
          <article
            className="flex w-full relative pl-3 pr-2 pb-6 ml-6 before-content-empty before-absolute before-w-6 before-h-6 before-bg-accent before-b-rd-50% before-top-0 before-right-100% after-content-empty after-absolute after-w-1 after-h-100% after-bg-accent after-top-0 after--left-3.5"
            key={timeline.id}
          >
            <div className="w-full [&>*:nth-last-child(n+2)]:mb-3">
              <div className="flex flex-col gap-5 xl:flex-row w-full">
                <span className="w-full bg-transparent border-0 text-4">{timeline.startDate}</span>
                <span className="w-full bg-transparent border-0 text-4">{timeline.endDate}</span>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="w-full bg-transparent border-0 text-2xl font-bold">
                  {timeline.title}
                </h2>
                <pre className="w-full bg-transparent border-0 text-4 break-word whitespace-break-spaces resize-none">
                  {timeline.description}
                </pre>
              </div>
            </div>
          </article>
        );
      })}
    </main>
  );
}

Component.displayName = 'Home';
