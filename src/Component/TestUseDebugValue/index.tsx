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
import useCountDown from '../TestCountDown';
const img = require('../TestCountDown/13.png')

function TestUseState() {
  const [countdown] = useCountDown(60);
  return (
    <div>
      <p>useDebugValue 可用于在 React 开发者工具中显示自定义 hook 的标签。</p>
      <Button type="primary">
        倒计时：{countdown}
      </Button>
      <img src={img} alt="" />
    </div>
  );
}
export default TestUseState;
