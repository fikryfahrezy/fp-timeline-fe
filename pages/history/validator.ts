import Timeline from '@/model/timeline';

export function validateTimelines(timelines: Timeline[]) {
  return !timelines.some((timeline) => {
    return Object.values(timeline).includes('');
  });
}
