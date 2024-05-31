"use client";
import SectionTitle from "@/components/SectionTitle";
import CodeBlockBackground from "@/components/languageSyntax/codeBlockBackground";
import { JavaInTxt } from "@/components/languageSyntax/javaInTxt";
import JavaVar from "@/components/languageSyntax/javaVar";
import { TypescriptInTxt } from "@/components/languageSyntax/typescriptInTxt";
import { useState } from "react";

export default function VaiublesQuiz(props: { onCompleate: () => void }) {
  const [questionOneState, setQuestionOneState] = useState("");
  console.log(questionOneState);

  function questionOne(answer: string) {
    const valid = [
      'let names:string[] = ["Wilson Wong","Joe smith","Carol Davise","Jane langly"];'.toLowerCase(),
      'let names = ["Wilson Wong","Joe smith","Carol Davise","Jane langly"];'.toLowerCase(),
      'const names:string[] = ["Wilson Wong","Joe smith","Carol Davise","Jane langly"];'.toLowerCase(),
      'const names = ["Wilson Wong","Joe smith","Carol Davise","Jane langly"];'.toLowerCase(),
    ];
    for (let i = 0; i < valid.length; i++) {
      if (answer.toLowerCase() == valid[i]) {
        return true;
      }
    }
    return false;
  }

  return (
    <div className="flex flex-col">
      <SectionTitle title={<h3>Variables quiz</h3>} />
      <div>question one</div>
      <div className="p-3" />
      {/*  */}
      <div>
        Translate the below <JavaInTxt /> variable to <TypescriptInTxt />{" "}
      </div>
      <div className="p-3" />
      <CodeBlockBackground>
        <JavaVar
          name="names"
          type="String[]"
          value={'["Wilson Wong","Joe smith","Carol Davise","Jane langly"]'}
        />{" "}
      </CodeBlockBackground>
      {/* todo add a colapsible hint */}
      <div className={"py-2"}></div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          let isCorrect = questionOne(questionOneState);
          if (isCorrect) {
            props.onCompleate();
          }
        }}
        className="flex flex-col"
      >
        <div>
          <input
            className="bg-indigo-950 w-full p-2 rounded-2xl"
            onChange={(questionOneResponse) => {
              console.log(questionOneResponse.target.value);
              setQuestionOneState(questionOneResponse.target.value);
            }}
            value={questionOneState}
          />
        </div>
        <div>todo add question on let vs const</div>
        <input
          className="bg-blue-800 rounded-2xl place-self-center p-2"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
}
