"use client";
import FunctionsText from "@/lessions/syntax/sections/functionsText";
import VariublesQuiz from "@/lessions/syntax/sections/variublesQuiz";
import VariublesText from "@/lessions/syntax/sections/variublesText";
import { useState } from "react";

export default function Page() {
  const [compleatedQuizOne, setCompleatedQuizOne] = useState(false);
  return (
    <div className="flex flex-col w-full text-xl">
      <VariublesText />
      <VariublesQuiz
        onCompleate={() => {
          console.log("compleated quiz one");
          setCompleatedQuizOne(true);
        }}
      />
      <div className="p-3" />
      {compleatedQuizOne ? (
        <FunctionsText />
      ) : (
        <div className="place-self-center">
          complete the quiz to access the next section
        </div>
      )}
    </div>
  );
}
