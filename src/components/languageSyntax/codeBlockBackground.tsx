import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export default function CodeBlockBackground(props: {
  children: ReactNode;
  classname?: string;
}) {
  return (
    <div
      className={twMerge(
        "bg-indigo-950 h-full w-full p-2 rounded-2xl",
        props.classname,
      )}
    >
      {props.children}
    </div>
  );
}
