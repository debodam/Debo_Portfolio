import React from "react";
import "./style.css"; // Make sure this file includes necessary styles

export default function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reset animation by setting visibility to false and then true
            setVisible(false);
            setTimeout(() => setVisible(true), 0); // This triggers the animation
          }
        });
      },
      { threshold: 0.1 }
    ); // Adjust threshold as needed

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []); // Empty dependency array ensures this runs once on mount and cleanup on unmount

  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      style={{ transitionDelay: `${props.delay}` }}
      ref={domRef}>
      {props.children}
    </div>
  );
}
