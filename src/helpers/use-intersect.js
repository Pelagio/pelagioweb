import { useState, useRef, useEffect } from "react";

export const useIntersect = ({ root = null, rootMargin, threshold = 0 }) => {
  const [entry, updateEntry] = useState({});
  const [node, setNode] = useState(null);

  const observer = useRef(null);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new window.IntersectionObserver(
      ([entry]) => updateEntry(entry),
      {
        root,
        rootMargin,
        threshold
      }
    );

    const { current: currentObserve } = observer;

    currentObserve.disconnect();

    if (node) currentObserve.observe(node);

    return () => currentObserve.disconnect();
  }, [node, root, rootMargin, threshold]);

  return [setNode, entry];
};
