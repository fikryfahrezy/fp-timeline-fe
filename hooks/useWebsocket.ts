import { useEffect, useRef, useCallback } from 'react';

export type UseWebsocketOptions = {
  url: string;
  onReceiveMessage: (data: any) => void;
};

function useWebsocket({ url, onReceiveMessage }: UseWebsocketOptions) {
  const ws = useRef<WebSocket | null>(null);

  const sendMessage = useCallback((data: Parameters<WebSocket['send']>[0]) => {
    if (ws.current === null) {
      return;
    }

    ws.current.send(data);
  }, []);

  useEffect(() => {
    // Create WebSocket connection.
    const socket = new WebSocket(url);

    // Listen for messages
    socket.addEventListener('message', (event) => {
      onReceiveMessage(event.data);
    });

    ws.current = socket;

    return () => {
      socket.close();
    };
  }, [url, onReceiveMessage]);

  return { sendMessage };
}

export default useWebsocket;
