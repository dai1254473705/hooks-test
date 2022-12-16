/*
 * @Author: daiyunzhou daiyunz@chanjet.com
 * @Date: 2022-09-22 16:58:08
 * @LastEditors: daiyunzhou daiyunz@chanjet.com
 * @LastEditTime: 2022-09-23 13:58:39
 * @FilePath: /hooks/src/Component/testUseState/index.ts
 * @Description: 测试useState
 */
import React, { useState, useRef, useEffect, useDebugValue } from "react";
import { Button } from "antd";

function useCountDown(countdown: number = 60) {
  const [count, setCount] = useState(countdown);
  const countData: any = useRef({ timer: null, count: countdown });

  // 方法一
  // useEffect(() => {
  //   countData.current.timer = setInterval(() => {
  //     if (countData.current.count <= 0) {
  //       clearInterval(countData.current.timer);
  //       return;
  //     }
  //     const dd = countData.current.count -1;
  //     countData.current.count = dd;
  //     console.log('=倒计时呢===',countData.current.count);
  //     setCount(dd);
  //   }, 1000);

  //   // 清除副作用
  //   return ()=>{
  //     clearInterval(countData.current.timer);
  //   }
  // }, []);

  // 方法二
  useEffect(() => {
    countData.current.timer = setInterval(() => {
      console.log("=倒计时呢===", countData.current.count);
      setCount((data) => {
        return data - 1;
      });
    }, 1000);
    // 清除副作用
    return () => {
      clearInterval(countData.current.timer);
    };
  }, []);

  useEffect(() => {
    if (count <= 0) {
      clearInterval(countData.current.timer);
    }
  }, [count]);

  // e.g. "FriendStatus: Online"
  useDebugValue(count > 0 ? "12312313123" : "Offline");

  return [count];
}
export default useCountDown;
