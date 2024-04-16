import { useState } from "react";

const animals: string[] = ["dog", "cat", "bird"];

export const ControlSyntax_2 = () => {
  const [maxim, setMaxim] = useState("あまり強い言葉を使うなよ 弱く見えるぞ");
  const onChange = (e) => setMaxim(e.target.value);

  const maximOptions = [
    "月島さんのおかげ",
    "一体いつからフルリモート勤務だと錯覚していた?",
    "命を刈り取る、形をしてるだろ？",
  ];

  return (
    <>
      <h2>fuck dip</h2>
      <p>Selected is 「{maxim}」</p>
      <div>
        {maximOptions.map((option) => (
          <div key={option}>
            <label>
              <input
                type="radio"
                value={option}
                checked={option === maxim}
                onChange={onChange}
              />
              {option}
            </label>
          </div>
        ))}
      </div>
    </>
  );
};
