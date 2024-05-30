import { ReactNode } from "react";
export default function JavaVar(props: {
  modifiers: string;
  name: string;
  type: string;
  value: ReactNode;
}) {
  return (
    <div>
      <span className="text-lime-500">{props.modifiers}</span>{" "}
      <span className="text-blue-200">{props.type}</span> {props.name} ={" "}
      <span className="text-rose-300">{props.value}</span>;
    </div>
  );
}
