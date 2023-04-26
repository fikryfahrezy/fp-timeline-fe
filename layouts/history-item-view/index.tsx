import Timeline from '@/model/timeline';
import TimelineLayout from '@/layouts/timeline';

function Date({ children }: JSX.IntrinsicElements['span']) {
  return <span className="bg-transparent border-0 text-4">{children}</span>;
}

type HistoryItemProps = {
  timeline: Timeline;
};

function HistoryItem({ timeline }: HistoryItemProps) {
  return (
    <TimelineLayout>
      <div className="flex flex-col gap-5 xl:flex-row">
        <Date>{timeline.getStartDate()}</Date>
        <Date>{timeline.getStartDate()}</Date>
      </div>
      <div className="flex flex-col gap-1">
        <p className="mb-2 bg-transparent border-0 text-2xl font-bold">
          {timeline.getTitle()}
        </p>
        <pre className="bg-transparent border-0 text-4 break-word whitespace-break-spaces">
          {timeline.getDesciprtion()}
        </pre>
      </div>
    </TimelineLayout>
  );
}

export default HistoryItem;
