import React, { useEffect, useState } from "react";
import { ColorfullMessage } from "./components/ColorfullMessage";

const App = () => {
  console.log("さいしょ");

  const [num, setNum] = useState(0);
  const [faceShowflag, setFaceShowFlag] = useState(false);
  console.log(`num=${num}`);
  console.log(`faceShowflag=${faceShowflag}`);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowflag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        // ３の倍数の時に顔表示
        faceShowflag || setFaceShowFlag(true);
        // ただのsetFaceShowFlag(true);だとfaceShowflagがtrueのときも処理を行ってしまう。値はtrueのままで変わってないにしろ、useStateの更新があったために再レンダリングが起きてしまい無限ループのような形になってしまう。なので、左側がfalseの場合のみ処理を行うという形にするため、||を使い、条件つきで右側の処理をしてくれるようにしている
      } else {
        faceShowflag && setFaceShowFlag(false);
        // ただのsetFaceShowFlag(false);だとfaceShowflagがfalseのときも処理を行ってしまう。値はfalseのままで変わってないにしろ、useStateの更新があったために再レンダリングが起きてしまい無限ループのような形になってしまう。なので、左側がtrueの場合のみ処理を行うという形にするため、&&を使い、条件つきで右側の処理をしてくれるようにしている
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);
  // useEffectは第二引数の配列の中に入っている変数が変化したときだけ中の処理を実行する。その変数が変わらない限りはレンダリングの影響を受けない。

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>

      <ColorfullMessage color="blue">お元気ですかー？</ColorfullMessage>

      <ColorfullMessage color="pink">元気です</ColorfullMessage>

      <button onClick={onClickCountUp}>カウントアップ</button>
      <br></br>
      <button onClick={onClickSwitchShowFlag}>On/Off</button>
      <p>{num}</p>
      {faceShowflag && <p>( ;∀;)/</p>}
    </>
  );
};

export default App;
