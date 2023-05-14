import { type TimelineMessage, type TimelineResponse } from './types';

import { useState, useCallback, useEffect } from 'react';
import Timeline from '@/model/timeline';

import { setTimeline } from './mutator';
import useWebsocket, { type UseWebsocketOptions } from './useWebsocket';
import { timelineResponseToState } from './transformer';

function useTimelineManagement() {
  const [timelines, setTimelines] = useState<Timeline[]>([]);

  const onReceiveMessage: UseWebsocketOptions['onReceiveMessage'] = useCallback((data) => {
    const newTimelineMessage: TimelineMessage = JSON.parse(data);
    setTimelines((prevTimelines) => {
      return setTimeline(prevTimelines, newTimelineMessage);
    });
  }, []);

  const { sendMessage } = useWebsocket({
    onReceiveMessage,
    url: 'ws://localhost:9999/ws',
  });

  useEffect(() => {
    fetch('http://localhost:9999/timelines')
      .then((res) => {
        return res.json();
      })
      .then((timelinesResponse: TimelineResponse[]) => {
        setTimelines(timelineResponseToState(timelinesResponse));
      });
  }, []);

  return { timelines, setTimelines, sendMessage };
}

export default useTimelineManagement;
