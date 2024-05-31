import { ReactNode } from "react";
export default function TypescriptVar(props: {
  useLet: boolean;
  name: string;
  type: string;
  value: ReactNode;
}) {
  return (
    <div>
      <span className="text-lime-500">{props.useLet ? "let" : "const"} </span>{" "}
      {props.name}:<span className="text-blue-200">{props.type}</span> ={" "}
      <span className="text-rose-300">{props.value}</span>;
    </div>
  );
}
