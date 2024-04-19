import { ChangeEvent, useEffect, useState } from "react";

const animals: string[] = ["dog", "cat", "bird"];

type Maxim = {
  id: number;
  label: string;
  名言度: number;
  checked: boolean;
};

// カスタムフックを作成
function useMaxims(initialMaxims: Maxim[]) {
  const [maxims, setMaxims] = useState(initialMaxims);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    const computed = maxims
      .filter((m) => m.checked)
      .reduce((prev, curr) => prev + curr.名言度, 0);
    setSum(computed);
  }, [maxims]);

  const onCheckBoxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const toggledMaxims = maxims.map((m) => {
      const isClickedMaxim = m.id === parseInt(e.target.value);
      return {
        ...m,
        checked: isClickedMaxim ? !m.checked : m.checked,
      };
    });
    setMaxims(toggledMaxims);
  };

  return { maxims, sum, onCheckBoxChange };
}

export const ControlSyntax_2 = () => {
  const initialMaxims: Maxim[] = [
    { id: 1, label: "月島さんのおかげ", 名言度: 100, checked: false },
    {
      id: 2,
      label: "一体いつからフルリモート勤務だと錯覚していた?",
      名言度: 100,
      checked: false,
    },
    {
      id: 3,
      label: "命を刈り取る、形をしてるだろ？",
      名言度: 100,
      checked: false,
    },
    {
      id: 4,
      label: "あまり強い言葉を使うなよ、弱く見えるぞ",
      名言度: 234567890585,
      checked: false,
    },
  ];

  const { maxims, sum, onCheckBoxChange } = useMaxims(initialMaxims);

  return (
    <div>
      {maxims.map((m) => (
        <div key={m.label}>
          <input type="checkbox" value={m.id} onChange={onCheckBoxChange} />
          <label>
            {m.label} : {m.名言度}
          </label>
        </div>
      ))}
      <div>攻撃力の合計は {sum} です。</div>
    </div>
  );
};
