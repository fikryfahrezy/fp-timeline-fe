import type { ReactNode } from 'react';

type TimelineProps = {
  className?: string;
  children?: ReactNode;
};

function Timeline({ className, children }: TimelineProps) {
  return (
    <article
      className={`relative pl-3 pr-2 pb-6 ml-8 before-content-empty before-absolute before-w-6 before-h-6 before-bg-accent before-b-rd-50% before-top-0 before-right-100% after-content-empty after-absolute after-w-1 after-h-100% after-bg-accent after-top-0 after--left-3.5 ${
        typeof className === 'string' ? className : ''
      }`}
    >
      {children}
    </article>
  );
}

export default Timeline;
