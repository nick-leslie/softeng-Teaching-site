import Image from "next/image";
import javaLogo from "@/images/Java-Logo.png";
import typescriptLogo from "@/images/Typescript_logo.png";
import SectionTitle from "@/components/SectionTitle";
import TypescriptVar from "@/components/typescriptVar";
import JavaVar from "@/components/javaVar";

export default function Page() {
  return (
    <div className="flex flex-col w-full text-xl">
      <h1 className="place-self-center">From Java to Typescript: Syntax</h1>
      <div className="flex flex-row place-self-center gap-5">
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
        In <b className="text-red-500">Java</b>, you can think of everything as
        a class. <b className="text-red-500">Java</b> is an object-oriented
        mandatory language, meaning you can only write code if enclosed in a
        class. This is a good thing; however, jumping to a non-opinionated
        language can lead to some confusion. This article will explore the
        differences between <b className="text-red-500">Java</b> and{" "}
        <b className="text-blue-400">Typescript</b> to begin to get you
        acquainted.
      </p>
      <div className="py-5" />
      <p>
        But first, what is <b className="text-blue-400">Typescript</b>?{" "}
        <b className="text-blue-400">Typescript</b> is a superset of Javascript
        that allows for static typing. I just threw a lot of buzzwords at you,
        so let's break it down. Javascript is a programming language that powers
        the web. It was created for dynamically modifying websites; however, now
        you can do almost any programming task with it. Javascript is a
        dynamically typed language; this means any variable can be any type. For
        example, If I have a function that takes a number and divides it by 2 in
        Javascript, I can pass it a string, and the program won&apos;gitt crash.
        This usually creates unintended behaviors.{" "}
        <b className="text-blue-400">Typescript</b> was designed to add static
        typing on top of JavaScript. In the previous example,{" "}
        <b className="text-blue-400">Typescript</b> will warn you that a string
        is not a number.
      </p>
      <SectionTitle title={"Part 1: Variables "} />
      <p>
        <b className="text-blue-400">Typescript</b> and{" "}
        <b className="text-red-500">Java</b> are both statically typed
        languages. When you declare a variable in{" "}
        <b className="text-red-500">Java</b> and{" "}
        <b className="text-blue-400">Typescript</b>, you must declare the data
        type of A variable when you create it. Once created, these variables
        should only be assigned values of the same type. If the value
        doesn&apos;t match the type, both languages will throw errors at compile
        time. However, if you encounter type errors at run time,{" "}
        <b className="text-red-500">Java</b> will crash, but
        <b className="text-blue-400">Typescript</b> won&apos;t in many cases.
        Instead <b className="text-blue-400">Typescript</b> will try its best
        and often cause unintended behaviors. Lets take a look at the syntax
        diffrneces between the two
      </p>
      <div className="grid grid-cols-2">
        <div className="flex flex-col w-full gap-2">
          <b className="text-red-500 place-self-center">Java</b>
          <div>
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
          </div>
        </div>
        <div className="flex flex-col w-full gap-2">
          <b className="text-blue-400 place-self-center">Typescript</b>
          <div>
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
          </div>
        </div>
      </div>
      <SectionTitle
        title={
          <h3>
            Sidenote <span className="text-lime-500">let vs const</span>{" "}
          </h3>
        }
      />
      <SectionTitle title={<h3>Variables quiz</h3>} />
    </div>
  );
}
