import Timeline from '@/model/timeline';
import { histories } from './constants';

export function generateHistories() {
  return histories.map((history) => {
    return new Timeline({
      id: history['id'],
      startDate: history['start_date'],
      endDate: history['end_date'],
      title: history['title'],
      description: history['description'],
    });
  });
}
