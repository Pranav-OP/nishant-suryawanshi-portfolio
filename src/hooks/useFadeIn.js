import { useEffect, useRef } from "react";

export default function useFadeIn() {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current.classList.add("visible");
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);
  }, []);

  return ref;
}
