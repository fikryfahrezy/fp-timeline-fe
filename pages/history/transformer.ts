import { type TimelineResponse } from './types';

import Timeline from '@/model/timeline';

export function timelineResponseToState(timelinesResponse: TimelineResponse[]) {
  return timelinesResponse.map((timelineResponse) => {
    return new Timeline({
      description: timelineResponse['description'],
      endDate: timelineResponse['end_date'],
      startDate: timelineResponse['start_date'],
      title: timelineResponse['title'],
      id: timelineResponse['id'],
    });
  });
}
