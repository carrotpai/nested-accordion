import { ReactNode } from "react";
export interface ICaptionWrapperProps {
  title: string;
  children: ReactNode;
  isRoot?: boolean;
  background: string;
}

export interface Node {
  id: number;
  scrollHeight: number
  currentHeight: number
}
