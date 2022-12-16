/*
 * @Author: daiyunzhou daiyunz@chanjet.com
 * @Date: 2022-09-22 16:58:08
 * @LastEditors: daiyunzhou daiyunz@chanjet.com
 * @LastEditTime: 2022-09-23 13:58:39
 * @FilePath: /hooks/src/Component/testUseState/index.ts
 * @Description: 测试useState
 */
import React, { useCallback, useState } from "react";
import { Col, Row, Typography, Button, Card, Divider } from "antd";
const { Paragraph } = Typography;

interface IProps {
  onClick(e: any): void;
  count:number;
}
const BtnComp: React.FC<IProps> = React.memo((props) => {
  const { onClick,count } = props;
  const time = new Date().getTime();
  return <Button onClick={onClick}>点击-{time}-{count}</Button>;
});

function TestUseCallback() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  /**
   * 不使用usecallback
   * 只有当前作用域中有状态改变，就会重新生成onClick函数；
   * onClick函数改变，就会导致BtnComp重新渲染
   */
  const onClick = () => {
    console.log("--count--");
    setCount(count + 1);
  };

  /**
   * 使用usecallback
   * 缓存函数，只有到count1改变的时候，才会去更新onClick1，否则不会改变;
   * 当处罚这个函数时，会修改count1,count1改变了，就会生成新的onClick1，此时BtnComp就会更新，因为props的onClick改变了
   */
  const onClick1 = useCallback(() => {
    console.log("--count1--",count1);
    // 修改count1
    setCount1(count1 + 1);
  }, [count1]);

  return (
    <div>
      <Card>
        <Paragraph>
          点击第二个按钮时，第一个第二个按钮对应组件都会重新渲染；
          但是点击第一个或者第三个，第二个就不会重新渲染
        </Paragraph>
      </Card>
      <div>
        <div>count:{count}</div>
        <div>count1:{count1}</div>
        <BtnComp onClick={onClick} count={count}/>
        <BtnComp onClick={onClick1} count={count1}/>
      </div>
    </div>
  );
}
export default TestUseCallback;
