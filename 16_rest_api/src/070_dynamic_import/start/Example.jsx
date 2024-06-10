// 一般的なimportはstatic import

const Example = () => {
  // 「関数の」import
  // res.defaultにはdefault exportの値が返る
  // パスを動的に変更できるので dynamic import
  // JSの機能
  import("./add.js").then((module) => {
    console.log(module);
    console.log(module.add(1, 4));
  });
};

export default Example;
