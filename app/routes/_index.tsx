import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";

import Editor from "~/components/Editor.client";
import Review from "~/components/Review.client";
import Loader from "~/components/Loader";

import generateReview from "~/actions/review";
import { useFetcher } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "AI in Frontend: Code Reviewer App" },
    { name: "description", content: "Welcome to code reviewer app!" },
  ];
};

// PUT OR PUT REQUEST
export const action = generateReview;

export default function Index() {
  // For saving code
  const [code, setCode] = useState("");

  // For UI state
  const [state, setState] = useState<"idle" | "loading" | "generated">("idle");

  // For proper rendering
  const [isHydrated, setHyrated] = useState(false);

  // For POST request
  const fetcher = useFetcher();

  // For handling code change
  const onChange = (updatedValue: string) => setCode(updatedValue);

  // For handling code generation
  const onGenerateReview = async () => {
    const formData = new FormData();

    // { 'code': "Hello World" }
    formData.append("code", code);
    // '/'
    fetcher.submit(formData, {
      method: "POST",
    });
  };

  // For Hydration
  useEffect(() => {
    if (!isHydrated) {
      setHyrated(true);
    }
  }, [isHydrated]);

  // For changing UI state
  useEffect(() => {
    if (fetcher.state === "submitting") {
      setState("loading");
    } else if (fetcher.state === "idle" && fetcher.data) {
      setState("generated");
    } else {
      setState("idle");
    }
  }, [fetcher.state, fetcher.data]);

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex flex-row h-full w-full bg-black justify-center content-center">
        <div className="h-full w-6/12 relative">
          <button
            className="w-max absolute bottom-3 right-3 z-50 bg-green-500 p-2 rounded hover:bg-green-700 active:translate-y-1 disabled:opacity-75  disabled:pointer-events-none disabled:cursor-not-allowed"
            disabled={state === "loading"}
            onClick={onGenerateReview}
          >
            Generate Review
          </button>
          {isHydrated ? (
            <Editor key="code-editor" code={code} onChange={onChange} />
          ) : null}
        </div>
        <div className="h-full w-6/12 relative">
          {state === "loading" ? <Loader /> : null}
          {isHydrated ? (
            <Review key="review" review={fetcher.data?.review ?? ""} />
          ) : null}
        </div>
      </div>
    </div>
  );
}
