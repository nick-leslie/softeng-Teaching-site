import Image from "next/image";
import javaLogo from "@/images/Java-Logo.png";
import typescriptLogo from "@/images/Typescript_logo.png";
import SectionTitle from "@/components/SectionTitle";
import TypescriptVar from "@/components/languageSyntax/typescriptVar";
import JavaVar from "@/components/languageSyntax/javaVar";
import { JavaInTxt } from "@/components/languageSyntax/javaInTxt";
import { TypescriptInTxt } from "@/components/languageSyntax/typescriptInTxt";
import CodeBlockBackground from "@/components/languageSyntax/codeBlockBackground";

export default function VariublesText() {
  return (
    <>
      <h1 className="place-self-center">
        From <JavaInTxt /> to Typescript: Syntax
      </h1>
      <div className="flex flex-row place-self-center gap-5">
        {/* todo fix the images to make the header look better */}
        <Image
          src={javaLogo}
          className="w-44 h-40"
          width={400}
          height={300}
          alt="the logo for java"
        />
        <Image
          src={typescriptLogo}
          className="w-40 h-40"
          width={200}
          height={200}
          alt="the logo for typescript"
        />
      </div>
      <SectionTitle title={"Introduction and History"} />
      <p>
        In <JavaInTxt />, everything is a class. This means that Java often has
        a very structured way of solving problems. However, that structure can
        lead to some confusion when trying to learn a non-opinionated language
        or non-opinionated language. This Lession will explore the syntax
        differences between <JavaInTxt /> and <TypescriptInTxt /> to begin to
        get you acquainted. Later lessons will jump into teaching the specific
        features of typescript
      </p>
      <div className="py-5" />
      <p>
        But first, what is <TypescriptInTxt />? <TypescriptInTxt /> is a
        superset of Javascript that allows for static typing. I just threw a lot
        of buzzwords at you, so let&apos;s break it down. Javascript is a
        programming language that powers the web. It was created for dynamically
        modifying websites; however, now you can do almost any programming task
        with it. Javascript is a dynamically typed language; this means any
        variable can be any type. For example, If I have a function that takes a
        number and divides it by 2 in Javascript, I can pass it a string, and
        the program won&apos;gitt crash. This usually creates unintended
        behaviors. <TypescriptInTxt /> was designed to add static typing on top
        of JavaScript. In the previous example, <TypescriptInTxt /> will warn
        you that a string is not a number.
      </p>
      <SectionTitle title={"Part 1: Variables "} />
      <p>
        <TypescriptInTxt /> and <JavaInTxt /> are both statically typed
        languages. Being staticly typed means when you declare a variable in{" "}
        <JavaInTxt /> and <TypescriptInTxt />, you must declare the data type of
        A variable when you create it. Once created, these variables should only
        be assigned values of the same type. If the value doesn&apos;t match the
        type, both languages will throw errors at compile time. However, if you
        encounter type errors at run time, <JavaInTxt /> will crash, but
        <TypescriptInTxt /> won&apos;t in many cases. Instead{" "}
        <TypescriptInTxt /> will try its best and often cause unintended
        behaviors. Lets take a look at the syntax diffrneces between the two
      </p>
      <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col w-full gap-2">
          <JavaInTxt classname="place-self-center" />
          <CodeBlockBackground>
            <div>
              <span className="text-blue-200">type</span> name ={" "}
              <span className="text-rose-300">value</span>;
            </div>
            <JavaVar modifiers="" type="int" name="IntVal" value={0} />
            <JavaVar modifiers="" type="float" name="floatVal" value={"0.0f"} />
            <JavaVar
              modifiers=""
              type="string"
              name="stringVal"
              value={'"hello world"'}
            />
          </CodeBlockBackground>
        </div>
        <div className="flex flex-col w-full gap-2">
          <TypescriptInTxt classname="place-self-center" />
          <CodeBlockBackground>
            <div>
              <span className="text-lime-500">let or const</span> name:
              <span className="text-blue-200">type</span> ={" "}
              <span className="text-rose-300">value</span>;
            </div>
            <TypescriptVar
              useLet={true}
              name="intVar"
              type="number"
              value={0}
            />
            <TypescriptVar
              useLet={true}
              name="floatVar"
              type="number"
              value={"0.0"}
            />
            <TypescriptVar
              useLet={true}
              name="stringVar"
              type="string"
              value='"hello world"'
            />
            <br />
          </CodeBlockBackground>
        </div>
      </div>
      <SectionTitle
        title={
          <h3>
            Sidenote <span className="text-lime-500">let vs const</span>{" "}
          </h3>
        }
      />
      <div>todo go over let vs const</div>
    </>
  );
}
