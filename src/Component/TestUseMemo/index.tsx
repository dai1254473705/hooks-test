/*
 * @Author: daiyunzhou daiyunz@chanjet.com
 * @Date: 2022-09-22 16:58:08
 * @LastEditors: daiyunzhou daiyunz@chanjet.com
 * @LastEditTime: 2022-09-23 13:58:39
 * @FilePath: /hooks/src/Component/testUseState/index.ts
 * @Description: 测试useState
 */
import React, { useCallback, useMemo, useState } from "react";
import { Typography, Button, Card } from "antd";
const { Paragraph } = Typography;

interface IProps {
  onClick(e: any): void;
  name:string;
}
const BtnComp: React.FC<IProps> = React.memo((props) => {
  const { onClick,name } = props;
  return <Button onClick={onClick}>{name}</Button>;
});

const ShowName: React.FC<{ count: number }> = React.memo((props) => {
  const { count } = props;
  const time = new Date().getTime();
  return (
    <div>
      count1+时间戳：{time}-{count}
    </div>
  );
});
function TestUseCallback() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  const onClick = useCallback(() => {
    console.log("--count--", count);
    // 修改count1
    setCount(count + 1);
  }, [count]);
  
  /**
   * 使用usecallback
   * 缓存函数，只有到count1改变的时候，才会去更新onClick1，否则不会改变;
   * 当处罚这个函数时，会修改count1,count1改变了，就会生成新的onClick1，此时BtnComp就会更新，因为props的onClick改变了
   */
  const onClick1 = useCallback(() => {
    console.log("--count1--", count1);
    // 修改count1
    setCount1(count1 + 1);
  }, [count1]);

  const dd = Math.ceil(Math.random() * 10);
  return (
    <div>
      <Card>
        <Paragraph>
          点击第二个按钮时，第一个第二个按钮对应组件都会重新渲染；
          但是点击第一个或者第三个，第二个就不会重新渲染
        </Paragraph>
      </Card>
      <div>
        <BtnComp name="改变count" onClick={onClick} />
        <BtnComp name="改变count1" onClick={onClick1} />
        <ShowName count={count1 + dd} />
        <ShowName count={useMemo(() => count1 + dd, [count1])} />
      </div>
    </div>
  );
}
export default TestUseCallback;
