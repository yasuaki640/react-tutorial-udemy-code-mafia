import { lazy, startTransition, Suspense, useState } from "react";

const LazyComponentA = lazy(() => import("./components/ComponentA.jsx"));
const LazyComponentB = lazy(() => import("./components/ComponentB.jsx"));

const Example = () => {
  const [compA, setCompA] = useState(true);

  return (
    <>
      <button
        onClick={() => {
          // Reactが状態の更新をtransitionとして扱う
          // transition -> 優先度の低いステート更新
          startTransition(() => {
            setCompA((prev) => !prev);
          });
        }}
      >
        ComponentA
      </button>
      <Suspense fallback={<div>Loading in suspense</div>}>
        {compA ? <LazyComponentA /> : <LazyComponentB />}
      </Suspense>
    </>
  );
};

export default Example;
