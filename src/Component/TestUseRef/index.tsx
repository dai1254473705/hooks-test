/*
 * @Author: daiyunzhou daiyunz@chanjet.com
 * @Date: 2022-09-22 16:58:08
 * @LastEditors: daiyunzhou daiyunz@chanjet.com
 * @LastEditTime: 2022-09-23 13:58:39
 * @FilePath: /hooks/src/Component/testUseState/index.ts
 * @Description: 测试useState
 */
import React, { useState, useRef } from "react";
import { Button } from "antd";

function TestUseRef() {
  const inputEl: any = useRef(null);
  const onButtonClick = () => {
    // `current` 指向已挂载到 DOM 上的文本输入元素
    inputEl.current.focus();
  };
  return (
    <div>
      <p>
        useRef 返回一个可变的 ref 对象，其 .current
        属性被初始化为传入的参数（initialValue）。返回的 ref
        对象在组件的整个生命周期内保持不变。
      </p>
      <p>
        useRef() 比 ref 属性更有用。它可以很方便地保存任何可变值，其类似于在
        class 中使用实例字段的方式。
      </p>
      <>
        <input ref={inputEl} type="text" />
        <button onClick={onButtonClick}>Focus the input</button>
      </>
    </div>
  );
}
export default TestUseRef;
