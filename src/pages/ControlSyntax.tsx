import React from "react";

type ProfileProps = {
  name: string;
  age: number;
};

const Profile: React.FC<ProfileProps> = ({ name, age }) => {
  return (
    <div>
      <h3>Profile</h3>
      <ul>
        <li>Name : {name}</li>
        <li>Age : {age}</li>
      </ul>
    </div>
  );
};

const profiles: ProfileProps[] = [
  { name: "yasu", age: 123 },
  { name: "taro", age: 456 },
  { name: "hanako", age: 789 },
];

export const ControlSyntax = () => {
  return (
    <>
      <h3>練習問題</h3>
      <p>
        Profileコンポーネントを使用して、完成コードと同じ画面を作成してください。
      </p>
      <p>
        また、Profileコンポーネント内のリスト表示部分のkeyを設定して、ワーニング表示がされないようにしてください。
      </p>
      <div>
        {profiles.map((p) => (
          <Profile key={p.name + p.age} {...p} />
        ))}
      </div>
    </>
  );
};
