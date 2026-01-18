"use client";

import { CSSProperties, ReactNode, useEffect, useRef, useState } from "react";

export interface SlideInProps {
  id?: string;
  children: ReactNode;
  duration?: number;
  delay?: number;
  distance?: number;
  className?: string;
  style?: CSSProperties;
  direction?: "toRight" | "toLeft" | "toUp" | "toDown";
}

const SlideIn = ({
  id,
  children,
  duration = 1,
  delay = 0,
  distance = 50,
  className = "",
  style,
  direction = "toRight",
}: SlideInProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const getInitialTransform = () => {
    switch (direction) {
      case "toLeft":
        return `translateX(${distance}px)`;
      case "toUp":
        return `translateY(${distance}px)`;
      case "toDown":
        return `translateY(-${distance}px)`;
      default: // toRight
        return `translateX(-${distance}px)`;
    }
  };

  return (
    <div
      id={id}
      ref={ref}
      className={className}
      style={{
        width: "100%",
        height: "100%",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate(0, 0)" : getInitialTransform(),
        transition: `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default SlideIn;
