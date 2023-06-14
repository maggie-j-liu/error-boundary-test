// "use client";
// ^ the error boundary only works if "use client" is uncommented
import Image from "next/image";
import React from "react";
import { ErrorBoundary } from "./error-boundary";

function ErrorThrowing() {
  throw new Error("error");
  return <div>error</div>;
}

export default function Home() {
  return (
    <div>
      <div>hello world</div>
      <ErrorBoundary>
        <ErrorThrowing />
      </ErrorBoundary>
    </div>
  );
}
