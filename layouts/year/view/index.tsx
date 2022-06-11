import { Link } from 'react-router-dom';
import Year from '@/model/year';
import TimelineLayout from '@/layouts/timeline';

type YearItemProps = {
  year: Year;
};

function YearItem({ year }: YearItemProps) {
  return (
    <TimelineLayout>
      <Link
        to={`/${year.getId().toString()}`}
        className="inline-block color-white mb-4 bg-transparent border-0 text-5xl font-bold"
      >
        {year.getDate()}
      </Link>
    </TimelineLayout>
  );
}

export default YearItem;
