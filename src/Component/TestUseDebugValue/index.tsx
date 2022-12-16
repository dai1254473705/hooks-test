/*
 * @Author: daiyunzhou daiyunz@chanjet.com
 * @Date: 2022-09-22 16:58:08
 * @LastEditors: daiyunzhou daiyunz@chanjet.com
 * @LastEditTime: 2022-09-23 13:58:39
 * @FilePath: /hooks/src/Component/testUseState/index.ts
 * @Description: 测试useState
 */
import React, { useState } from "react";
import { Button } from "antd";

function TestUseState() {
  const [count, setCount] = useState(0);
  const onClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>You clicked {count} times</p>
      <Button type="primary" onClick={onClick}>
        计数器
      </Button>
    </div>
  );
}
export default TestUseState;
