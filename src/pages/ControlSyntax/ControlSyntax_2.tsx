import { useState } from "react";

const animals: string[] = ["dog", "cat", "bird"];

type Maxim = {
  label: string;
  名言度: number;
  checked: boolean;
};

export const ControlSyntax_2 = () => {
  const [maxim, setMaxim] = useState<Maxim[]>([
    { label: "月島さんのおかげ", 名言度: 100, checked: false },
    {
      label: "一体いつからフルリモート勤務だと錯覚していた?",
      名言度: 100,
      checked: false,
    },
    { label: "命を刈り取る、形をしてるだろ？", 名言度: 100, checked: false },
  ]);

  const [sum, setSum] = useState(0);

  return (
    <>
      <div>
        <div>私の攻撃力は : {sum}</div>
      </div>
    </>
  );
};
