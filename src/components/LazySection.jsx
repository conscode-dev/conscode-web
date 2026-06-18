import { Suspense, useEffect, useRef, useState } from "react";

const LazySection = ({ id, children, minHeight = "24rem" }) => {
  const sectionRef = useRef(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (shouldRender) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "900px 0px",
        threshold: 0.01,
      }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => observer.disconnect();
  }, [shouldRender]);

  return (
    <section id={id} ref={sectionRef} style={!shouldRender ? { minHeight } : undefined}>
      {shouldRender && (
        <Suspense fallback={<div className="section-shell" style={{ minHeight }} />}>
          {children}
        </Suspense>
      )}
    </section>
  );
};

export default LazySection;
