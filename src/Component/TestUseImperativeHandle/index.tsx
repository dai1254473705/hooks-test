/*
 * @Author: daiyunzhou daiyunz@chanjet.com
 * @Date: 2022-09-22 16:58:08
 * @LastEditors: daiyunzhou daiyunz@chanjet.com
 * @LastEditTime: 2022-09-23 13:58:39
 * @FilePath: /hooks/src/Component/testUseState/index.ts
 * @Description: 测试useState
 */
import React, { useImperativeHandle,useRef,forwardRef, Ref } from "react";
import { Button } from "antd";

const FancyInput = forwardRef((props, ref)=>{
  const inputRef:any = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    myFn:()=>{
      
    }
  }));
  return <input ref={inputRef} {...props} />;
});

function TestUseState() {
  const inputRef:any = useRef();
  console.log('inputRef',inputRef);
  return (
    <div>
      <p>useImperativeHandle 可以让你在使用 ref 时自定义暴露给父组件的实例值。在大多数情况下，应当避免使用 ref 这样的命令式代码。useImperativeHandle 应当与 forwardRef 一起使用：</p>
      <FancyInput ref={inputRef}/>
      <Button onClick={()=>{
        inputRef.current.focus();
      }}>聚焦</Button>
    </div>
  );
}
export default TestUseState;
