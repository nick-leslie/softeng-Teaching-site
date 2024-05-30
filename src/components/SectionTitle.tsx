import { ReactNode } from "react";

export default function SectionTitle(props: { title: ReactNode }) {
  //TODO add a way to overide styles
  return (
    <>
      <div className="py-5" />
      <div className="place-self-center">
        <b>{props.title}</b>
      </div>
      <div className="py-3" />
    </>
  );
}
