/*
 * @Author: daiyunzhou daiyunz@chanjet.com
 * @Date: 2022-09-22 16:58:08
 * @LastEditors: daiyunzhou daiyunz@chanjet.com
 * @LastEditTime: 2022-09-23 13:58:39
 * @FilePath: /hooks/src/Component/testUseState/index.ts
 * @Description: 测试useState
 */
import React, {
  useState,
  useLayoutEffect,
  useEffect,
  useCallback,
} from "react";
import { Button } from "antd";

function TestUseLayoutEffect() {
  const [data, setData] = useState<string | number>("");
  const onClick = useCallback(() => {
    setData("");
  }, []);

  useEffect(() => {
    console.log("-useEffect--", data);
    if (!data) {
      for (let i = 0, len = 20000; i < len; i++) {
        // todo
        console.log(i);
      }
      const timeStamp = new Date().getTime();
      setData(timeStamp);
    }
  }, [data]);
  // useLayoutEffect(() => {
  //   console.log("-useLayoutEffect--", data);
  //   if (!data) {
  //     for (let i = 0, len = 20000; i < len; i++) {
  //       // todo
  //       console.log(i);
  //     }
  //     const timeStamp = new Date().getTime();
  //     setData(timeStamp);
  //   }
  // }, [data]);
  return (
    <div>
      <p>
        其函数签名与 useEffect 相同，但它会在所有的 DOM 变更之后同步调用
        effect。可以使用它来读取 DOM
        布局并同步触发重渲染。在浏览器执行绘制之前，useLayoutEffect
        内部的更新计划将被同步刷新。
      </p>
      <span>{data}</span>
      <Button type="primary" onClick={onClick}>
        显示
      </Button>
    </div>
  );
}
export default TestUseLayoutEffect;
