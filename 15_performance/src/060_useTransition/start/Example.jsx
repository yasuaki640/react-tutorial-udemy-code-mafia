import { useState, useTransition } from "react";

const generateDummyItem = (num) => {
  // mapメソッドってundefinedをスキップするのか、、、知らなかった、、、
  return new Array(num).fill(null).map((item, index) => `item ${index}`);
};

const dummyItems = generateDummyItem(10000);

const Example = () => {
  // fnは引数にわたった処理の優先順位が下がる
  // 処理の遅延が目立ったら使うようにする
  // 優先順位付けするだけなので、やたら使うと結局どこかで重くなる
  const [isPending, startTransition] = useTransition();
  const [filterVal, setFilterVal] = useState("");

  const changeHandler = (e) => {
    // filter処理の優先順位を下げ、inputへの入力処理を優先させる事ができる
    startTransition(() => {
      setFilterVal(e.target.value);
    });
  };

  return (
    <>
      <input type="text" onChange={changeHandler} />
      {isPending && <div>Loading...</div>}
      <ul>
        {dummyItems
          .filter((item) => {
            if (filterVal === "") return true;
            return item.includes(filterVal);
          })
          .map((item) => (
            <li key={item}>{item}</li>
          ))}
      </ul>
    </>
  );
};

export default Example;
