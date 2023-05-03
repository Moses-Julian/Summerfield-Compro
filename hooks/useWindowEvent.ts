import { useEffect } from 'react';

const useWindowEvent = <K extends keyof WindowEventMap>(
	event: K,
	callback: (event: WindowEventMap[K]) => void
) => {
	useEffect(() => {
		if (window == null) return;

		window.addEventListener(event, callback);
		return () => window.removeEventListener(event, callback);
	}, [event, callback]);
};

export default useWindowEvent;
