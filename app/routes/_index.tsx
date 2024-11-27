import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";

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

  const onChange = (updatedValue: string) => setCode(updatedValue);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-row h-full w-full">
        <div className="h-full w-6/12">
          <Editor code={code} onChange={onChange} />
        </div>
        <div className="h-full w-6/12">
          <Review review={review} />
        </div>
      </div>
    </div>
  );
}
