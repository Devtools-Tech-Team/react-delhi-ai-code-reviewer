import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import classnames from "classnames";

import Editor from "~/components/Editor.client";
import Review from "~/components/Review.client";

export const meta: MetaFunction = () => {
  return [
    { title: "AI in Frontend: Code Reviewer App" },
    { name: "description", content: "Welcome to code reviewer app!" },
  ];
};

export default function Index() {
  const [code, setCode] = useState("");
  const [review, setReview] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "generated">("idle");

  const onChange = (updatedValue: string) => setCode(updatedValue);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-row h-full w-full">
        <div className="h-full w-6/12 relative">
          <button
            className="w-max absolute bottom-3 right-3 z-50 bg-green-500 p-2 rounded hover:bg-green-700 active:translate-y-1 disabled:opacity-75  disabled:pointer-events-none disabled:cursor-not-allowed"
            disabled={state === "loading"}
          >
            Generate Review
          </button>
          <Editor code={code} onChange={onChange} />
        </div>
        <div className="h-full w-6/12">
          <Review review={review} />
        </div>
      </div>
    </div>
  );
}
