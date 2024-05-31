import { twMerge } from "tailwind-merge";
export function JavaInTxt(props: { classname?: string }) {
  return <b className={twMerge("text-red-500", props.classname)}>Java</b>;
}
