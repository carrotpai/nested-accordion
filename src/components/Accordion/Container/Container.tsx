import { forwardRef, ReactNode } from "react";

export const Container = forwardRef<HTMLDivElement, {
  children: ReactNode,
  height: string,
  background: string,
  dataId: number
}>(function({ children, height, background, dataId }, ref) {
  return (
    <div
      data-acc-id={dataId}
      ref={ref}
      style={{
        height: height,
        transition: "height 400ms ease-in-out",
        overflow: "hidden",
        background: background
      }}
    >
      {children}
    </div>
  );
});
