import { twMerge } from "tailwind-merge";

export function TypescriptInTxt(props: { classname?: string }) {
  return (
    <b className={twMerge("text-blue-400", props.classname)}>Typescript</b>
  );
}
