import { CSSProperties, ReactNode } from "react";

export interface AnimationBaseProps {
  id?: string;
  children: ReactNode;
  duration?: number;
  delay?: number;
  distance?: number;
  className?: string;
  style?: CSSProperties;
}

export interface SlideInProps extends AnimationBaseProps {
  direction?: "toRight" | "toLeft" | "toUp" | "toDown";
}
